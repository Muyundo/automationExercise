/// <reference types="cypress" />
import 'cypress-file-upload'
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

    it('Login User with correct email and password', () => {
        cy.url().should('include', 'automationexercise.com')
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
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('Login to your account', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="login-email"]').type('incorrect@gmail.com')
        cy.get('[data-qa="login-password"]').type('Test@123')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!', {timeout: 10000}).should('be.visible')
    })

    it('Login user with correct email and incorrect password', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('Login to your account', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="login-email"]').type('Chelsie_Bosco63@gmail.com')
        cy.get('[data-qa="login-password"]').type('incorrectpassword')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!', {timeout: 10000}).should('be.visible')
    })

    it('Logout User', () => {
        cy.url().should('include', 'automationexercise.com')
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
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Signup / Login').click()
        cy.url().should('include', '/login')
        cy.contains('New User Signup!', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type('Chelsie_Bosco63@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Email Address already exist!', {timeout: 10000}).should('be.visible')
    })

    it('Contact Us form', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Contact us').click()
        cy.url().should('include', '/contact_us')
        cy.contains('Get In Touch', {timeout: 10000}).should('be.visible')
        cy.get('[data-qa="name"]').type(name)
        cy.get('[data-qa="email"]').type(email)
        cy.get('[data-qa="subject"]').type('Test Subject')
        cy.get('[data-qa="message"]').type('This is a test message.')
        cy.get('input[name="upload_file"]').attachFile('example.json')
        cy.get('[data-qa="submit-button"]').click()
        cy.contains('Success! Your details have been submitted successfully.', {timeout: 10000}).should('be.visible')
        cy.contains('Home', {timeout: 10000}).should('be.visible').click()
        cy.url().should('include', '/')
    })

    it('Verify Test Cases page', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Test Cases').click()
        cy.url().should('include', '/test_cases')
        cy.get('h2.title.text-center').should('be.visible').and('have.text', 'Test Cases')
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
    })
        
})
    