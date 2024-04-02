describe('Usando el comando de invoke', () => {

    it('Usando Invoke para ver un atributo y le sumanos un then', () => {
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')

        cy.get('#firstname').invoke('attr', 'required').then(()=>{
            cy.get('#firstname').type('Amadeo')
            cy.get('#surname').type('Cantarell Mileo')
            cy.get('#age').type('31')
            cy.get('#country').select('Argentina').should('have.value', 'Argentina')
            cy.get('#notes').type('De algun lugar de Argentina')
            cy.get('[type="submit"]').click()
        })
    });

    it.only('Usando Invoke para ver un atributo y modificando su estilo', () => {
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')

        cy.get('[for="firstname"]').invoke('attr', 'style', 'color: red; font-size: 50px')
    });

})