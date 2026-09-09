import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";
import { loadConfig } from "./config.js";
import { getPluginHealth } from "./health.js";
import { createMcpServer } from "./mcp.js";

export function createHttpApp() {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({ limit: "64kb" }));

  app.get("/healthz", (_req, res) => {
    res.status(200).json(getPluginHealth());
  });

  app.get("/readyz", (_req, res) => {
    res.status(200).json({ status: "ready", lifecycle: "development", scope: "self-only" });
  });

  app.all("/mcp", async (req, res) => {
    const server = createMcpServer();
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });

    res.on("close", () => {
      void transport.close();
      void server.close();
    });

    try {
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      console.error("MCP request failed", error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "Internal server error" },
          id: null,
        });
      }
    }
  });

  return app;
}

export function startServer(): void {
  const config = loadConfig();
  const app = createHttpApp();
  app.listen(config.port, config.host, () => {
    console.log(`GoreeCloud ChatGPT Plugin Development MCP server listening on http://${config.host}:${config.port}/mcp`);
  });
}

const entry = process.argv[1];
if (entry && import.meta.url === new URL(entry, "file:").href) {
  startServer();
}
