describe('Este es nuestro primer comando de Cypress', () => {
  
  it('Hola mundo pasado por consola', () => {
    cy.log('Hola mundo')
    cy.visit('https://rodrigovillanueva.com.mx/')
  });
})