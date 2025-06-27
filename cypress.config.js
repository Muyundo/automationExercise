const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "ccj1tu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
