/// <reference types="cypress" />
import compraPage from "../support/page-objects/compra.page";
const perfil = require('../fixtures/perfil.json')


describe('Funcionalidade: Compra de 4 Produtos', () => {
    
    

    beforeEach(() => {
        cy.visit('produtos/')
    });
    
    it('Deve realizar a compra de 4 produtos com sucesso navegando na página de produtos', () => {
        compraPage.selecionarProdutos('Abominable Hoodie','M', 'Green', 1)
        compraPage.selecionarProdutos('Arcadio Gym Short','32', 'Red', 1)
        cy.get(':nth-child(3) > .page-numbers').click()
        compraPage.selecionarProdutos('Beaumont Summit Kit','XL', 'Orange', 1)
        cy.get(':nth-child(4) > .page-numbers').click()
        compraPage.selecionarProdutos('Deion Long-Sleeve EverCool™ Tee','XL', 'White', 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
        compraPage.finalizarCompra(perfil.usuario, perfil.senha)


    });

});