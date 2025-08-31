Feature: Reordenar lista usando Drag and Drop

Scenario: Mover os itens da lista para a ordem decrescente
    Given que eu estou na página de Sortable
    When eu reordeno a lista para a ordem decrescente
    Then os itens da lista devem estar na ordem decrescente