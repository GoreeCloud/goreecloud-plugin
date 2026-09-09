# Dependency Record

## Runtime dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| `@modelcontextprotocol/ext-apps` | `1.0.1` | MCP Apps / Apps SDK server helper layer. |
| `@modelcontextprotocol/sdk` | `1.12.1` | MCP server and stateless Streamable HTTP transport. |
| `express` | `5.1.0` | Loopback HTTP server. |
| `zod` | `3.24.4` | MCP tool schema construction/validation. |

## Development dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| `@types/express` | `5.0.3` | Express TypeScript declarations. |
| `tsx` | `4.19.2` | TypeScript Development execution and tests. |
| `typescript` | `5.9.2` | Compiler/type validation. |

## Source and review

The dependency family and versions were selected from the current official OpenAI Apps SDK Node MCP example baseline available during Phase 1 implementation. The GoreeCloud server intentionally omits CORS because Phase 1 exposes no browser/widget surface and is loopback-only.

Direct dependencies are exact-pinned in `package.json`. The transitive graph is resolved and audited in CI. A reviewed committed lockfile is still required before any Release Candidate or Stable qualification.
