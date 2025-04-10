
import fixPage_login from '../../../fixtures/page_login.json'

const el = require('./elements').ELEMENTS;
const os = Cypress.env('layout')
class Login {

    //Método para fazer a chamada de abrir o browser na tela "www.xpto.com.br"
    acessarLogin() {
        cy.visit(Cypress.env('BASE_URL_DO_SISTEMA'))
        //cy.get(el.btn_Entrar).click()
    }

    //Metodo para iniciar o login
    preencherLogin() {
    }
   

}
export default new Login()