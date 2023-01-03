const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cs19yf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  fixturesFolder: false,
  video: false,
})
