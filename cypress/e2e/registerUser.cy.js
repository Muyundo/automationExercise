/// <reference types="cypress" />
beforeEach(() => {
    cy.baseurl()
})
describe('Register User', () => {
    it('Verify that the base url has load successfully', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.get('.header-middle > .container > .row').contains(' Signup / Login').click()
        cy.url().should('include', '/login')
        cy.get('[data-qa="signup-name"]').type('Test User')
        cy.get('[data-qa="signup-email"]').type('user@example2.com') 
        cy.get('[data-qa="signup-button"]').click()
        cy.wait(1000)
        //cy.contains('Email Address already exists!').should('not.be.visible');
        cy.url().should('include', '/signup')
        cy.contains('Enter Account Information', {timeout: 10000}).should('be.visible')
    })

    
})
    