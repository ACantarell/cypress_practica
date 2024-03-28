require('cypress-plugin-tab')
require('cypress-xpath');

describe('Ejercicio de tablas', () => {
    
    it('Ejercicio de tablas una forma de agarrar un elemento', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

        
        cy.get('#table1 > tbody > :nth-child(1) > :nth-child(3)')
            .should('be.visible').and('have.text', 'jsmith@gmail.com')
            .next()
            .should('be.visible').and('have.text', '$50.00')
            .prev().prev()
            .should('be.visible').and('have.text', 'John')
    });

    it.only('Ejercicio de tablas utilizando children', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

        cy.get('#table1 > tbody').children().should('have.length', 4)
    })
})