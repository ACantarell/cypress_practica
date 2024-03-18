describe("practicando con click", () => {
    
    it('visitando una pag para poner en practica la funcion click', () => {
        cy.visit('https://federico-toledo.com/sitios-de-prueba-para-practicar/')
        cy.get('#author')
            .should('exist')
            .should('be.visible')
            .type('Amadeo')
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe')   
            .click({force: true})
    });

    it.only('click con cordenadas en x y', () => {
        cy.visit('https://federico-toledo.com/sitios-de-prueba-para-practicar/')
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
        .should('exist')
        .should('be.visible')
        .click(50, 50)
    });
})