Cypress.Commands.add('getProductId',(id)=>{
    cy.request({
        method:"GET",
        url: `${Cypress.env().base_url_api}/products?id=${id}`,
        failOnStatusCode: false,
        headers:{
            authorization: `Bearer ${Cypress.env().token}`
            }
    })
})
    Cypress.Commands.add('deleteProduct',(_id)=>{
    cy.request({
            method:"DELETE",
            url: `${Cypress.env().base_url_api}/product/${_id}`,
            headers:{
                authorization: `Bearer ${Cypress.env().token}`
                }        
     });
 });

    Cypress.Commands.add('createProduct',(product)=>{
     cy.request({
            method:"POST",
            url: `${Cypress.env().base_url_api}/create-product`,
            body: product, 
            headers:{
                Autorization :`Bearer ${Cypress.env().token}`
                },
                failOnStatusCode: false
 });
});
        Cypress.Commands.add('editProduct',(productId, product2)=>{
        return cy.request({
            method:"PUT",
            url: `${Cypress.env().base_url_api}/product/${productId}`,
            body: product2,
            
            headers:{
                authorization: `Bearer ${Cypress.env().token}`
            }
        })
    });