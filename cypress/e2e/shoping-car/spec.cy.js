const suiteName = directory.slice(directory.lastIndexOf('/') + 1).split('-').slice(0 , -1).join('-');
const suiteId = directory.split(/[-]/).pop();

describe(`${module} - ${suiteName}`,()=>{
    before(()=>{
     cy.login(Cypress.env().users.admin.username, Cypress.env().users.admin.password);
     cy.visit('');
        
    })
});