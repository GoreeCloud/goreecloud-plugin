# GoreeCloud ChatGPT Plugin — Features

## Implemented in the accepted Phase 1 Development foundation

- Native GoreeCloud TypeScript MCP server foundation.
- Stateless MCP Streamable HTTP endpoint at `/mcp`.
- Loopback-only default and enforced Phase 1 bind boundary.
- Local `/healthz` and `/readyz` endpoints.
- Read-only `goreecloud.get_service_health` MCP tool limited to plugin self-state.
- Repository validation, text lint, TypeScript typecheck, tests, build, and dependency audit workflow.
- Machine-readable GoreeCloud Platform Contract 0.2 manifest.
- AGPL-3.0-only licensing declaration.

Phase 1 was accepted through PR #1 and squash-merged to `main` as `9ebe86169ae57a310ee745a88aef6826c4890b8a`. Exact-head PR CI run `34313749897` and post-merge `main` CI run `34313814872` passed all required gates. The accepted dependency graph reported zero vulnerabilities. The product remains **Development** and is not approved for remote publication or production use.

## Explicitly not implemented

- ChatGPT-hosted or Apps SDK widget UI.
- Glaze UI consumer implementation or acceptance evidence.
- GoreeCloud Identity authentication or authorization.
- Privacy Shield integration.
- Wardveil Security runtime integration.
- Everkeep continuity integration.
- GoreeCloud Mesh integration.
- GoreeCloud Manager integration.
- Remote MCP publication or secure tunnel configuration.
- GoreeCloud Drive, GitHub, Tasks, project, deployment, or monitoring retrieval.
- Controlled writes.
- Operational actions.
- Administrative or destructive actions.
- Persistent application data.
- Production deployment.

## Planned progression

1. Design and approve authentication and remote-publication trust boundaries.
2. Add narrowly scoped read-only GoreeCloud knowledge integrations through approved backend interfaces.
3. Implement and prove applicable platform-system integrations, including current Stable Glaze UI where a GoreeCloud-controlled UI surface exists.
4. Add controlled writes only after separate authorization, audit, recovery, privacy, and security acceptance.
5. Add operational actions only after underlying services expose Stable, authenticated, auditable, recoverable APIs and the Plugin passes the applicable acceptance gates.
