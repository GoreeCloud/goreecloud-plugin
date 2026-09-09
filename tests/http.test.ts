import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "node:http";
import { once } from "node:events";
import { createHttpApp } from "../mcp/server/src/server.js";

test("health and readiness endpoints expose only development self-state", async () => {
  const server = createServer(createHttpApp());
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  try {
    const address = server.address();
    assert.ok(address && typeof address === "object");
    const base = `http://127.0.0.1:${address.port}`;

    const healthResponse = await fetch(`${base}/healthz`);
    assert.equal(healthResponse.status, 200);
    const health = await healthResponse.json() as Record<string, unknown>;
    assert.equal(health.scope, "self-only");
    assert.equal(health.productionAccepted, false);

    const readyResponse = await fetch(`${base}/readyz`);
    assert.equal(readyResponse.status, 200);
    const ready = await readyResponse.json() as Record<string, unknown>;
    assert.equal(ready.status, "ready");
    assert.equal(ready.scope, "self-only");
  } finally {
    server.close();
    await once(server, "close");
  }
});
