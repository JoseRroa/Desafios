export class SignInPage{

    constructor(){
    this.signInSpan = "[data-cy='registertoggle']"
    }
    clickOnSignIn(){
    cy.get(this.signInSpan).dblclick();
    }

}