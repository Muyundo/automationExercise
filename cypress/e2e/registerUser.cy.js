/// <reference types="cypress" />
beforeEach(() => {
    cy.baseurl()
})
describe('Register User', () => {
    it('Verify that the base url has load successfully', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.get('.header-middle > .container > .row').contains(' Signup / Login').click()
        cy.url().should('include', '/login')
    })

    
})
    