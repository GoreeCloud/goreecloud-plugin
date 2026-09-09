export const PLUGIN_VERSION = "0.1.0-dev";

export interface PluginHealth {
  service: "goreecloud-plugin";
  productName: "GoreeCloud ChatGPT Plugin";
  lifecycle: "development";
  version: string;
  status: "ok";
  scope: "self-only";
  remotePublicationApproved: false;
  authenticationImplemented: false;
  externalGoreeCloudIntegrationsImplemented: false;
  writeCapabilitiesImplemented: false;
  productionAccepted: false;
  observedAt: string;
}

export function getPluginHealth(now: Date = new Date()): PluginHealth {
  return {
    service: "goreecloud-plugin",
    productName: "GoreeCloud ChatGPT Plugin",
    lifecycle: "development",
    version: PLUGIN_VERSION,
    status: "ok",
    scope: "self-only",
    remotePublicationApproved: false,
    authenticationImplemented: false,
    externalGoreeCloudIntegrationsImplemented: false,
    writeCapabilitiesImplemented: false,
    productionAccepted: false,
    observedAt: now.toISOString(),
  };
}
