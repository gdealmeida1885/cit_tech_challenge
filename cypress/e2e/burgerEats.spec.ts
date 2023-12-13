/// <reference types="cypress" />

//import { describe } from "mocha";
import { BasePage } from "../pages/basePage";
import { SignUpPage } from "../pages/signUpPage";
import { Driver } from "../factory/driver";
import { AlertModal } from "../pages/alertModal";

// @ts-check

describe("Sign Up Feature", () => { 
    beforeEach("Test Setup", () => { 
        new BasePage()
            .loadBasePage()
            .checkIfPageLoaded()
            .goToSignUpPage();
    });

    it("Should successfully sign up", () => { 
        const driver = new Driver("valid");
        new SignUpPage()
            .checkIfPageLoaded()
            .fillInputForm(driver)
            .checkAddressInfo(driver)
            .selectDriversVehicle("Moto")
            .uploadDriversLicense(driver)
            .submitForm();

        new AlertModal() 
            .checkAlertMessage("Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.");
    });

    it("Should attempt to sign up with invalid cpf", () => {
        const driver = new Driver("invalid");

        new SignUpPage()
            .checkIfPageLoaded()
            .fillInputForm(driver)
            .checkAddressInfo(driver)
            .selectDriversVehicle("Carro")
            .submitForm()
            .checkFormErrorMessages("Oops! CPF inválido");
    });

    it("Should attempt to sign up without submiting drivers license", () => {
        //This feature contains a bug. Whenever the user tries to submit a form
        //Without providing the drivers license, the form updates and clean everything
        //Basically erasing all the user inputs.
        //Because of this, I consider that even beign a "failure", the test is a "success"
        //And the developer should update the feature
        const driver = new Driver("valid");
        new SignUpPage()
            .checkIfPageLoaded()
            .fillInputForm(driver)
            .checkAddressInfo(driver)
            .selectDriversVehicle("Moto")
            .submitForm()
            .checkFormErrorMessages("Adicione uma foto da sua CNH");
    });
})