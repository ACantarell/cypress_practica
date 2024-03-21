describe('Validando la referencia de window', ()=>{

    it('vallidando la referencia de charset', () => {
        cy.visit('https://federico-toledo.com/sitios-de-prueba-para-practicar/')
        cy.title().should('eq', 'Sitios de prueba para practicar - Federico Toledo')

        cy.document().should('have.property', 'charset', 'UTF-8')
    });

    it.only('vallidando la referencia de url', () => {
        cy.visit('https://federico-toledo.com/category/blog/')
        cy.url().should('include', 'category')//incluye un fragmento 
        cy.url().should('include', 'blog')//incluye un fragmento 
        cy.url().should('eq', 'https://federico-toledo.com/category/blog/')//tenes que agregar todo el url
       
    });
})