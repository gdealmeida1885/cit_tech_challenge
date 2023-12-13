/// <reference types="cypress" />
// @ts-check
import 'cypress-iframe';

/* I've decided to do this in a more "straightfoward" way, since I managed
to apply all available patterns and good practices with the first challenge */
describe("Iframe Test", () => {
    beforeEach('Visit iframe page', () => {
        cy.visit("https://webdriveruniversity.com/IFrame/");
    })

    it('Should fill the contact form successfully', () => {
        const contactForm = {
            name: "Gabriel",
            lastName: "Almeida",
            email: "gabriel.almeida.sdmf@gmail.com",
            comments: "Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!"
        }

        cy.iframe('#frame')
            .should('be.visible')
            .find("a[href='../Contact-Us/contactus.html']")
            .click();

        cy.enter('#frame')
            .find("input[placeholder='First Name']")
            .type(contactForm.name);

        cy
            .find("input[name='last_name']")
            .type(contactForm.lastName);

        cy.enter('#frame')
            .find("input[name='email']")
            .type(contactForm.email);

        cy.enter('#frame')
            .find("input[name='messages']")
            .type(contactForm.comments);

        cy.enter("#frame")
            .find("input[class='contact_button']")
            .click();


        cy.enter("#frame")
            .find("#contact_reply")
            .should('contain', "Thank you for your reply!");
    })
})