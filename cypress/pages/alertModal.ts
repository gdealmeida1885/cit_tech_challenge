/// <reference types="cypress" />
// @ts-check

export class AlertModal implements AlertModal {
    successMessage: Cypress.Chainable<JQuery<HTMLElement>>

    constructor() {
        this.successMessage = cy.get("div[id='swal2-html-container']");
    }

    checkAlertMessage(message: string): AlertModal {
        this.successMessage.should('have.text', message);
        return this;
    }
}