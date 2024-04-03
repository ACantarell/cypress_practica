require('cypress-plugin-tab')


describe('utilizando el plugin de tab', () => {
    
    it('usando el plugin tab', () => {
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq','Input Validation')

        cy.get('#firstname').type('Amadeo').tab()
            .type('Cantarell').tab()
            .type('31').tab()
            .select('Argentina').tab()
            .type('CABA').tab()
            .type('amadeocantarell@gmail.com').tab()

    });
})


