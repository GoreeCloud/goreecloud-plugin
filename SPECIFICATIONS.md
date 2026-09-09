# GoreeCloud ChatGPT Plugin — Specifications

## Status

Development — Phase 1 foundation. This repository specification is subordinate to the canonical GoreeCloud Drive project specification and governing GoreeCloud instructions.

## Purpose

Provide a narrowly scoped, auditable MCP / OpenAI Apps SDK integration layer that can eventually expose approved GoreeCloud capabilities without granting a conversational client unrestricted platform access.

## Phase 1 architecture

`MCP client → loopback Streamable HTTP → GoreeCloud Plugin MCP server → self-health tool only`

Phase 1 intentionally stops at the plugin process boundary. There is no GoreeCloud API integration, service identity, delegated user identity, remote publication, persistent application data, privileged execution, or Apps SDK widget surface yet.

## Runtime

- Node.js: 22.x
- Language: TypeScript
- Module system: ESM
- MCP transport: stateless Streamable HTTP
- Default bind: `127.0.0.1:8787`
- MCP endpoint: `/mcp`
- Health endpoint: `/healthz`
- Readiness endpoint: `/readyz`

## Current dependencies

The Phase 1 package set follows the current OpenAI Apps SDK MCP Node example family while removing dependencies that are not needed by this bounded server.

- `@modelcontextprotocol/ext-apps` — Apps SDK / MCP Apps server helpers
- `@modelcontextprotocol/sdk` — MCP server and Streamable HTTP transport
- `express` — loopback HTTP server
- `zod` — tool input schema construction
- TypeScript / `tsx` — development and validation

Direct dependency versions are exact-pinned in `package.json`; Phase 1 CI resolves and audits the transitive dependency graph. A committed lockfile remains a follow-up reproducibility improvement until it can be generated and reviewed from a network-enabled validation environment.

## Implemented MCP tool

### `goreecloud.get_service_health`

Purpose: report only the development state of this plugin process.

Risk class: Class 1 — Read.

Properties:

- read-only
- non-destructive
- closed-world
- idempotent
- no arguments
- no external data access
- no write side effects

The result explicitly communicates that remote publication, authentication, external GoreeCloud integrations, controlled writes, and production acceptance are false/unimplemented.

## Fail-closed network boundary

Until a separately approved authentication and publication design exists, the server accepts only literal loopback hosts `127.0.0.1` and `::1`. Non-loopback configuration is rejected at startup.

This repository does not include a bypass flag for that restriction in Phase 1.

## Platform Contract

`goreecloud.platform.yaml` uses Platform Contract schema version `0.2` and records all seven integral platform systems. Unimplemented integrations are declared `applicable-blocked`; schema validity does not imply Stable conformance.

Current required Glaze UI target: V1.3 / `1.3.0`. No interactive Glaze UI surface is implemented in Phase 1.

## Acceptance boundary

Phase 1 may be considered integrated only after:

1. root repository controls are present and substantive;
2. dependencies install the exact direct dependency versions declared in `package.json`;
3. repository validation, lint, typecheck, tests, build, and dependency audit pass;
4. the branch is reviewed through a pull request;
5. the exact merged revision is read back and revalidated;
6. canonical task, roadmap, specification, and change records are synchronized.

This does not qualify the product for Release Candidate, Stable, remote deployment, or production use.
