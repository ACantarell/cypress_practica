Feature: Estamos probando la metodogia de uso

    Vamos a testear una pagina web y su formulario de inscripcion

    Scenario: validar el registro del usuario
        Given abrir https://testpages.eviltester.com/styled/validation/input-validation.html
        When rellenamos los formularios correspondientes
        And Damos click en el registro
        Then nos enviarar a otro pagina que nos dira el registro fue exitoso

        