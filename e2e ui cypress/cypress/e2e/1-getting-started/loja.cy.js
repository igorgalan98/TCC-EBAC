/// <reference types="cypress" />


describe('browser nav', () => {
    it('navigates to homepage', () => {
        cy.visit('/produtos/page/3/')
        cy.title().should('contain', 'Produtos')

        cy.addProdutos('Marco Lightweight Active Hoodie', 'XL', 'Blue', 4);
        cy.addProduto2('Mithra Warmup Pant', '33', 'Orange', 3);
        cy.addProduto3('Mars HeatTech™ Pullover', 'L', 'Black', 6);

    })
})