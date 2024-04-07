// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loguearse', (nombre, apellido, edad, pais, notas) => {
    cy.get('#firstname').type(nombre)
    cy.get('#surname').type(apellido)
    cy.get('#age').type(edad)
    cy.get('#country').select(pais)
    cy.get('#notes').type(notas)
    cy.get('[type="submit"]').click({force: true})
})

Cypress.Commands.add('loginDesafio3', (username, password) => {
    cy.get('#txt-username').type(username)
    cy.get('#txt-password').type(password)
    cy.get('#btn-login').click()
})

Cypress.Commands.add('completarFormulario', (date, comment) => {
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').check({force: true})
    cy.get('#radio_program_medicaid').check({force: true})
    cy.get('#txt_visit_date').type(date + '{esc}')
    cy.get('#txt_comment').type(comment)
    cy.get('#btn-book-appointment').click({force: true})
    cy.wait(1000)
    cy.get('.text-center > .btn').click({force: true})
})
