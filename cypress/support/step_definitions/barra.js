import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu estou na página da barra de progresso', () => {
  cy.visit('https://demoqa.com/progress-bar');
});



When('eu clico no botão Start a barra de progresso atinge 24', () => {
        cy.get("#startStopButton").click();
  cy.get('[role="progressbar"]').should('have.text', '24%');
          cy.get("#startStopButton").click();

});

Then('eu clico no botão para fazer o Reset', () => {

  cy.get("#startStopButton").click();

});