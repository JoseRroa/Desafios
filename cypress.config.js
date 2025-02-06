const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pushing-it.vercel.app/",
    watchForFileChanges : false,
    defaultCommandTimeout : 10000,
    fixturesFolder : 'cypress/e2e/',
    env:{
      user : "pushingit",
      password : "123456!"
    }
  },
});
