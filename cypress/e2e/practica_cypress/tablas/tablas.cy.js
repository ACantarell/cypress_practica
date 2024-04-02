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

    it('Ejercicio de tablas utilizando children', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

        cy.get('#table1').children().should('contain', 'jsmith@gmail.com')

    })

    it('Ejercicio de tablas utilizando filter', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

       cy.get('td').filter('.first-name').should('contain', 'Frank')
    })


    it('Ejercicio de tablas utilizando find', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

       cy.get('tr').find('.first-name').should('contain', 'Frank')
    })

    it('Ejercicio de tablas utilizando first', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

        cy.get('#table1 > tbody > :nth-child(1)').first().next().find('td').should('contain', '$51.00')
    })

    it('Ejercicio de tablas utilizando nextAll', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

        cy.get('#table1 > tbody > :nth-child(1)').first().nextAll().should('have.length', 3)
    })

    it.only('Ejercicio de tablas utilizando parent', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.title().should('eq', 'The Internet')

        cy.get('#table1 > tbody > :nth-child(1)').parent()
    })


})