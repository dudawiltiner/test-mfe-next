/** @type {import('next').NextConfig} */
const NextFederationPlugin =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@module-federation/nextjs-mf');
const nextConfig = {
  output: 'standalone',
  compiler: {
    ...(process.env.NODE_ENV === 'production'
      ? {
          reactRemoveProperties: {
            properties: ['^data-cy$'],
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
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            core: `core@http://localhost:3001/remoteEntry.js`,
          },
          exposes: {},
          shared: {},
        })
      );
    }

    return config;
  },
};

module.exports = { ...nextConfig, ...nextMFConfig };
