# GoreeCloud ChatGPT Plugin — Features

## Implemented in the Phase 1 foundation candidate

- Native GoreeCloud TypeScript MCP server foundation.
- Stateless MCP Streamable HTTP endpoint at `/mcp`.
- Loopback-only default and enforced Phase 1 bind boundary.
- Local `/healthz` and `/readyz` endpoints.
- Read-only `goreecloud.get_service_health` MCP tool limited to plugin self-state.
- Repository validation, formatting/static lint checks, TypeScript validation, tests, build, and dependency audit workflow.
- Machine-readable GoreeCloud Platform Contract 0.2 manifest.
- AGPL-3.0-only licensing declaration.

These are candidate branch capabilities until PR integration and post-merge verification are complete.

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

1. Complete and verify the Phase 1 repository/MCP foundation.
2. Design and approve authentication plus remote publication boundaries.
3. Add narrowly scoped read-only GoreeCloud knowledge integrations through approved backend interfaces.
4. Implement and prove applicable platform-system integrations, including current Stable Glaze UI where a GoreeCloud-controlled UI surface exists.
5. Add controlled writes only after separate authorization, audit, recovery, privacy, and security acceptance.
6. Add operational actions only after underlying services expose stable, authenticated, auditable, recoverable APIs.
