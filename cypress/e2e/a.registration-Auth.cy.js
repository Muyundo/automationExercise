/// <reference types="cypress" />
import {inputs} from '../support/faker'
import 'cypress-file-upload'
beforeEach(() => {
    cy.baseurl()
})
describe('Test Cases', () => {
    it('Register User', () => {
        cy.get('.header-middle > .container > .row').contains(' Signup / Login').click()
        cy.url().should('include', '/login')
        cy.get('[data-qa="signup-name"]').type(inputs.name)
        cy.get('[data-qa="signup-email"]').type(inputs.email) 
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
        cy.get('[data-qa="first_name"]').type(inputs.fname)
        cy.get('[data-qa="last_name"]').type(inputs.lname)
        cy.get('[data-qa="company"]').type(inputs.company)
        cy.get('[data-qa="address"]').type(inputs.address2)
        cy.get('[data-qa="state"]').type(inputs.state)
        cy.get('[data-qa="city"]').type(inputs.city)
        cy.get('[data-qa="zipcode"]').type(inputs.zipcode)
        cy.get('[data-qa="mobile_number"]').type(inputs.mobile)
        cy.get('[data-qa="create-account"]').click()
        const regData = {
            email: inputs.email,
            name: inputs.name,
            fname: inputs.fname,
            lname: inputs.lname,
            address: inputs.address,
            company: inputs.company,
            address2: inputs.address2,
            state: inputs.state,
            city: inputs.city,
            zipcode: inputs.zipcode,
            mobile: inputs.mobile
        }
        cy.writeFile('cypress/fixtures/regData.json', regData)
        cy.contains('Account Created!', {timeout: 10000}).should('be.visible')

        cy.url().should('include', '/account_created')
        cy.get('[data-qa="continue-button"]').click()
        cy.url().should('include', '/')
        cy.get('.shop-menu > .nav').contains(' Logged in as ').should('be.visible')
        cy.get('.shop-menu > .nav').contains(inputs.name).should('be.visible')
        cy.contains('Delete Account', {timeout: 10000}).should('be.visible').click()
        cy.contains('Account Deleted!', {timeout: 10000}).should('be.visible')
        cy.url().should('include', '/delete_account')
        cy.get('[data-qa="continue-button"]').click()


    })

    it('Login User with correct email and password', () => {

        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('Login to your account', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="login-email"]').type('Chelsie_Bosco63@gmail.com')
        cy.get('[data-qa="login-password"]').type('Test@123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav').contains(' Logged in as ').should('be.visible')
        cy.get('.shop-menu > .nav').contains('Katrina Schaden').should('be.visible')
        cy.contains('Logout', {timeout: 10000}).should('be.visible').click()
        

    }) 
    
    it('Login user with incorrect email and correct password', () => {
 
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('Login to your account', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="login-email"]').type('incorrect@gmail.com')
        cy.get('[data-qa="login-password"]').type('Test@123')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!', {timeout: 10000}).should('be.visible')
    })

    it('Login user with correct email and incorrect password', () => {
 
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('Login to your account', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="login-email"]').type('Chelsie_Bosco63@gmail.com')
        cy.get('[data-qa="login-password"]').type('incorrectpassword')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!', {timeout: 10000}).should('be.visible')
    })

    it('Logout User', () => {
 
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('Login to your account', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="login-email"]').type('Chelsie_Bosco63@gmail.com')
        cy.get('[data-qa="login-password"]').type('Test@123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav').contains(' Logged in as ').should('be.visible')
        cy.get('.shop-menu > .nav').contains('Katrina Schaden').should('be.visible')
        cy.contains('Logout', {timeout: 10000}).should('be.visible').click()
        cy.url().should('include', '/login')
    })

    it('Register user with an existing email', () => {
 
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('New User Signup!', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type('Chelsie_Bosco63@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Email Address already exist!', {timeout: 10000}).should('be.visible')
    })
})