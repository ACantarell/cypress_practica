describe('Practica de fixture', () => {

    beforeEach(() => {
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.url().should('eq', 'https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.fixture('example').as('exampleJson')
    })

    it('Cargando datos de un fixture', () => {

        cy.get('@exampleJson').then((data)=>{
            cy.get('#firstname').type(data.name)
            cy.get('#surname').type(data.lastName)
            cy.get('#age').type(data.age)
            cy.get('#country').select(data.country)
            cy.get('#notes').type(data.notes)
            cy.get('[type="submit"]').should('be.visible').click({force: true})
        })
        

    });
})