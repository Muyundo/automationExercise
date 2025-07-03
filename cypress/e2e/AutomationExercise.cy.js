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
  /*  it('Register User', () => {
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

    it('Verify products and all product details page', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.get('.features_items > h2.title.text-center').should('be.visible').and('have.text', 'All Products')
        cy.get('.productinfo > p').should('be.visible')
        cy.get('.productinfo > h2').should('be.visible')
        cy.get('.productinfo > .btn').should('be.visible')
        cy.contains('View Product').first().click()
        cy.url().should('include', '/product_details')
        cy.get('.product-information > h2')
          .contains('h2', 'Blue Top')
          .should('be.visible')
        cy.get('.product-information > img').should('be.visible')
        cy.get('.product-information > span > span')
          .should('be.visible')
          .and('contain.text', 'Rs. 500')

        cy.get('.product-information')
         .contains('p', 'Availability:')
         .should('be.visible')
         .and('contain.text', 'In Stock')
        cy.get('.product-information')
         .contains('p', 'Condition')
         .should('be.visible')
         .and('contain.text', 'New')
        cy.get('.product-information')
         .contains('p', 'Brand')
         .should('be.visible')
         .and('contain.text', 'Polo')

    })

    it('Search Products', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.get('.features_items > h2.title.text-center').should('be.visible').and('have.text', 'All Products')
        cy.get('#search_product').type('Blue Top')
        cy.get('#submit_search').click()
        cy.url().should('include', '/products')
        cy.get('.product-image-wrapper').contains('Blue Top').should('be.visible')
    })

    it('Verify Subscription in home page', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.get('footer .single-widget h2').should('be.visible').and('have.text', 'Subscription')
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed!', {timeout: 10000}).should('be.visible')
    })

    it('Verify subscription in Cart page', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Cart').click()
        cy.url().should('include', '/view_cart')
        cy.get('footer .single-widget h2').should('be.visible').and('have.text', 'Subscription')
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()
        cy.contains('You have been successfully subscribed!', {timeout: 10000}).should('be.visible')
    })

    it('Add products in the cart', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.get('.features_items > h2.title.text-center').should('be.visible').and('have.text', 'All Products')
        cy.contains('Add to cart').first().click()
        cy.contains('Added!').should('be.visible')
        cy.contains('View Cart').click()
        cy.url().should('include', '/view_cart')
        cy.get('.cart_description > h4').contains('Blue Top', {timeout: 10000}).should('be.visible')
        cy.get('.cart_price > p').contains('Rs. 500', {timeout: 10000}).should('be.visible')
        cy.get('.cart_quantity > .disabled').should('have.text', '1')
        cy.get('.cart_total > .cart_total_price').should('have.text', 'Rs. 500')
    })

    it('Verify product quantity in the cart', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.get('.features_items > h2.title.text-center').should('be.visible').and('have.text', 'All Products')
        cy.contains('Add to cart').first().click()
        cy.contains('Added!').should('be.visible')
        cy.contains('Continue Shopping').click()
        cy.contains('Add to cart').first().click()
        cy.contains('Added!').should('be.visible')
        cy.contains('View Cart').click()
        cy.url().should('include', '/view_cart')
        cy.get('.cart_description > h4').contains('Blue Top', {timeout: 10000}).should('be.visible')
        cy.get('.cart_price > p').invoke('text').then((priceText) => {
            const price = parseInt(priceText.replace(/[^\d]/g, ''))
            cy.get('.cart_quantity > .disabled').invoke('text').then((quantityText) => {
            const quantity = parseInt(quantityText.trim())
            const expectedTotal = `Rs. ${price * quantity}`
        cy.get('.cart_total > .cart_total_price').should('have.text', expectedTotal)
            })
        })
    })

    it('Place order register while checkout', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.get('.features_items > h2.title.text-center').should('be.visible').and('have.text', 'All Products')
        cy.contains('Add to cart').first().click()
        cy.contains('Added!').should('be.visible')
        cy.contains('View Cart').click()
        cy.url().should('include', '/view_cart')
        cy.contains('Proceed To Checkout').click()
        cy.url().should('include', '/view_cart')
        cy.get('.text-center').contains('Register / Login').click()
        cy.url().should('include', '/login')
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
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
        cy.contains('Account Created!', {timeout: 10000}).should('be.visible')
        cy.url().should('include', '/account_created')
            const CheckoutReg = {
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
        cy.writeFile('cypress/fixtures/checkoutReg.json', CheckoutReg)
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('Logged in as ' + CheckoutReg.name).should('be.visible')
        cy.get('.col-sm-8').contains('Cart').click()
        cy.contains('Proceed To Checkout').click()

        // Verify in the delivery address
        cy.get('#address_delivery').contains(CheckoutReg.fname).should('be.visible')
        cy.get('#address_delivery').contains(CheckoutReg.lname).should('be.visible')
        cy.get('#address_delivery').contains(CheckoutReg.company).should('be.visible')
        cy.get('#address_delivery').contains(CheckoutReg.address2).should('be.visible')
        cy.get('#address_delivery').contains(CheckoutReg.state).should('be.visible')
        cy.get('#address_delivery').contains(CheckoutReg.city).should('be.visible')
        cy.get('#address_delivery').contains(CheckoutReg.zipcode).should('be.visible')
        cy.get('#address_delivery').contains(CheckoutReg.mobile).should('be.visible')

        // Verify in the invoice address
        cy.get('#address_invoice').contains(CheckoutReg.fname).should('be.visible')
        cy.get('#address_invoice').contains(CheckoutReg.lname).should('be.visible')
        cy.get('#address_invoice').contains(CheckoutReg.company).should('be.visible')
        cy.get('#address_invoice').contains(CheckoutReg.address2).should('be.visible')
        cy.get('#address_invoice').contains(CheckoutReg.state).should('be.visible')
        cy.get('#address_invoice').contains(CheckoutReg.city).should('be.visible')
        cy.get('#address_invoice').contains(CheckoutReg.zipcode).should('be.visible')
        cy.get('#address_invoice').contains(CheckoutReg.mobile).should('be.visible')

        cy.get('.form-control').type('Test Order')
        cy.contains('Place Order').click()
        cy.url().should('include', '/payment')
        cy.get('[data-qa="name-on-card"]').type(CheckoutReg.name)
        cy.get('[data-qa="card-number"]').type('4111111111111111')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2025')
        cy.get('[data-qa="pay-button"]').click()
        cy.url().should('include', '/payment_done/500')
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
        cy.contains('Order Placed!').should('be.visible')
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
        cy.contains('Delete Account', {timeout: 10000}).should('be.visible').click()
        cy.contains('Account Deleted!', {timeout: 10000}).should('be.visible')
    })

    it('Remove products from cart', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Products').click()
        cy.url().should('include', '/products')
        cy.contains('Add to cart').first().click()
        cy.contains('Added!').should('be.visible')
        cy.contains('View Cart').click()
        cy.url().should('include', '/view_cart')
        cy.get('.cart_quantity_delete').first().click()
        cy.contains('Cart is empty!').should('be.visible')
    })

    it('View category products', () => {
        cy.url().should('include', 'automationexercise.com')
        cy.contains('Products').click()
        cy.get('#accordian').contains('Women').click()
        cy.get('#Women > .panel-body').contains('Dress').click()
        cy.contains('Women - Dress Products', {timeout: 10000}).should('be.visible')

        cy.get('#accordian').contains('Women').click()
        cy.get('#Women > .panel-body').contains('Tops ').click()
        cy.contains('Tops Products', {timeout: 10000}).should('be.visible')

        cy.get('#accordian').contains('Women').click()
        cy.get('#Women > .panel-body').contains('Saree ').click()
        cy.contains('Saree Products', {timeout: 10000}).should('be.visible')

        cy.get('#accordian').contains('Men').click()
        cy.get('#Men > .panel-body').contains('Tshirts ').click()
        cy.contains('Men - Tshirts Products', {timeout: 10000}).should('be.visible')

        cy.get('#accordian').contains('Men').click()
        cy.get('#Men > .panel-body').contains('Jeans ').click()
        cy.contains('Men - Jeans Products', {timeout: 10000}).should('be.visible')

        cy.get('#accordian').contains('Kids').click()
        cy.get('#Kids > .panel-body').contains('Dress ').click()
        cy.contains('Kids - Dress Products', {timeout: 10000}).should('be.visible')

        cy.get('#accordian').contains('Kids').click()
        cy.get('#Kids > .panel-body').contains('Tops & Shirts').click()
        cy.contains('Kids - Tops & Shirts Products', {timeout: 10000}).should('be.visible')

    })*/

        it('View & Cart Brand Products', () => {
        cy.contains('Products').click()
        cy.get('.left-sidebar').contains('Category').should('be.visible')
        cy.get('.left-sidebar').contains('Polo').click()
        cy.url().should('include', '/brand_products/Polo')
        cy.contains('Brand - Polo Products', {timeout: 10000}).should('be.visible')

        cy.get('.left-sidebar').contains('H&M').click()
        cy.url().should('include', '/brand_products/H&M')
        cy.contains('Brand - H&M Products', {timeout: 10000}).should('be.visible')

        cy.get('.left-sidebar').contains('Madame').click()
        cy.url().should('include', '/brand_products/Madame')
        cy.contains('Brand - Madame Products', {timeout: 10000}).should('be.visible')

        cy.get('.left-sidebar').contains('Mast & Harbour').click()
        cy.url().should('include', '/brand_products/Mast%20&%20Harbour')
        cy.contains('Brand - Mast & Harbour Products', {timeout: 10000}).should('be.visible')

        cy.get('.left-sidebar').contains('Babyhug').click()
        cy.url().should('include', '/brand_products/Babyhug')
        cy.contains('Brand - Babyhug', {timeout: 10000}).should('be.visible')

        cy.get('.left-sidebar').contains('Allen Solly Junior').click()
        cy.url().should('include', '/brand_products/Allen%20Solly%20Junior')
        cy.contains('Brand - Allen Solly Junior', {timeout: 10000}).should('be.visible')

        cy.get('.left-sidebar').contains('Kookie Kids').click()
        cy.url().should('include', '/brand_products/Kookie%20Kids')
        cy.contains('Kookie Kids', {timeout: 10000}).should('be.visible')

        cy.get('.left-sidebar').contains('Biba').click()
        cy.url().should('include', '/brand_products/Biba')
        cy.contains('Biba', {timeout: 10000}).should('be.visible')

            

        })


        
})
    