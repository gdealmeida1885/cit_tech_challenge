/// <reference types="cypress" />
// @ts-check

export class BasePage implements BasePage {
    //The elements of the page could be mapped in two different ways.
    //Eiter assigning it to a variable or calling it within a function
    //Both ways are good but for this tech challenge I've decided to go with the first example
    pageUrl: Cypress.Chainable<Cypress.AUTWindow>;
    signUpButton: Cypress.Chainable<JQuery<HTMLElement>>;

    constructor() {
        this.pageUrl = cy.visit("/");
        this.signUpButton = cy.get("a[href='/deliver']");
    }

    loadBasePage(): BasePage {
        this.pageUrl;
        return this;
    }

    goToSignUpPage(): void {
        this.signUpButton.click();
    }

    checkIfPageLoaded(): BasePage {
        this.signUpButton
            .should('be.visible');
        return this;
    }
}