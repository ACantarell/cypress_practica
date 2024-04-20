
//Muy importante el id de las pruebas para poder moficarlos y eliminarlos 
describe('Practicando request con Cypress', () => {
    
    let page;
    it('practicando el uso de apis', () => {

        page = cy.request('http://localhost:3000/posts')
        .then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.be.a('array').length(2)
            expect(response.duration).to.be.lessThan(100)
        })
        
    })


    it('Api metodo "Post"', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                id: 4,
                body: 'Prueba con Cypress',
                author: 'Cypress con Amadeo'
            }
        })
    });

    it('Api metodo "PUT"', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/posts/4', // aca pongo el id para moficarlo
            body: {
                id: 4,
                body: 'Prueba con Cypress',
                author: 'Cypress con Amadeo'
            }
        })
    });

    it('Api metodo "GET"', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts/4', 
            body: {
                id: 4,
                body: 'Prueba con Cypress',
                author: 'Cypress con Amadeo'
            }
        }).then((resp)=>{
            expect(resp.status).equal(200)

        })
    });


    it('Api metodo "DELETE"', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/4', 
            body: {
                id: 4,
                body: 'Prueba con Cypress',
                author: 'Cypress con Amadeo'
            }
        }).then((resp)=>{
            expect(resp.status).equal(200)
            expect(resp.body.author).equal('Cypress con Amadeo')
        })
    });
    
})

