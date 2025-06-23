/// <reference types="cypress" />
beforeEach(() => {
    cy.baseurl()
})
describe('Register User', () => {
    it('Verify that the base url has load successfully', () => {
        cy.url().should('include', 'automationexercise.com')
    })
})
    