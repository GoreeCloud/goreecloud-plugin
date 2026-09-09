# GoreeCloud ChatGPT Plugin — Feature Roadmap

**Status:** Active roadmap control
**As of:** 2026-09-08
**Authoritative project record:** Project Specification — ChatGPT Plugin
**Canonical repository:** GoreeCloud/goreecloud-plugin
**Drive control:** `GoreeCloud/Feature Roadmap/GoreeCloud ChatGPT Plugin/FEATURE-ROADMAP.docx`

## Purpose

This file is the repository-side feature roadmap control for GoreeCloud ChatGPT Plugin. It records current planned and recommended feature work without replacing the authoritative project record, implementation evidence, release gates, or GoreeCloud Tasks Management.

## Roadmap

| ID | Feature / obligation | Priority | Current state |
| --- | --- | --- | --- |
| PLUGIN-001 | Establish and maintain the GoreeCloud/goreecloud-plugin repository baseline, required repository controls, licensing, and source structure. | High | Phase 1 candidate implemented on `agent/plugin-phase1-foundation`; acceptance requires PR integration and post-merge verification. |
| PLUGIN-002 | Implement the bounded Apps SDK / MCP foundation. | High | Phase 1 candidate implements a loopback-only MCP server and read-only self-health tool; remote publication/authentication remain blocked. |
| PLUGIN-003 | Add read-only GoreeCloud knowledge integration before any controlled write capability. | High | Planned; not implemented in Phase 1. |
| PLUGIN-004 | Integrate applicable current platform systems, including Glaze UI where a GoreeCloud-controlled UI exists, then introduce controlled writes and operational integrations through explicit acceptance gates. | High | Future / gated. |

## Maintenance and synchronization

- Keep this repository file synchronized with the canonical Drive roadmap.
- Do not mark planned work complete from documentation alone.
- Record implementation and verification evidence before lifecycle promotion.
- Reconcile this roadmap whenever authoritative project scope or platform requirements change.
