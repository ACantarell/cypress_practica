require('cypress-plugin-tab')

describe('usando el plugin tab', () => {

    it('google', () => {
        cy.visit('https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407')

        cy.get('#RESULT_TextField-1')
            .type('Amadeo ').tab()
            .type('Cantarell').tab()
            .type('123456789').tab()
            .type('Argentina').tab()
            .type('CABA').tab()
            .type('amadeocantarell2@gmail.com').tab()
            cy.get('.highlight > label')
                .click()
            cy.get('#q15 > .inline_grid > tbody > :nth-child(1) > td > label')
                .click()
            cy.get('#RESULT_RadioButton-9')
                .select('Morning')
            cy.get('#FSsubmit')
                .click()
    });
})