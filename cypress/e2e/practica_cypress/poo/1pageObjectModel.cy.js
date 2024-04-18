import Proyecto from '../../../support/pageObjectModel'

describe('Ejercicio de PO', () => {

    const master = new Proyecto()
    
    it('ejecutando el PO', () => {
        master.visitar()
    });

    it('ejecutando2 el PO', () => {
        master.visitar()
        master.seccion1()
    })
})