/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso' , () =>{
        cy.get('#username').type('vivianemonteiro@mailinator.com')
        cy.get('#password').type('Teste@cypress1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vivianemonteiro (não é vivianemonteiro? Sair)')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido' , () =>{
        cy.get('#username').type('vivianemonteiro@teste.com')
        cy.get('#password').type('Teste@cypress1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain' ,  'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida' , () =>{
        cy.get('#username').type('vivianemonteiro@mailinator.com')
        cy.get('#password').type('Teste@1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' ,  'Erro: a senha fornecida para o e-mail vivianemonteiro@mailinator.com está incorreta. Perdeu a senha?')
    })


})