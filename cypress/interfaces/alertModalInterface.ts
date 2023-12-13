
interface AlertModal {
    successMessage: Cypress.Chainable<JQuery<HTMLElement>>
    closeButton: Cypress.Chainable<JQuery<HTMLElement>>

    checkAlertMessage(message: string): AlertModal
    closeAlert(): void
}