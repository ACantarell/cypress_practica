class Proyecto {
        visitar(){
        
            cy.visit('https://demoqa.com/')
            cy.title().should('eq', 'DEMOQA')
        
    }

        seccion1(){
            cy.title().should('eq', 'DEMOQA')
            
        }
}//final


export default Proyecto;