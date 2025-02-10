export class ProductPage {
    constructor(){
        this.productButton = "[data-cy='add-product']"
        this.productNameInput = "[data-cy='productName']"
        this.productPriceInput = "[data-cy='productPrice']"
        this.productCardInput = "[data-cy='productCard']"
        this.productIdInput = "[data-cy='productID']"
        this.createProductButton = "[data-cy='createProduct']"
        this.closeModalButton = "[data-cy='closeModal']"
        this.searchIdSelect = "[data-cy='search-type']"
        this.searchTypeInput = "[data-cy='search-bar']"
        this.deleteProductButton = 'button[aria-label="Delete"]'
        this.saveEditButton = "#saveEdit"

    }

    addProductButton(){
        cy.get(this.productButton).click();
    }

    writeNewProduct(productName){
        cy.get(this.productNameInput).type(productName);
    }

    writeNewPrice(price){
        cy.get(this.productPriceInput).type(price);
    }

    writeNewCard(imagen){
        cy.get(this.productCardInput).type(imagen);
    }

    writeNewId(id){
        cy.get(this.productIdInput).type(id);
    }

    clickOnCreateproduct(){
        cy.get(this.createProductButton).click();
    }

    clickOnCloseModal(){
        cy.get(this.closeModalButton).click();
    }

    selectDropdown(){
        cy.contains(this.searchIdSelect, "ID" ).select("ID")
    }

    typeSearchBar(id){
        cy.get(this.searchTypeInput).type(`${id} {enter}`)
    }

    clickOnDeleteButton(){
        cy.get(this.deleteProductButton).first().click();

    }

    clickOnSaveEditbutton(){
        cy.get(this.saveEditButton).click()
    }

    notExist(id){
        cy.contains(id, {timeout: 3000}).should("not.exist")
    }
}