///<reference types="cypress" />

describe('Esperas....', ()=> {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar Disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })
    it.only('Uso do Find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
         // .find('span')
            .should('contain', 'Item 2')    

        
          //  cy.get('#lista li span')
         //   .should('contain', 'Item 2')    
    })
})