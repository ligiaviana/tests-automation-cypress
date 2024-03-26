/// <reference types="Cypress" />

describe('Recent Transactions', function () {

    this.beforeEach(function () {
        cy.visit('https://altoromutual.com')
        cy.wait(1000)
        cy.get('a#AccountLink').click();
    })

    it('View Recent Transactions', function () {
        cy.get('input#uid').type('admin');
        cy.get('input#passw').type('admin');
        cy.get('input[name="btnSubmit"]').click();
        cy.get('a#MenuHyperLink2').click();
        cy.get('input#startDate').type('2024-01-01');
        cy.get('input[type="submit"][value="Submit"]').click();
    })
});

