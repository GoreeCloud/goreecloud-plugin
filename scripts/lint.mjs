import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignored = new Set(["node_modules", "dist", ".git"]);
const checkedExtensions = new Set([".ts", ".js", ".mjs", ".md", ".json", ".yaml", ".yml"]);
const problems = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }
    if (!checkedExtensions.has(path.extname(entry.name)) && ![".editorconfig", ".gitignore"].includes(entry.name)) continue;
    if (entry.name === "package-lock.json") continue;
    const text = await readFile(fullPath, "utf8");
    const relative = path.relative(root, fullPath);
    if (!text.endsWith("\n")) problems.push(`${relative}: missing final newline`);
    text.split("\n").forEach((line, index) => {
      if (/\s+$/.test(line) && line.length > 0) problems.push(`${relative}:${index + 1}: trailing whitespace`);
      if (line.includes("\t")) problems.push(`${relative}:${index + 1}: tab character`);
    });
  }
}

await walk(root);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("Repository text lint passed.");
