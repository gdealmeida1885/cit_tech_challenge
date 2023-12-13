import driverInfo from '../fixtures/driverInfo.json';

export class Driver implements Driver {
    name: string;
    email: string;
    cpf: number;
    phone: number;
    address: string;
    postalCode: string;
    houseNumber: number;
    complement: string;
    driversLicense: string;
    neighborhood: string
    city: string;

    constructor(driverType: string) {
        if (driverType == "valid") {
            this.name = driverInfo.valid_driver.name;
            this.email = driverInfo.valid_driver.email;
            this.cpf = driverInfo.valid_driver.cpf;
            this.phone = driverInfo.valid_driver.phone;
            this.address = driverInfo.valid_driver.address;
            this.postalCode = driverInfo.valid_driver.postalCode;
            this.houseNumber = driverInfo.valid_driver.houseNumber;
            this.complement = driverInfo.valid_driver.complement;
            this.driversLicense = driverInfo.valid_driver.driversLicense;
            this.city = driverInfo.valid_driver.city;
            this.neighborhood = driverInfo.valid_driver.neighborhood;
        } else {
            this.name = driverInfo.invalid_driver.name;
            this.email = driverInfo.invalid_driver.email;
            this.cpf = driverInfo.invalid_driver.cpf;
            this.phone = driverInfo.invalid_driver.phone;
            this.address = driverInfo.invalid_driver.address;
            this.postalCode = driverInfo.invalid_driver.postalCode;
            this.houseNumber = driverInfo.invalid_driver.houseNumber;
            this.complement = driverInfo.invalid_driver.complement;
            this.driversLicense = driverInfo.invalid_driver.driversLicense;
            this.city = driverInfo.invalid_driver.city;
            this.neighborhood = driverInfo.invalid_driver.neighborhood;
        }

    }
}