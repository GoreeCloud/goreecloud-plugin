import assert from "node:assert/strict";
import test from "node:test";
import { loadConfig } from "../mcp/server/src/config.js";

test("defaults to loopback and port 8787", () => {
  assert.deepEqual(loadConfig({}), { host: "127.0.0.1", port: 8787 });
});

test("accepts IPv6 loopback", () => {
  assert.deepEqual(loadConfig({ GOREECLOUD_PLUGIN_HOST: "::1", GOREECLOUD_PLUGIN_PORT: "9000" }), {
    host: "::1",
    port: 9000,
  });
});

test("rejects non-loopback binding", () => {
  assert.throws(() => loadConfig({ GOREECLOUD_PLUGIN_HOST: "0.0.0.0" }), /Remote publication is not approved/);
});

test("rejects invalid ports", () => {
  for (const value of ["0", "65536", "abc", "8787.5"]) {
    assert.throws(() => loadConfig({ GOREECLOUD_PLUGIN_PORT: value }), /must be an integer/);
  }
});
