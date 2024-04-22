describe('Probando el plugin de Cypress Studio', () => {
    it('Probando el plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    });


    /* ==== Test Created with Cypress Studio ==== */
    it('check box', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('[checked=""]').uncheck();
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('[checked=""]').uncheck();
        cy.get('#checkboxes > :nth-child(3)').check();
        cy.get('[checked=""]').uncheck();
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('#checkboxes').click();
        cy.get('#checkboxes > :nth-child(3)').check();
        /* ==== End Cypress Studio ==== */
    });

    

 
})
