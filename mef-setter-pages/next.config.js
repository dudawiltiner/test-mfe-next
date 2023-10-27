/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const nextConfig = {
  output: "standalone",
  compiler: {
    ...(process.env.NODE_ENV === "production"
      ? {
          reactRemoveProperties: {
            properties: ["^data-cy$"],
          },
          removeConsole: true,
        }
      : {}),
  },
};

const nextMFConfig = {
  webpack(config, { isServer }) {
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "setterMFE",
          filename: "static/chunks/remoteEntry.js",
          exposes: { "./modal": "./src/components/templates/Modal/index.tsx" },
          shared: {},
        })
      );
    }

    return config;
  },
};

module.exports = { ...nextConfig, ...nextMFConfig };
