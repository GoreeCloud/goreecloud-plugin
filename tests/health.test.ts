import assert from "node:assert/strict";
import test from "node:test";
import { getPluginHealth } from "../mcp/server/src/health.js";

test("health is self-only and does not claim gated capabilities", () => {
  const health = getPluginHealth(new Date("2026-09-09T00:00:00.000Z"));
  assert.equal(health.status, "ok");
  assert.equal(health.lifecycle, "development");
  assert.equal(health.scope, "self-only");
  assert.equal(health.remotePublicationApproved, false);
  assert.equal(health.authenticationImplemented, false);
  assert.equal(health.externalGoreeCloudIntegrationsImplemented, false);
  assert.equal(health.writeCapabilitiesImplemented, false);
  assert.equal(health.productionAccepted, false);
  assert.equal(health.observedAt, "2026-09-09T00:00:00.000Z");
});
