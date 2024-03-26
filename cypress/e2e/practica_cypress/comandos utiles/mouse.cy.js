require('cypress-dark/src/halloween')

describe('usando comandos de mouse', ()=>{

    it('usnado el comando de hover', () => {
       
            cy.visit('https://www.way2automation.com/')
            .title().should('eq', 'Get Online Selenium Certification Course | Way2Automation')
       

            cy.get('#menu-item-27597 > [href="https://www.selenium-tutorial.com/courses/"] > .sub-arrow').trigger('mouseover')
            cy.contains('Cypress').invoke('removeAttr', 'target').click({force: true})
    })

})