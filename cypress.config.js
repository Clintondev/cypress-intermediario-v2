const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cs19yf',
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})
