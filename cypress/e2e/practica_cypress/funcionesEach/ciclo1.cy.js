describe('Practicando los ciclos for ', ()=>{

   it('practicando los ciclos for', () => {
    for (let i = 0; i <= 10; i++) {
        cy.log(`el clico numero ${i}`)        
    }
   });

   it('practicando los ciclos for', () => {
    let multi = 5
    for (let i = 0; i <= 10; i++) {
        cy.log(`La tabla del 5 es: 5 * ${i} = ${multi * i}`)        
    }
   });

   it('practicando los ciclos for con el each', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.title().should('eq', 'My Shop')

    cy.get('.sf-with-ul').first().invoke('removeAttr', 'target').click({force: true})
    cy.get('.product-name').each(($el, index, $list) => {
        cy.log($el.text() + 'indice : ' + index)
        
    })
   });

   it('practicando los ciclos for con el each', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.title().should('eq', 'My Shop')

    cy.get('.sf-with-ul').first().invoke('removeAttr', 'target').click({force: true})
    cy.get('.product-name').each(($el, index, $list) => {
        cy.log($el.text() + 'indice : ' + index)
        
        let vestidos = $el.text()
       if (vestidos.includes('Printed Summer Dress')) { 
        cy.wrap($el).invoke('removeAttr', 'target').click({force: true})
       }
    })
   
   });

   it.only('Probando el ciclo for con una pagina de prueba', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.title().should('eq', 'My Shop')

    let time = 1500

    for (let i = 0; i <= 4; i++) {
        cy.get('#center_column  .product-name').eq(i).click({force: true})
        cy.wait(time)
        cy.get('#group_1').select('M')
        cy.wait(time)
        //cy.get('#quantity_wanted').clear().type('5')
        //cy.wait(time)
        cy.get('.exclusive > span').click({force: true})
        cy.wait(time)
        cy.get('.button-medium > span').click({force: true})
        cy.wait(time)
        cy.get('.icon-home').click({force: true})

    }
});
   
 
});

