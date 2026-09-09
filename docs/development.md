# Development and Validation

## Baseline

Use Node.js 22.x and install the exact direct dependency versions declared in `package.json` with lifecycle scripts disabled for baseline validation.

## Full validation

```bash
npm install --ignore-scripts
npm run check
npm audit --audit-level=high
```

`npm run check` performs repository-control validation, text linting, TypeScript type checking, tests, and a build.

## Platform manifest validation

`goreecloud.platform.yaml` is intentionally JSON-form YAML so it is valid YAML while remaining deterministically parseable by the repository validation script. The manifest targets Platform Contract schema `0.2` and must also be checked against the authoritative central GoreeCloud schema during material conformance work.

## Source rules

- No active secrets in source or examples.
- No unrestricted execution primitives.
- Keep the unauthenticated Phase 1 server loopback-only.
- Add external GoreeCloud integrations only through separately approved, purpose-specific interfaces.
- Treat current platform-system blockers as blockers until accepted evidence exists.

## Reproducibility follow-up

A reviewed committed dependency lockfile is still required before any Release Candidate or Stable qualification. Its absence must remain visible until generated and validated in a network-enabled environment.
