// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {

    cy.get('#main-content').should('be.visible').wait(1000)
        .contains(produto).click().wait(1000)
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade).wait(1000)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '4 × “Marco Lightweight Active Hoodie” foram adicionados no seu carrinho.')
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
    cy.screenshot()
    cy.visit('/produtos/page/3/')

})

Cypress.Commands.add('addProduto2', (produto, tamanho, cor, quantidade) => {

    cy.get('#main-content').should('be.visible').wait(1000)
        .contains(produto).click().wait(1000)
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade).wait(1000)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '3 × “Mithra Warmup Pant” foram adicionados no seu carrinho.')
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 7)
    cy.screenshot()
    cy.visit('/produtos/page/3/')

})

Cypress.Commands.add('addProduto3', (produto, tamanho, cor, quantidade) => {

    cy.get('#main-content').should('be.visible').wait(1000)
        .contains(produto).click().wait(1000)
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade).wait(1000)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '6 × “Mars HeatTech™ Pullover” foram adicionados no seu carrinho.')
    cy.screenshot()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 13)

})