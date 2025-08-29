Feature: Jornada do usuario

  Scenario: Cadastro de Usuário com sucesso
    Given eu acesso a api para cadastro de Usuário
    When eu preencho todos os campos obrigatórios
    Then eu devo ver uma mensagem de sucesso


  Scenario:Gerar um token de acesso
    Given eu acesso a api para gerar token
    When eu preencho  os dados do usuario
    Then  eu deve receber um token


  Scenario: Confirmar se o usuário criado está autorizado
    Given eu acesso a api para confirmar a autorizacao
    When eu preencho  os dados do login
    Then  eu deve receber a autorizacao



  Scenario: Listar todos os livros disponíveis sem autenticação
    Given eu acesso a API de livros publica
    When eu solicito a lista de todos os livros
    Then eu devo receber uma lista de livros 


 Scenario: Alugar dois livros com sucesso
    Given que eu sou um usuário autenticado para alugar livros
    When eu solicito a adição de dois livros ao meu perfil
    Then a requisição de alugar deve ser bem-sucedida


  Scenario: Listar livros no meu perfil
    Given que eu sou um usuário autenticado
    When eu consulto a lista de livros do meu perfil
    Then os livros que eu adicionei devem ser listados