# GoreeCloud ChatGPT Plugin — Development User Manual

## Scope

This manual covers only the Phase 1 local Development server. It does not describe production or remote ChatGPT deployment because those states are not approved.

## Requirements

- Node.js 22.x
- npm compatible with the exact direct dependency versions in `package.json`

## Install

```bash
npm install --ignore-scripts
```

## Validate

```bash
npm run validate:repository
npm run lint
npm run typecheck
npm test
npm run build
npm audit --audit-level=high
```

## Start locally

```bash
npm start
```

Default endpoints:

- MCP: `http://127.0.0.1:8787/mcp`
- health: `http://127.0.0.1:8787/healthz`
- readiness: `http://127.0.0.1:8787/readyz`

## Configuration

Use `.env.example` as the non-secret configuration reference. The host may be set only to a literal loopback address in Phase 1.

```bash
GOREECLOUD_PLUGIN_HOST=127.0.0.1
GOREECLOUD_PLUGIN_PORT=8787
```

A non-loopback host causes startup validation to fail. There is intentionally no Phase 1 override to publish the unauthenticated server remotely.

## MCP tool

`goreecloud.get_service_health` returns only the plugin's own Development status and capability boundaries. It does not query other GoreeCloud systems.

## Stop

Terminate the local Node process. Phase 1 has no persistent application state to migrate or recover.
