describe('Probando los comandos check', () =>{

    it('Utilizando el comando check', () => {
        cy.visit('https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html')
        cy.get('h1').should('be.visible').and('have.text', 'the 3 states of the input type=checkbox')

        //lo que hace este codigo es qeu todos los type="checkbox" se chequeen
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')

        //lo que hace este codigo es se chequee el primero y el ultimo(especificamente)
        cy.get('[type="checkbox"]')
            .first()
            .check()
            .should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]')
            .last()
            .check()
            .should('be.checked')

        cy.get('body')
        .find('#in')
        .should('have.value', 'on')
        .check()

        
    });
})