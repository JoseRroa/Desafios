// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//
   import './requests/product';
Cypress.Commands.add('login',(username, password)=>{
    cy.request({
        method: "POST",
        url: `${Cypress.env().base_url_api}/login`,
        body:{
            username : username,
            password : password
             },
        }).then((response)=>{
            window.localStorage.setItem("Token", response.body.token);
            window.localStorage.setItem("User", response.body.username);
            window.localStorage.setItem("UserId", response.body.user._id);
            Cypress.env().token = response.body.token;
    })
})