describe('Usando el comando de invoke', () => {

    it('Usando Invoke para ver un atributo y le sumanos un then', () => {
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')

        cy.get('#firstname').invoke('attr', 'required').then(()=>{
            cy.get('#firstname').type('Amadeo')
            cy.get('#surname').type('Cantarell Mileo')
            cy.get('#age').type('31')
            cy.get('#country').select('Argentina').should('have.value', 'Argentina')
            cy.get('#notes').type('De algun lugar de Argentina')
            cy.get('[type="submit"]').click()
        })
    });

    it('Usando Invoke para ver un atributo y modificando su estilo', () => {
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')

        cy.get('[for="firstname"]').invoke('attr', 'style', 'color: red; font-size: 50px')
    });


    it('Usando Invoke para ver un atributo y modificando su estilo', () => {
        cy.visit('https://the-internet.herokuapp.com/broken_images')
        cy.title().should('eq', 'The Internet')

        cy.get('[src="img/avatar-blank.jpg"]').as('foto')
        cy.get('@foto').invoke('attr', 'src', 'img/avatar-blank.jpg')
            .should('have.attr', 'src', 'img/avatar-blank.jpg').and('be.visible')
    });

    it.only('Usando Invoke para ver un atributo y modificando su estilo', () => {
        cy.visit('https://dwao.in/')
        cy.title().should('eq', 'Google Analytics 360, Adobe Analytics Services, Marketing Automation Managed Services')

        cy.get('.footer-btm > .right > ul > :nth-child(1) > a')
            .invoke('removeAttr', 'target')//remueve el atributo _blank
            .click({force:true})
    });

})