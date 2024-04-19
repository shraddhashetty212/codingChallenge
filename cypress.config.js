const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/tasks/*.js',
    env: {
      url : "https://computer-database.gatling.io/computers"
    }
  },
});
