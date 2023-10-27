import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          alias: {
            '@components': path.resolve(__dirname, './src/components'),
          },
        },
      },
    },
  },
  e2e: {
    specPattern: [
      'cypress/e2e/1-register/*.ts',
      'cypress/e2e/2-login/*.ts',
      'cypress/e2e/3-home/*.ts',
    ],
  },
  viewportWidth: 1024,
  viewportHeight: 768,
  video: false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  screenshotsFolder: 'cypress/results/mochawesome-report/assets',
});
