import { registerAppTool } from "@modelcontextprotocol/ext-apps/server";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getPluginHealth, PLUGIN_VERSION } from "./health.js";

export function createMcpServer(): McpServer {
  const server = new McpServer({
    name: "goreecloud-plugin",
    version: PLUGIN_VERSION,
  });

  registerAppTool(
    server,
    "goreecloud.get_service_health",
    {
      title: "Get GoreeCloud Plugin Service Health",
      description:
        "Returns only the GoreeCloud ChatGPT Plugin process Development status and capability boundaries. " +
        "It does not access other GoreeCloud services, repositories, documents, user data, infrastructure, or external networks.",
      inputSchema: {},
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async () => {
      const health = getPluginHealth();
      return {
        content: [{ type: "text" as const, text: JSON.stringify(health) }],
        structuredContent: health,
      };
    },
  );

  return server;
}
