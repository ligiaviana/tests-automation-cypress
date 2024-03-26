/// <reference types="Cypress" />

describe('Account Summary', function () {

    this.beforeEach(function () {
        cy.visit('https://altoromutual.com')
        cy.wait(1000)
        cy.get('a#AccountLink').click();
    })

    it('View Account Summary', function () {
        cy.get('input#uid').type('admin');
        cy.get('input#passw').type('admin');
        cy.get('input[name="btnSubmit"]').click();
        cy.get('a#MenuHyperLink1').click();
        cy.get('input#btnGetAccount').click();
    })
});

