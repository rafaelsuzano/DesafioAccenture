import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu estou na página de "Web Tables"', () => {
  cy.visit('https://demoqa.com/webtables');
});

When('eu adiciono os seguintes registros:', (dataTable) => {
  const records = dataTable.hashes();

  records.forEach((record) => {
    cy.get('#addNewRecordButton').click();
    cy.get('#userForm').should('be.visible');

    cy.get('#firstName').type(record.Nome);
    cy.get('#lastName').type(record.Sobrenome);
    cy.get('#userEmail').type(record.Email);
    cy.get('#age').type(record.Idade);
    cy.get('#salary').type(record.Salário);
    cy.get('#department').type(record.Departamento);

    cy.get('#submit').click();
  });
      cy.screenshot()
});

When('eu clico para ver a próxima página', () => {
    cy.screenshot()
  cy.get('div.-next > button').click();
 
});


When('eu apago todos os registros adicionados', () => {



for (let i = 15; i >= 4; i--) {
  console.log(i);
      cy.get("#delete-record-"+i+ " path").click();
       
}
});

Then('a tabela deve voltar ao seu estado original', () => {
    cy.screenshot()
});