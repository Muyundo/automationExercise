/// <reference types="cypress" />

const { faker } = require("@faker-js/faker")

const email = faker.internet.email()
const name = faker.person.fullName()
const fname = faker.person.firstName()
const lname = faker.person.lastName()
const address = faker.location.streetAddress()
const company = faker.company.name()
const address2 = faker.location.secondaryAddress()
const state = faker.location.state()
const city = faker.location.city()
const zipcode = faker.location.zipCode()
const mobile = faker.phone.number()
beforeEach(() => {
    cy.baseurl()
})
describe('Test Cases', () => {
    it('Register User', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.get('.header-middle > .container > .row').contains(' Signup / Login').click()
        cy.url().should('include', '/login')
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email) 
        cy.get('[data-qa="signup-button"]').click()
        cy.wait(1000)
        //cy.contains('Email Address already exists!').should('not.be.visible');
        cy.url().should('include', '/signup')
        cy.contains('Enter Account Information', {timeout: 10000}).should('be.visible')

        const gender = ['#id_gender1', '#id_gender2']
        const randomIndex = Math.floor(Math.random() * gender.length)
        cy.get(gender[randomIndex]).check()

        cy.get('[data-qa="password"]').type('Test@123')
        cy.get('[data-qa="days"]').select('1')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('1990')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('[data-qa="first_name"]').type(fname)
        cy.get('[data-qa="last_name"]').type(lname)
        cy.get('[data-qa="company"]').type(company)
        cy.get('[data-qa="address"]').type(address2)
        cy.get('[data-qa="state"]').type(state)
        cy.get('[data-qa="city"]').type(city)
        cy.get('[data-qa="zipcode"]').type(zipcode)
        cy.get('[data-qa="mobile_number"]').type(mobile)
        cy.get('[data-qa="create-account"]').click()
        const regData = {
            email: email,
            name: name,
            fname: fname,
            lname: lname,
            address: address,
            company: company,
            address2: address2,
            state: state,
            city: city,
            zipcode: zipcode,
            mobile: mobile
        }
        cy.writeFile('cypress/fixtures/regData.json', regData)
        cy.contains('Account Created!', {timeout: 10000}).should('be.visible')

        cy.url().should('include', '/account_created')
        cy.get('[data-qa="continue-button"]').click()
        cy.url().should('include', '/')
        cy.get('.shop-menu > .nav').contains(' Logged in as ').should('be.visible')
        cy.get('.shop-menu > .nav').contains(name).should('be.visible')
        cy.contains('Delete Account', {timeout: 10000}).should('be.visible').click()
        cy.contains('Account Deleted!', {timeout: 10000}).should('be.visible')
        cy.url().should('include', '/delete_account')
        cy.get('[data-qa="continue-button"]').click()


    })

    
})
    