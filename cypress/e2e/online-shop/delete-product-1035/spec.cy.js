const directory = __dirname.replaceAll('\\','/');
const module  = directory.split(/[/]/)[2];
const suiteName = directory.slice(directory.lastIndexOf('/') + 1).split('-').slice(0 , -1).join('-');
const suiteId = directory.split(/[-]/).pop();


describe(`${suiteName} - ${module}`, ()=>{

it("Deberia premitir al usuario delete el producto",()=>{
    cy.fixture(`${module}/${suiteName}-${suiteId}/${suiteId}.json`).then(the =>{
        the.product.name = `${the.product.name}-${suiteId}`
        cy.log(the.product.name);
    })
    cy.log(directory)
    cy.log(module)
    cy.log(suiteName)
    cy.log(suiteId)
});

});