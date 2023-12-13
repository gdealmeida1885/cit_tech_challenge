/// <reference types="cypress" />
// @ts-check

interface SignUpPage extends BasePage {
    nameInput: Cypress.Chainable<JQuery<HTMLElement>>
    cpfInput: Cypress.Chainable<JQuery<HTMLElement>>
    emailInput: Cypress.Chainable<JQuery<HTMLElement>>
    phoneInput: Cypress.Chainable<JQuery<HTMLElement>>
    postalCodeInput: Cypress.Chainable<JQuery<HTMLElement>>
    searchPostalCodeButton: Cypress.Chainable<JQuery<HTMLElement>>
    streetInput: Cypress.Chainable<JQuery<HTMLElement>>
    houseNumberInput: Cypress.Chainable<JQuery<HTMLElement>>
    complementInputInput: Cypress.Chainable<JQuery<HTMLElement>>
    neighborhoodInput: Cypress.Chainable<JQuery<HTMLElement>>
    cityInput: Cypress.Chainable<JQuery<HTMLElement>>
    driversLicenseUploadInput: any
    submitButton: Cypress.Chainable<JQuery<HTMLElement>>
    pageUrl: Cypress.Chainable<Cypress.AUTWindow>

    checkIfPageLoaded(): SignUpPage;
    fillInputForm(driver: Driver): SignUpPage;
    checkAddressInfo(driver: Driver): SignUpPage; 
    uploadDriversLicense(driver: Driver): SignUpPage;
    selectDeliveryVehicle(vehicle: string): SignUpPage;
    submitForm(): AlertModal;
    checkFormErrorMessages(errorMessage: string): SignUpPage
}