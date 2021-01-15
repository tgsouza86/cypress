///<reference types="cypress" />

describe('Work with basic elements', () => {
   
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
    })

    beforeEach(() => {
        cy.reload()
    })

    it ('using jquery selector ', () => {
        cy.get('table#tabelaUsuarios tbody>tr:eq(0) td:nth-child(3)>input').click()
        ///cy.get([onclick*='\Francisco\'])
           cy.get("[onclick*='\Francisco\']")
           cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0)~ td:eq(3) > input')
           cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input')

    })
})