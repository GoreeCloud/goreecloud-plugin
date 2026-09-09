export interface ServerConfig {
  host: "127.0.0.1" | "::1";
  port: number;
}

const LOOPBACK_HOSTS = new Set(["127.0.0.1", "::1"]);

export function loadConfig(env: NodeJS.ProcessEnv = process.env): ServerConfig {
  const requestedHost = (env.GOREECLOUD_PLUGIN_HOST ?? "127.0.0.1").trim();
  if (!LOOPBACK_HOSTS.has(requestedHost)) {
    throw new Error(
      "Phase 1 is unauthenticated and may bind only to 127.0.0.1 or ::1. Remote publication is not approved.",
    );
  }

  const rawPort = (env.GOREECLOUD_PLUGIN_PORT ?? "8787").trim();
  if (!/^\d+$/.test(rawPort)) {
    throw new Error("GOREECLOUD_PLUGIN_PORT must be an integer from 1 through 65535.");
  }
  const port = Number(rawPort);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("GOREECLOUD_PLUGIN_PORT must be an integer from 1 through 65535.");
  }

  return { host: requestedHost as ServerConfig["host"], port };
}
