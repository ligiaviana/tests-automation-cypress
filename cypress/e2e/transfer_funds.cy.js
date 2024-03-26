/// <reference types="Cypress" />

describe('Funds', function () {

    this.beforeEach(function () {
        cy.visit('https://altoromutual.com')
        cy.wait(1000)
        cy.get('a#AccountLink').click();
    })

    it('Transfer Funds', function () {
        cy.get('input#uid').type('admin');
        cy.get('input#passw').type('admin');
        cy.get('input[name="btnSubmit"]').click();
        cy.get('a#MenuHyperLink3').click();
        cy.get('select#toAccount').select('800001');
        cy.get('input#transferAmount').click().type('1000');
        cy.get('input#transfer').click();
    })
});

