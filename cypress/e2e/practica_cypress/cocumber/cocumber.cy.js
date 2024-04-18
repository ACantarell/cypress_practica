import { given, when, and, then } from 'cypress-cucumber-preprocessor/steps'

given('Abrimos el navegador', () => {
    cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
})

when('Completamos el formulario', () => {
    cy.get('#firstname').type('Amadeo')
    cy.get('#surname').type('Cantarell')
    cy.get('#age').type('31')
    cy.get('#country').select('Argentina')
    cy.get('#notes').type('De algun lugar de Argentina')
})

and('Damos click en el boton', () => {
    cy.get('#backtoform').click()
})

then('Validamos el formulario', () => {
    cy.url().should('eq', 'https://testpages.eviltester.com/styled/validation/input-validation.html')
})