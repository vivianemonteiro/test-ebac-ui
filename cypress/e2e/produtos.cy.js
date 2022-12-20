/// <reference types="cypress" />

describe('Funcionalidade: Página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('[class="product-block grid"]')
        .first()
        .click()
    });

    it('Deve selecionar um produto pela posição na lista', () => {
        cy.get('[class="product-block grid"]')
        .eq(1)
        .click()
    });

    it('Deve selecionar um produto da lista pelo nome', () => {
        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
    });

    it('Deve adicionar um item ao carrinho', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]')
        .contains('Ajax Full-Zip Sweatshirt')
        .click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade +' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    });

});