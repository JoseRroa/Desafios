export class LoginPage {

    constructor(){
       
        this.userInput = "[data-cy='user']"
        this.passInput = "[data-cy='pass']"
        this.loginButton = "[data-cy='submitForm']"

    }

    writeOnUser(user){
        cy.get(this.userInput).type(user)
    }
    writeOnPass(password){
        cy.get(this.passInput).type(password)
    }

    clickOnLogin(){
        cy.get(this.loginButton).click();
    }
}