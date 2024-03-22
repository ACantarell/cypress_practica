

import 'cypress-file-upload';//cargando el plugin de file upload

describe('cargando archivos', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })

    it('cargando archivos', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.wait(3000)
        const foto = "img1.jpg";//definiendo el nombre del archivo
        cy.get('[type="file"]') //buscando el elemento
         .attachFile(foto) //cargando el archivo
    });


})