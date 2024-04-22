describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1920, 934)
 
    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
 
    cy.get('.returning-wrapper > form > .form-fields > .inputs > #RememberMe').click()
 
    cy.get('.returning-wrapper > form > .form-fields > .inputs > #RememberMe').check('true')
 
    cy.get('.customer-blocks > .returning-wrapper > form > .buttons > .button-1').click()
 
    cy.visit('https://admin-demo.nopcommerce.com/admin/')
 
    cy.get('.os-content > .mt-2 > .nav > .nav-item:nth-child(2) > .nav-link').click()
 
    cy.get('.menu-is-opening > .nav > .nav-item:nth-child(2) > .nav-link > p').click()
 
    cy.visit('https://admin-demo.nopcommerce.com/Admin/Category/List')
 
    cy.get('#categories-grid > tbody > .odd:nth-child(1) > .text-center > .checkboxGroups').click()
 
    cy.get('#categories-grid > tbody > .odd:nth-child(1) > .text-center > .checkboxGroups').check('1')
 
    cy.get('#categories-grid > tbody > .odd:nth-child(3) > .text-center > .checkboxGroups').click()
 
    cy.get('#categories-grid > tbody > .odd:nth-child(3) > .text-center > .checkboxGroups').check('3')
 
    cy.get('#categories-grid > tbody > .odd:nth-child(5) > .text-center > .checkboxGroups').click()
 
    cy.get('#categories-grid > tbody > .odd:nth-child(5) > .text-center > .checkboxGroups').check('5')
 
    cy.get('#categories-grid > tbody > .odd:nth-child(7) > .text-center > .checkboxGroups').click()
 
    cy.get('#categories-grid > tbody > .odd:nth-child(7) > .text-center > .checkboxGroups').check('7')
 
    cy.get('.wrapper > .content-wrapper > .content-header > .float-right > .btn-primary').click()
 
    cy.visit('https://admin-demo.nopcommerce.com/Admin/Category/Create')
 
    cy.get('div > .form-group > .col-md-9 > .input-group > #Name').click()
 
    cy.get('div > .form-group > .col-md-9 > .input-group > #Name').type('mamamamamaa')
  
 })

})