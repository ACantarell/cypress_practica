<reference types="cypress" />


describe('Validando el titulo de una pagina web', ()=>{

    it('validando el titulo con su respectiva visita', () => {
        cy.visit('https://demoqa.com/')
        cy.get('h5').first().click()
        cy.get('#item-0').click()
    });


})