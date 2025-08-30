const baseUrlWeb = Cypress.config('baseUrlWeb');
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Boas práticas: Adiciona um listener para ignorar erros de origem cruzada
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('que eu estou na página', () => {
    cy.visit(baseUrlWeb + 'browser-windows');
});

When('clico no botao new Window', () => {
    cy.get("#windowButton")
     .invoke('removeAttr', 'target')
      .click();
      cy.wait(500); 


});

Then('aeu clico no botão para fazer o Reset', () => {
    // Valida o URL da nova tela
  cy.url().should('include', 'sample');

    // 4. Valida se o elemento com a mensagem existe e tem o texto correto
cy.url().should('include', 'sample');

    // 4. Valida se o conteúdo da nova página está correto
    cy.get('h1#sampleHeading')
      .should('be.visible')
      .and('have.text', 'This is a sample page');
});