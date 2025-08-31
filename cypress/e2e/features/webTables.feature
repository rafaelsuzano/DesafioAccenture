Feature: Gerenciar registros e navegação na tabela


  Scenario: Adicionar 12 registros e navegar para a próxima página
    Given que eu estou na página de "Web Tables"
    When eu adiciono os seguintes registros:
      | Nome   | Sobrenome | Email                 | Idade | Salário | Departamento |
      | João   | Silva     | joao.silva@teste.com  | 30    | 50000   | TI           |
      | Maria  | Santos    | maria.s@teste.com     | 25    | 60000   | RH           |
      | Pedro  | Oliveira  | pedro.o@teste.com     | 35    | 75000   | Vendas       |
      | Ana    | Souza     | ana.s@teste.com       | 28    | 55000   | Marketing    |
      | Carlos | Lima      | carlos.l@teste.com    | 40    | 80000   | Gerência     |
      | Sofia  | Costa     | sofia.c@teste.com     | 22    | 45000   | Estagiária   |
      | Lucas  | Ferreira  | lucas.f@teste.com     | 33    | 62000   | Finanças     |
      | Bianca | Rodrigues | bianca.r@teste.com    | 27    | 58000   | TI           |
      | Rafael | Almeida   | rafael.a@teste.com    | 31    | 71000   | Vendas       |
      | Julia  | Martins   | julia.m@teste.com     | 29    | 65000   | RH           |
      | Daniel | Gomes     | daniel.g@teste.com    | 24    | 48000   | Marketing    |
      | Isabel | Lopes     | isabel.l@teste.com    | 38    | 90000   | Gerência     |
    And eu clico para ver a próxima página
    When eu apago todos os registros adicionados
    Then a tabela deve voltar ao seu estado original