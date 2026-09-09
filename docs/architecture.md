# Phase 1 Architecture

## Trust boundary

The Phase 1 architecture deliberately terminates at the plugin process:

`local MCP client → 127.0.0.1/::1 → Express → stateless Streamable HTTP transport → MCP server → self-health tool`

No connector to GoreeCloud Drive, GitHub, Manager, Identity, Mesh, Everkeep, Privacy Shield, Wardveil Security, or any other GoreeCloud application/service exists in this phase.

## Request lifecycle

Each `/mcp` request creates a fresh MCP server and stateless Streamable HTTP transport. The server registers one read-only self-health tool, handles the request, and closes the request-scoped transport/server when the response closes.

## Security boundary

The unauthenticated Phase 1 process cannot bind to non-loopback addresses. Remote publication is intentionally impossible from repository configuration alone.

## Data model

There is no application-owned persistent data in Phase 1. Health data is generated in memory and contains only static lifecycle/capability fields plus observation time.

## Future boundaries

Remote access, delegated identity, GoreeCloud service identities, read-only knowledge APIs, interactive Apps SDK UI, controlled writes, and operational actions each require separate design and acceptance work.
