require('cypress-xpath');

describe('Usando selectores', () => {
    
    it('usando selector id', () => {
        cy.visit('https://federico-toledo.com/sitios-de-prueba-para-practicar/')
        cy.get('#comment').type('Hola Mundo')
    });

    it('usando selector atributo', () => {
        cy.visit('https://federico-toledo.com/sitios-de-prueba-para-practicar/')
        cy.get('[placeholder="Your comment"]').type('Hola Mundo')
    });

    it('usando selector xpath', () => {
        cy.visit('https://federico-toledo.com/sitios-de-prueba-para-practicar/')
        cy.wait(5000)
        cy.xpath('//*[@id="comment"]').type('Hola Mundo')
    });

    it.only('usando selector contains', () => {
        cy.visit('https://federico-toledo.com/sitios-de-prueba-para-practicar/')
        cy.wait(3000)
        cy.contains('Comment')
            .type('Hola Mundo')
    });
})


