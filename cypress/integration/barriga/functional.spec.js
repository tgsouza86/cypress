///<reference types="cypress" />

describe('Should Test at a functional level ', () => {
   
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/') 
        cy.get('.input-group > .form-control').type('a@a')
        cy.get(':nth-child(2) > .form-control').type('a')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should creater an account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta de teste Tiago')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'inserida com sucesso')
    })
})

