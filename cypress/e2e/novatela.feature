Feature: Nova Tela

    Scenario: Nova tela
        Given que eu estou na página
        When clico no botao new Window
        Then abre a nova tela


Feature: Teste da barra de progresso

  Scenario: Parar a barra de progresso em 25
      Given que eu estou na página da barra de progresso
      When eu clico no botão Start a barra de progresso atinge 25
      Then eu clico no botão parar