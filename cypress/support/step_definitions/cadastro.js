
const baseUrlWeb = Cypress.config('baseUrlWeb');


import { faker } from '@faker-js/faker';

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    Email = faker.internet.email();

    palavraAleatoria = faker.lorem.word(); 

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar 'false' aqui evita que o Cypress falhe o teste
  return false
})
Given('que eu estou em um navegando para fazer o cadastro', () => {
    cy.visit(baseUrlWeb)
});

When('eu navego para a página do formulário', (url) => {


    cy.visit(baseUrlWeb+'automation-practice-form') 

});

Then('preencho os campos com sucesso', (url) => {

   cy.get("#firstName").type(firstName);
    cy.get("#lastName").click();
    cy.get("#lastName").dblclick();
    cy.get("#lastName").click();
    cy.get("#lastName").type(lastName);
    cy.get("#userEmail").dblclick();
    cy.get("#userEmail").click();
    cy.get("#userEmail").type(Email)
    cy.get("#genterWrapper > div.col-md-9 > div:nth-of-type(1)").click();

    cy.get("#userNumber").type(11947881630);

   // cy.get("#dateOfBirthInput").type("29 Aug 1985");
   // cy.get("#dateOfBirthInput").dblclick();

    cy.get("#currentAddress").dblclick();
    cy.get("#currentAddress").click();
    cy.get("#currentAddress").type(palavraAleatoria);
    
    
   
    cy.get("#stateCity-wrapper > div:nth-of-type(2) svg").click();
    cy.get("#react-select-3-option-0").click();
    cy.get("div.col-md-6 div:nth-of-type(3) svg").click();
    cy.get("#react-select-4-option-0").click();

    cy.get("#submit").click();
    cy.get('div.modal-header').should('exist');
    cy.screenshot()

   


});

