export class LoginPage {

    constructor(){
       
        this.userInput = "[data-cy='user']"
        this.passInput = "[data-cy='pass']"
        this.loginButton = "[data-cy='submitForm']"

    }

    clickOnUser(){
        cy.get(this.userInput).type(Cypress.env().user)
    }
    clickOnPass(){
        cy.get(this.passInput).type(Cypress.env().password)
    }

    clickOnLogin(){
        cy.get(this.loginButton).click();
    }
}