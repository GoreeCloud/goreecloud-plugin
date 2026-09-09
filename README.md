# GoreeCloud ChatGPT Plugin

GoreeCloud ChatGPT Plugin is the GoreeCloud-owned conversational integration layer for approved ChatGPT, Codex, and compatible MCP/App clients.

## Current lifecycle

**Development — Phase 1 foundation.** This repository currently provides only a loopback-bound MCP development server, local health/readiness endpoints, and one read-only self-health MCP tool. It does **not** provide access to GoreeCloud Drive, GitHub, tasks, user data, infrastructure, shell, filesystems, databases, deployment controls, or administrative operations.

The repository is not Release Candidate, Stable, production-ready, or approved for remote publication.

## Implemented Phase 1 surface

- MCP Streamable HTTP endpoint: `http://127.0.0.1:8787/mcp`
- Local health endpoint: `http://127.0.0.1:8787/healthz`
- Local readiness endpoint: `http://127.0.0.1:8787/readyz`
- MCP tool: `goreecloud.get_service_health`
  - read-only
  - self-service status only
  - no external network access
  - no mutation capability
- Fail-closed loopback binding in the unauthenticated Phase 1 baseline

## Development

```bash
npm install --ignore-scripts
npm run validate:repository
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

Configuration is documented in `.env.example`. The Phase 1 server refuses non-loopback host bindings because authentication and remote publication are not yet implemented.

## Governance

The repository follows the GoreeCloud Platform Contract 0.2 and declares its current blocked/nonconformant platform-system state in `goreecloud.platform.yaml`. Missing platform integrations are intentionally represented as blockers rather than hidden or implied as complete.

See:

- `SPECIFICATIONS.md` — current technical specification
- `FEATURES.md` — implemented and planned capabilities
- `FEATURE-ROADMAP.md` — roadmap control
- `SECURITY.md` — security boundaries and reporting guidance
- `USER-MANUAL.md` — current Development usage
- `docs/architecture.md` — Phase 1 architecture and trust boundaries
- `docs/recovery.md` — recovery model
- `deploy/README.md` — deployment prohibition/current gate

## License

GoreeCloud ChatGPT Plugin is licensed under **GNU Affero General Public License v3.0 only (AGPL-3.0-only)**. See `LICENSE`.
