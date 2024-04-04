describe('Desafio numero 2', ()=>{
    beforeEach(() => {
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html');
        cy.title().should('eq', 'Input Validation');
    });
    
    it('Completando un formulario', () => {
        cy.get('#firstname').clear().type('Amadeo');
        cy.get('#surname').clear().type('Cantarell123456');
        cy.get('#age').clear().type('31');
        cy.get('#country').select('Argentina');
        cy.get('#notes').clear().type('De algun lugar de Argentina');
        cy.get('[type="submit"]').click();

        cy.get('h1').contains('Input Validation Response');
        cy.get('#backtoform').click();
        //cy.go('back');
    });

})