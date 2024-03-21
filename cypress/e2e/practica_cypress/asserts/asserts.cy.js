describe('usando los asserts mas usasdos', ()=>{

    it('usando el assert contains ', () => {
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu')
            .contains('Women') 
                .click()
    });

    it('usando el assert find ', () => {
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu')
            .contains('Women') 
                .click()
        cy.get('.product-container')
            .find('.product-image-container')
            .eq(0)//elige el primer elemento
            .click()
    });

    it('usando el assert text ', () => {
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu')
            .contains('Women') 
                .click()
        cy.get('.product-container')
            .find('.product-image-container')
            .eq(3)//elige el primer elemento
            .click()
        cy.get('#product_condition .editable')   
            .then((element) => {
                let condicion = element.text();
                if (condicion == 'New product') {
                    cy.log('El elemento en nuevo')
                }
            })
    });

    it.only('usando el assert text ', () => {
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu')
            .contains('Women') 
                .click()
        cy.get('.product-container')
            .find('.product-image-container')
            .eq(3)//elige el primer elemento
            .click()
        cy.get('#product_condition .editable')   
            .then((element) => {
                let condicion = element.text();
                if (condicion == 'New product') {
                    cy.log('El elemento en nuevo')
                }
            })

            cy.get('#our_price_display').then((element) => {
                let precio = element.text();
                cy.get('[name="Pink"]').dblclick()
                .should('be.visible')
                cy.get('#add_to_cart > .exclusive')
                let color = cy.get('[name="Pink"]')
                if (precio > '$20' && color == 'pink') {
                    cy.log('El precio es mayor a 20')
                }else (
                    cy.log('entro en este campo del else')
                )
                })
         
    });

    

})