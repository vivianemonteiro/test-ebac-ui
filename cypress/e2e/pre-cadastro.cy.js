/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Funcionalidade Pré Cadastro', () => {
    let emailFaker = faker.internet.email()
    let nameFaker = faker.name.firstName()
    let lastNameFaker = faker.name.lastName()
    let password = 'Teste@vivi123'


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o pré cadastro com sucesso', () => {

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameFaker)
        cy.get('#account_last_name').type(lastNameFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Pré cadastro sem informar o e-mail', () => {
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Informe um endereço de e-mail válido.')
    });

    it('Pré cadastro sem informar a senha', () => {
        cy.get('#reg_email').type(emailFaker)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Digite a senha da conta.')
    });

    it('Pré cadastro sem informar e-mail e senha', () => {
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Informe um endereço de e-mail válido.')
    });



});