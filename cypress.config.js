const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pushing-it.vercel.app/",
    watchForFileChanges : false,
    defaultCommandTimeout : 8000,
    fixturesFolder : 'cypress/e2e/',
    env:{
      user : "pushingit",
      password : "123456!",

      users:{
        admin: {
          username: "pushingit",
          password :"123456!"
        },
        regular:{
          username: "pushingit",
          password :"123456!"
        },
       
      },
      base_url_api :"https://pushing-it-3.onrender.com/api",
      token : null,
    }
  },
});
