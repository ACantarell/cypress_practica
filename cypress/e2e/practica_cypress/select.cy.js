describe('Usando selectores para los dropdowns', () =>{

    it('Implementando el contendio de los select', () => {
         cy.visit('https://www.freerangetesters.com/mentoria-1-1-con-pato')
            cy.select('select')
            //validando select con value
            cy.select('select').should('have.value', '1')
            //validando con text
            cy.select('select').should('have.text', 'select')
            //select multiselecion
            cy.select(['2', '3', '4']) //o tambien puede ser por text => cy.select(['hola', 'mundo', 'cypress'])
    });
})