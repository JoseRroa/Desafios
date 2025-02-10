const directory = __dirname.replaceAll('\\','/');
const module  = directory.split(/[/]/)[2];
const suiteName = directory.slice(directory.lastIndexOf('/') + 1).split('-').slice(0 , -1).join('-');
const suiteId = directory.split(/[-]/).pop();
import { SignInPage } from "../../../support/Pages/signInPage";
import { LoginPage } from "../../../support/Pages/loginPage";
import { HomePage } from "../../../support/Pages/homePage";
import { ProductPage } from "../../../support/Pages/productPage";


describe(`${suiteName} - ${module}`, ()=>{
const loginPage = new LoginPage();
const signInPage = new SignInPage();
const homePage = new HomePage();
const productPage = new ProductPage();


beforeEach("Preconditions",()=>{
    cy.visit("");
    signInPage.clickOnSignIn();
    loginPage.clickOnUser(Cypress.env().user);
    loginPage.clickOnPass(Cypress.env().password);
    loginPage.clickOnLogin();
    homePage.goToOnlineShop();

})

it("Deberia premitir al usuario crear el producto",()=>{
    cy.fixture(`${module}/${suiteName}-${suiteId}/${suiteId}.json`).then(the=>{
    productPage.addProductButton();
    productPage.writeNewProduct(the.product.productName);
    productPage.writeNewPrice(the.product.price);   
    productPage.writeNewCard(the.product.imagen);
    productPage.writeNewId(the.product.id);
    productPage.clickOnCreateproduct();
    productPage.clickOnCloseModal();
    productPage.selectDropdown();
    productPage.typeSearchBar(the.product.id);
    productPage.clickOnDeleteButton();
    productPage.clickOnSaveEditbutton();
    productPage.clickOnCloseModal();
    productPage.selectDropdown();
    productPage.typeSearchBar();
    productPage.notExist(the.product.id);
    });    
    
});


});