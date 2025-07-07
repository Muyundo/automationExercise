const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
       projectId: "ccj1tu",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
reporter: 'mochawesome',
reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
}

  },
});
