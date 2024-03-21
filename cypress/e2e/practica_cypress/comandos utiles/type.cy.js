describe('Usando el comando de type', () => {
    
    it.only('type enter', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf')
        .type('Hola mundo{enter}')
        
});
})

