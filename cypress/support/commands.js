 Cypress.Commands.add('baseurl', () => { 
    cy.visit('https://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')

})