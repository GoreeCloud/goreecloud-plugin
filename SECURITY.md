# GoreeCloud ChatGPT Plugin — Security

## Current security posture

Phase 1 is a Development-only, unauthenticated, loopback-bound MCP foundation. It is **not** approved for public or remote network exposure.

## Enforced boundaries

- Server bind host must be `127.0.0.1` or `::1`.
- The only MCP tool is read-only and reports plugin self-state.
- No generic shell, command execution, filesystem write, database query, arbitrary HTTP request, deployment, infrastructure, secret-management, or administrative tool is exposed.
- No GoreeCloud user, family, project, repository, document, or operational data is accessed.
- No active secret is required by the Phase 1 server.
- Request JSON size is bounded.

## Not yet implemented

- GoreeCloud Identity authentication or authorization.
- OAuth/service-identity flows.
- Wardveil Security runtime controls.
- Privacy Shield integration.
- Remote MCP publication.
- Production secrets handling.
- Controlled writes, operational actions, privileged administration, destructive actions.

These absences are blockers, not accepted exceptions.

## Dependency security

CI installs exact-pinned direct dependencies with lifecycle scripts disabled and runs `npm audit --audit-level=high`. A reviewed lockfile remains a Phase 1 reproducibility follow-up; dependency changes still require explicit review and validation.

## Reporting security issues

Do not publish credentials, private user information, exploit details containing reusable secrets, or other protected GoreeCloud information in a public issue. Use an approved private GoreeCloud security/contact channel or GitHub's private vulnerability-reporting interface when it is enabled for the repository.

## Production gate

Remote publication requires a separately designed and accepted authentication, authorization, network-exposure, privacy, logging, abuse-control, recovery, monitoring, and rollback model before it can be enabled.
