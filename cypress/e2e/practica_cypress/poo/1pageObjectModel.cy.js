import Proyecto from '../../../support/pageObjectModel'

describe('Ejercicio de PO', () => {

    const master = new Proyecto()
    
    it('ejecutando el POO', () => {
        master.visitar()
    });

    it('ejecutando2 el POO', () => {
        master.visitar()
        master.seccion1()
    })
})