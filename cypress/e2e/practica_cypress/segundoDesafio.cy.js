require('cypress-plugin-tab')

describe('Segundo desafio del curso', ()=>{

    it('Ejecutando el segundo desafio', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.contains('574 computers found')
            .should('be.visible')
            .and('have.text', '574 computers found')

    //Buscando un elemento
        cy.get('#searchbox')
            .type('ACE')
        cy.get('#searchsubmit')
            .should('be.visible')
            .click()

    //Agregando un elemento a la lista
        cy.get('#add')
            .click()
        cy.get('#name')
            .should('be.visible')
            .type('Amadeo Cantarell').tab()
        cy.get('#introduced')
            .should('be.visible')
            .type('2020-01-01').tab()
        cy.get('#discontinued')
            .should('exist')
            .type('2021-01-01').tab()
        cy.get('#company')
            .should('be.visible')
            .select('1')
            .should('have.value', 1)
        cy.wait(3000)
        cy.contains('Create this computer')
            .should('be.visible')
            .click()



        //buscando elemento creado
        cy.get('#searchbox')
            .should('be.visible')
            .type('Amadeo Cantarell')
        cy.get('#searchsubmit')
            .should('be.visible')
            .click()
    });

   

})