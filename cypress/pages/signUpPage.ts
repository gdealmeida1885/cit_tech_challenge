/// <reference types="cypress" />
import { AlertModal } from "./alertModal";
import { BasePage } from "./basePage";
import 'cypress-file-upload';

// @ts-check

export class SignUpPage extends BasePage implements SignUpPage {
    pageUrl: Cypress.Chainable<Cypress.AUTWindow>;
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

    constructor() {
        super();
        this.pageUrl = cy.visit("/deliver");
        this.nameInput = cy.get("input[name='name'");
        this.cpfInput = cy.get("input[name='cpf']");
        this.emailInput = cy.get("input[name='email'");
        this.phoneInput = cy.get("input[name='whatsapp'");
        this.postalCodeInput = cy.get("input[name='postalcode']");
        this.searchPostalCodeButton = cy.get("input[type='button'][value='Buscar CEP']");
        this.streetInput = cy.get("input[name='address']");
        this.houseNumberInput = cy.get("input[name='address-number']");
        this.complementInputInput = cy.get("input[name='address-details']");
        this.neighborhoodInput = cy.get("input[name='district']");
        this.cityInput = cy.get("input[name='city-uf']");
        this.driversLicenseUploadInput = cy.get('input[accept^="image"]');
        this.submitButton = cy.get("button[type=submit]");
    }

    checkIfPageLoaded(): SignUpPage {
        this.submitButton.should('be.visible');
        return this;
    }

    fillInputForm(driver: Driver): SignUpPage {
        this.nameInput.type(driver.name);
        this.cpfInput.type(String(driver.cpf));
        this.emailInput.type(driver.email);
        this.phoneInput.type(String(driver.phone));
        this.postalCodeInput.type(String(driver.postalCode));
        this.searchPostalCodeButton.click();
        return this;
    }

    checkAddressInfo(driver: Driver): SignUpPage {
        this.streetInput
            .invoke('attr', 'value')
            .should('contain', driver.address);

        this.neighborhoodInput
            .invoke('attr', 'value')
            .should('contain', driver.neighborhood);

        this.cityInput
            .invoke('attr', 'value')
            .should('contain', driver.city);

        return this;
    }

    submitForm(): SignUpPage {
        this.submitButton.click();
        return this;
    }

    selectDriversVehicle(vehicle: string): SignUpPage {
        cy.get(".delivery-method > li")
            .contains(vehicle)
            .click()
            .parent()
            .should('have.class', "selected");
        return this;
    }

    uploadDriversLicense(driver: Driver): SignUpPage {
        this.driversLicenseUploadInput
            .attachFile(driver.driversLicense);
        return this;
    }

    checkFormErrorMessages(errorMessage: string): SignUpPage {
        cy.get('.alert-error').should('have.text', errorMessage);

        return this;
    }
}
