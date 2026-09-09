# Phase 1 Recovery

Phase 1 stores no application-owned persistent state.

## Recovery procedure

1. Stop the local process.
2. Replace the working tree with a known-good authoritative Git revision.
3. Remove generated `node_modules/` and `dist/` directories.
4. Run `npm install --ignore-scripts` from the exact-pinned `package.json` baseline.
5. Run `npm run check` and `npm audit --audit-level=high`.
6. Start the loopback Development server.
7. Verify `/healthz` and `/readyz` before reconnecting a local MCP client.

## Rollback

Rollback is a Git revision rollback followed by a clean dependency install/build. No application data migration is required in Phase 1.

Future persistent state or remote deployment invalidates this simple recovery model and requires an updated Everkeep/backup/restore design before acceptance.
