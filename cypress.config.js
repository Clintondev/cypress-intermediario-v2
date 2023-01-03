const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cs19yf',
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false,
  video: false,
})
