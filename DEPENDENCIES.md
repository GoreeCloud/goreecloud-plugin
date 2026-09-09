# Dependency Record

## Runtime dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| `@modelcontextprotocol/ext-apps` | `1.0.1` | MCP Apps / Apps SDK server helper layer. |
| `@modelcontextprotocol/sdk` | `1.30.0` | MCP server and stateless Streamable HTTP transport; satisfies the selected ext-apps peer contract and clears the high-severity SDK advisories identified by CI. |
| `express` | `5.1.0` | Loopback HTTP server. |
| `zod` | `3.25.0` | MCP tool schema construction/validation; minimum Zod v3 version satisfying the selected MCP peer contracts. |

## Development dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| `@types/express` | `5.0.3` | Express TypeScript declarations. |
| `@types/node` | `22.20.1` | Node.js 22 TypeScript declarations used by the standalone TypeScript project and tests. |
| `tsx` | `4.23.13` | TypeScript Development execution and tests; selected to clear the audited vulnerable `esbuild` dependency path. |
| `typescript` | `5.9.2` | Compiler/type validation. |

## Source and review

The Phase 1 dependency family was selected from the official OpenAI Apps SDK Node MCP example and then reconciled against the actual npm peer-dependency and security evidence produced by GitHub Actions. The initial example-era pins (`@modelcontextprotocol/sdk` 1.12.1 and Zod 3.24.4) did not satisfy `@modelcontextprotocol/ext-apps` 1.0.1. CI reported that ext-apps 1.0.1 requires SDK `^1.24.0`; the selected MCP packages also require Zod 3.25 or later.

A subsequent exact-head audit found a high-severity advisory affecting `@modelcontextprotocol/sdk` through 1.25.3 and a moderate advisory in the `tsx` 4.19.2 → `esbuild` dependency path. The branch therefore pins SDK 1.30.0 and `tsx` 4.23.13 rather than bypassing peer checks or disabling the audit gate. Zod remains pinned at 3.25.0 because it satisfies the selected peer contracts.

The GoreeCloud server intentionally omits CORS because Phase 1 exposes no browser/widget surface and is loopback-only.

Direct dependencies are exact-pinned in `package.json`. The transitive graph is resolved and audited in CI. A reviewed committed lockfile is still required before any Release Candidate or Stable qualification.
