describe('Desafio de fixture', () => {
    it('Recorriendo todo un fixture automatizado con sus contenidos', () => {
        
        cy.visit('https://testpages.eviltester.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.url().should('eq', 'https://testpages.eviltester.com/styled/validation/input-validation.html')


        cy.fixture('MOCK_DATA').then((data)=>{
            data.forEach(element => {
                cy.get('#firstname').type(element.firstname)
                cy.get('#surname').type(element.surname)
                cy.get('#age').type(element.age)
                cy.get('#country').select(element.country)
                cy.get('#notes').type(element.notes)
                cy.get('[type="submit"]').click({force:true})
                cy.get('#backtoform').click({force:true})
            });
        })
    });
})
