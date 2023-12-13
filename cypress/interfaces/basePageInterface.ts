/// <reference types="cypress" />
// @ts-check

interface BasePage { 
    pageUrl: Cypress.Chainable<Cypress.AUTWindow>
    signUpButton: Cypress.Chainable<JQuery<HTMLElement>>

    goToSignUpPage(): void
    checkIfPageLoaded(): BasePage
    loadBasePage(): BasePage
}