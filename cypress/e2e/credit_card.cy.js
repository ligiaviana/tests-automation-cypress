/// <reference types="Cypress" />

describe('Credit Card', function () {

    this.beforeEach(function () {
        cy.visit('https://altoromutual.com')
        cy.wait(1000)
        cy.get('a#AccountLink').click();
    })

    it('Apply For Credit Card', function () {
        cy.get('input#uid').type('admin');
        cy.get('input#passw').type('admin');
        cy.get('input[name="btnSubmit"]').click();
        cy.visit('https://altoromutual.com/bank/apply.jsp'); 
        cy.get('input[name="passwd"]').type('admin'); 
        cy.contains('Sign Off').click();
    })
    
});