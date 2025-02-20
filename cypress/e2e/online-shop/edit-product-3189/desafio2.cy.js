const directory = __dirname.replaceAll('\\','/');
const module  = directory.split(/[/]/)[2];
const suiteName = directory.slice(directory.lastIndexOf('/') + 1).split('-').slice(0 , -1).join('-');
const suiteId = directory.split(/[-]/).pop();
import { SignInPage } from '../support/Pages/signInPage';
import { LoginPage } from '../support/Pages/loginPage';



describe(`${module} - ${suiteName}`,()=>{
    const signInPage = new SignInPage();
    const loginPage = new LoginPage();
    before(()=>{
     cy.login(Cypress.env().users.admin.username, Cypress.env().users.admin.password);
     cy.visit('');
     
        
    })
    it("Deberia hacer un CRUD",()=>{
        cy.fixture(`${module}/${suiteName}-${suiteId}/${suiteId}`).then(the =>{
            the.product.id = suiteId;

            cy.getProductId(the.product.id).its("body.products.docs").each((product) => {
            cy.deleteProduct(product._id);

            });
            cy.createProduct(the.product).then((response)=>{
                cy.log("respuesta del create",response);
                const productId = response.body.product._id;
                cy.editProduct(productId, the.product2)
            
            }); 
            
        });
    });
    it("Verificar elementos enviados",()=>{
        cy.visit('');
        signInPage.clickOnSignIn();
        loginPage.writeOnUser(Cypress.env().users.admin.username);
        loginPage.writeOnPass(Cypress.env().users.admin.password);
    })

});
