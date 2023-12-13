#language: en

#The idea of this .feature file, is to have mapped some of the possible scenarios/test cases and show you how
#I would design some testing cases using Gherking, even though I wouldn't use Cucumber on this project.

Feature: Courier Sign Up
    As a deliveryman, I wish to be able to Sign Up at Burguer Eats
    In order to start making deliveries
    To be able to make some income and provide for my famiy

    Background: Home Page
        Given I have accessed the Burger Eats's Home Page
        And I click at "Cadastre-se para fazer entregas"

    Scenario: Successfull sign up with motorcycle as transport method
        Given I have valid credentials
            | name        | Gabriel Almeida               |
            | CPF         | 397.972.030-69                |
            | email       | 11954419893                   |
            | CEP         | 06856790                      |
            | rua         | R Adalberto Pereira Gomes, 88 |
            | numero      | 88                            |
            | complemento | Casa 2                        |
            | bairro      | Jd. Valo Velho                |
            | Cidade      | Itapecerica da Serra, SP      |
        And I select "Moto"
        And I submit a valid driver's license
        When I click "Cadastre-se para fazer entregas"
        #For the below assertion, I didn't felt that it was necessary to have the full message, as this file is just an example file
        Then I should see the "Aí sim, recebemos seus dados!" message

    Scenario: Successfull sign up with car as transport method
        Given I have valid credentials
            | name        | Gabriel Almeida               |
            | CPF         | 397.972.030-69                |
            | email       | 11954419893                   |
            | CEP         | 06856790                      |
            | rua         | R Adalberto Pereira Gomes, 88 |
            | numero      | 88                            |
            | complemento | Casa 2                        |
            | bairro      | Jd. Valo Velho                |
            | Cidade      | Itapecerica da Serra, SP      |
        And I select "Carro"
        And I submit a valid driver's license
        When I click "Cadastre-se para fazer entregas"
        #For the below assertion, I didn't felt that it was necessary to have the full message, as this file is just an example file
        Then I should see the "Aí sim, recebemos seus dados!" message

    Scenario: Successfull sign up with bike as transport method
        Given I have valid credentials
            | name        | Gabriel Almeida               |
            | CPF         | 397.972.030-69                |
            | email       | 11954419893                   |
            | CEP         | 06856790                      |
            | rua         | R Adalberto Pereira Gomes, 88 |
            | numero      | 88                            |
            | complemento | Casa 2                        |
            | bairro      | Jd. Valo Velho                |
            | Cidade      | Itapecerica da Serra, SP      |
        And I select "Bicicleta"
        And I submit a valid driver's license
        When I click "Cadastre-se para fazer entregas"
        #For the below assertion, I didn't felt that it was necessary to have the full message, as this file is just an example file
        Then I should see the "Aí sim, recebemos seus dados!" message

    Scenario: Successfull sign up without providing driver's license
        Given I have valid credentials
            | name        | Gabriel Almeida               |
            | CPF         | 397.972.030-69                |
            | email       | 11954419893                   |
            | CEP         | 06856790                      |
            | rua         | R Adalberto Pereira Gomes, 88 |
            | numero      | 88                            |
            | complemento | Casa 2                        |
            | bairro      | Jd. Valo Velho                |
            | Cidade      | Itapecerica da Serra, SP      |
        And I select "Bicicleta"
        But I don't upload a valid drivers license
        When I click "Cadastre-se para fazer entregas"
        #For the below assertion, I didn't felt that it was necessary to have the full message, as this file is just an example file
        Then I should see the "Adicione uma foto da sua CNH" error message

    #For this scenario outline, I didn't tried to mapped all invalid possibilities for this particular form
    #Otherwise, it would be huge and take too much time only for that.
    Scenario Outline: Attempt to sign up with invalid credentials
        Given I have invalid credentials
            | name        | <name>         |
            | CPF         | <cpf>          |
            | email       | <email>        |
            | CEP         | <cep>          |
            | rua         | <street>       |
            | numero      | <number>       |
            | complemento | <complement>   |
            | bairro      | <neighborhood> |
            | Cidade      | <city>         |
        And I select "Car"
        When I click "Cadastre-se para fazer entregas"
        Then I should see the "<message>" error message

        Examples:
            | <name>  | <cpf>          | <email>                        | <cep>    | <street>                   | <number> | <complement> | <neighborhood> | <city>                   | <error_message>              |
            | {EMPTY} | 397.972.030-69 | gabriel.almeida.sdmf@gmail.com | 06856790 | R. Adalberto Pereira Gomes | 88       | {EMPTY}      | Jd. Valo Velho | Itapecerica da Serra, SP | É necessário informar o nome |
            | Gabriel | 112.42.423.1   | gabriel.almeida.sdmf@gmail.com | 06856790 | R. Adalberto Pereira Gomes | 88       | {EMPTY}      | Jd. Valo Velho | Itapecerica da Serra, SP | Oops! CPF inválido           |
            | Gabriel | 397.972.030-69 | gabriel.almeida.sdmf@gmail.com | 1234567  | R. Adalberto Pereira Gomes | 88       | {EMPTY}      | Jd. Valo Velho | Itapecerica da Serra, SP | Informe um CEP válido        |

