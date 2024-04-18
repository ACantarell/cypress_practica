describe('Practicando testeos de apis', () => {

    it('practicando el uso de apis', () => {
        
        cy.fixture('MOCK_DATA').then((data)=>{
            cy.log(data[0].firstname, data[4].firstname)
            
        })

        })
})