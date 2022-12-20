/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome, 
            dadosEndereco[1].sobrenome, 
            dadosEndereco[1].empresa, 
            dadosEndereco[1].pais, 
            dadosEndereco[1].endereco, 
            dadosEndereco[1].numero, 
            dadosEndereco[1].cidade, 
            dadosEndereco[1].estado, 
            dadosEndereco[1].cep, 
            dadosEndereco[1].telefone, 
            dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });

    it('Deve fazer cadastro de entrega com sucesso', () => {
        enderecoPage.editarEnderecoEntrega(dadosEndereco[0].nome, 
            dadosEndereco[0].sobrenome, 
            dadosEndereco[0].empresa, 
            dadosEndereco[0].pais, 
            dadosEndereco[0].endereco, 
            dadosEndereco[0].numero, 
            dadosEndereco[0].cidade, 
            dadosEndereco[0].estado, 
            dadosEndereco[0].cep)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });
})