# GoreeCloud ChatGPT Plugin — Specifications

## Status

**Development — Phase 1 foundation accepted.** This repository specification is subordinate to the canonical GoreeCloud Drive project specification and governing GoreeCloud instructions.

Phase 1 was accepted through PR #1 and is present on authoritative `main` at `9ebe86169ae57a310ee745a88aef6826c4890b8a`. This acceptance establishes only the bounded Development foundation described below; it does not qualify the Plugin for Release Candidate, Stable, remote publication, or production use.

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

The accepted Phase 1 package set follows the OpenAI Apps SDK / MCP family while incorporating peer-compatibility and security corrections proven by GitHub Actions.

- `@modelcontextprotocol/ext-apps` `1.0.1` — Apps SDK / MCP Apps server helper foundation
- `@modelcontextprotocol/sdk` `1.30.0` — MCP server and Streamable HTTP transport
- `express` `5.1.0` — loopback HTTP server
- `zod` `3.25.0` — tool schema construction and validation
- TypeScript `5.9.2` / `tsx` `4.23.13` — development and validation

Direct dependency versions are exact-pinned in `package.json`; CI resolves and audits the transitive dependency graph. The accepted graph reports zero vulnerabilities. A reviewed committed lockfile remains a reproducibility requirement before any Release Candidate or Stable qualification.

## Implemented MCP tool

### `goreecloud.get_service_health`

Purpose: report only the Development state of this Plugin process.

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

Current required Glaze UI target: V1.3 / `1.3.0`, as controlled by the canonical Glaze UI repository and current Platform Contract validator. No interactive Glaze UI surface is implemented in Phase 1.

## Phase 1 acceptance evidence

The following evidence establishes the Phase 1 Development foundation as integrated:

1. mandatory repository controls are present and substantive;
2. direct dependencies install successfully with compatible exact pins;
3. exact-head PR CI run `34313749897` passed repository validation, Platform Contract 0.2 validation, lint, typecheck, tests, build, and dependency audit;
4. PR #1 was squash-merged to `main` as `9ebe86169ae57a310ee745a88aef6826c4890b8a`;
5. post-merge `main` CI run `34313814872` passed the same required gates;
6. final dependency installation/audit reported zero vulnerabilities.

Canonical task, roadmap, project specification, feature, and change records must remain synchronized with this verified repository state. Phase 1 acceptance does not qualify the product for Release Candidate, Stable, remote deployment, production use, external GoreeCloud data access, or writes.

## Next phase

Phase 2 is read-only GoreeCloud knowledge integration. Before any external read access is enabled, the Plugin requires an approved authentication/authorization and remote-publication trust boundary. Controlled writes remain deferred to later separately accepted phases.
