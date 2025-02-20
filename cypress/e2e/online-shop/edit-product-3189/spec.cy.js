const directory = __dirname.replaceAll('\\','/');
const module  = directory.split(/[/]/)[2];
const suiteName = directory.slice(directory.lastIndexOf('/') + 1).split('-').slice(0 , -1).join('-');
const suiteId = directory.split(/[-]/).pop();
describe(`${suiteName} - ${module}`, ()=>{
   

    before(()=>{
        cy.request({
            method : "POST",
            url: `${Cypress.env().base_url_api}/login`,
            body:{
                username: Cypress.env().users.admin.username,
                password: Cypress.env().users.admin.password
            },
        }).then((respuesta) =>{
            window.localStorage.setItem("token", respuesta.body.token);
            window.localStorage.setItem("user", respuesta.body.username);
            window.localStorage.setItem("userId", respuesta.body.user._id);
            Cypress.env().token = respuesta.body.token;
            
            
        });
        cy.visit('');

    });
    it("Deberia premitir al usuario crear el producto",()=>{
        cy.fixture(`${module}/${suiteName}-${suiteId}/${suiteId}`).then(the =>{
          the.product.id = suiteId;
          
        cy.request({
            method: "GET",
            url: `${Cypress.env().base_url_api}/products?id=${the.product.id}`,
            failsOnStatusCode : false,
            headers:{
                Authorization: `Bearer ${Cypress.env().token}`
            }
            
        }).its("body.products.docs").each((product) => {
            cy.request({
                method :"DELETE",
                url: `${Cypress.env().base_url_api}/product/${product._id}`,
                headers:{
                    
                  Authorization: `Bearer ${Cypress.env().token}`
                    }
               });

            });

        cy.request({
            method:"POST",
            url: `${Cypress.env().base_url_api}/create-product`,
            body: the.product,
            headers:{
                Autorization :`Bearer ${Cypress.env().token}`
            }
            });
        })
    });
});

