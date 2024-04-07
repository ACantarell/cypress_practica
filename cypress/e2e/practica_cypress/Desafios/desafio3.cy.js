describe('Desafio numero 3', ()=>{
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment')
        cy.title().should('eq', 'CURA Healthcare Service')
    });

    it('Completando un formulario', () => {
        cy.get('#btn-make-appointment').click()
        cy.loginDesafio3('John Doe', 'ThisIsNotAPassword')
        cy.completarFormulario('11/03/1993', 'Esto es un comentario') 
    });
})