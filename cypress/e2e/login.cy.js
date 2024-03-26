/// <reference types="Cypress" />

describe('AltoroMutual Online Banking', function () {

    this.beforeEach(function () {
        cy.visit('https://altoromutual.com')
        cy.wait(1000)
        cy.get('a#AccountLink').click();
    })

    it('Login', function () {
        cy.get('input#uid').type('admin');
        cy.get('input#passw').type('admin');
        cy.get('input[name="btnSubmit"]').click();
    })
});

