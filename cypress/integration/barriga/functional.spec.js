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
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
       // cy.get(':nth-child(3) > :nth-child(2) > .fa-edit')
       cy.get('[data-test=menu-settings]').click()
       cy.get('[href="/contas"]').click()
       cy.xpath("//table//td[contains(., 'Conta de teste Tiago')]/..//i[@class='far fa-edit']").click()
       cy.get('[data-test=nome]')
        .clear()
        .type('Conta alterada')
       cy.get('.btn').click()
       cy.get('.toast-message').should('contain', 'Conta atualizada com sucesso') 
    })
})

