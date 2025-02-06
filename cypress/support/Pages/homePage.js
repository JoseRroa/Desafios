export class HomePage{
    constructor(){
        this.onlineShopLink = "[data-cy='onlineshoplink']"

    }

    goToOnlineShop(){
        cy.get(this.onlineShopLink).click()
    }
}