describe('Usando el comando custom', () => {
    before(()=>{
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation').and('eq', 'Input Validation')
    })

    it('Usando el comando custom', () => {
        cy.loguearse('Amadeo', 'Cantarell', 31 , 'Argentina', 'CABA')
    });
})