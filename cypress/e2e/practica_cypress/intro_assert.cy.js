
describe('Este es nuestro primer comando de Cypress con assert', () => {
    
    it('nuestro primer comando con assert', () => {
        cy.visit('https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407')

        cy.get('.text_field')
            .first()
            .should('be.visible')
            .should('exist')
            .type('Amadeo')
            .should('have.value', 'Amadeo')
    });
})