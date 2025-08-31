import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu estou na página de Sortable', () => {
  // 1. Intercepta a requisição da API que a página faz para carregar a lista de dados
  cy.intercept('GET', '**/sortable').as('getSortableList');

  // 2. Visita a página
  cy.visit('https://demoqa.com/sortable');

  // 3. Espera a requisição ser concluída. Isso garante que os dados da lista foram carregados
  cy.wait('@getSortableList');

  // 4. Agora, com os dados da API carregados, é seguro buscar os elementos.
  cy.get('.vertical-list-container li', { timeout: 15000 }).should('have.length', 6);
});

When('eu reordeno a lista para a ordem decrescente', () => {
  cy.get('.vertical-list-container li').as('listItems');

  cy.get('@listItems').its('length').then((count) => {
    for (let i = count - 1; i > 0; i--) {
      const itemToDrag = cy.get('@listItems').eq(i);
      const dropTarget = cy.get('@listItems').eq(0);
      itemToDrag.drag(dropTarget);
    }
  });
});

Then('os itens da lista devem estar na ordem decrescente', () => {
  const expectedOrder = ['Six', 'Five', 'Four', 'Three', 'Two', 'One'];

  cy.get('@listItems').then(($listItems) => {
    const finalOrder = Cypress.$.map($listItems, (el) => {
      return el.innerText;
    });
    expect(finalOrder).to.deep.equal(expectedOrder);
  });
});