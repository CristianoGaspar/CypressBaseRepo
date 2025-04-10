/// <reference types="cypress" />

import Login from '../../support/page/modulo_sistema'

const { it } = require("mocha")

context('Login na plataforma XPTO', { tags: ['@regressivo', '@login'] }, () => {
    //cenarios de Testes
    it('CEN001 - Validar Login com sucesso', () => {
        Login.acessarLogin()
        Login.preencherLogin()
    })   
})


