# 🧪 Desafio Accenture - Automação de Testes

[![CI/CD Pipeline](https://github.com/rafaelsuzano/DesafioAccenture/actions/workflows/main.yml/badge.svg)](https://github.com/rafaelsuzano/DesafioAccenture/actions/workflows/main.yml)
[![Cypress](https://img.shields.io/badge/Cypress-14.2.1-green.svg)](https://www.cypress.io/)
[![BDD](https://img.shields.io/badge/BDD-Cucumber-blue.svg)](https://cucumber.io/)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-green.svg)](https://nodejs.org/)

*Projeto de automação de testes desenvolvido para o Desafio Accenture, utilizando Cypress com metodologia BDD (Behavior Driven Development) e Cucumber.*

---

## 🎯 Sobre o Projeto

Este projeto demonstra a implementação de testes automatizados para uma aplicação web, combinando testes de interface (E2E) e testes de API. O projeto utiliza a metodologia BDD para garantir que os testes sejam compreensíveis tanto para técnicos quanto para stakeholders de negócio.

### **Objetivos:**
- ✅ Demonstrar proficiência em automação de testes
- ✅ Implementar metodologia BDD com Cypress
- ✅ Testar funcionalidades de interface e API
- ✅ Gerar relatórios detalhados de execução
- ✅ Utilizar dados dinâmicos com Faker.js

---

## 🛠️ Stack Tecnológica

### **Framework Principal:**
- **Cypress 14.2.1** - Framework de automação E2E

### **Metodologia BDD:**
- **Cucumber** - Para escrita de cenários em linguagem natural
- **@badeball/cypress-cucumber-preprocessor** - Integração Cypress + Cucumber

### **Ferramentas de Suporte:**
- **@faker-js/faker** - Geração de dados dinâmicos
- **@4tw/cypress-drag-drop** - Suporte a drag and drop
- **cypress-plugin-api** - Testes de API
- **multiple-cucumber-html-reporter** - Relatórios HTML

### **Preprocessadores:**
- **esbuild** - Compilação rápida
- **@cypress/webpack-preprocessor** - Suporte a módulos

---

## 📁 Estrutura do Projeto

```
DesafioAccenture/
├── cypress/
│   ├── e2e/
│   │   └── features/           # Arquivos .feature (BDD)
│   │       ├── webTables.feature
│   │       ├── backend.feature
│   │       ├── cadastro.feature
│   │       ├── listsort.feature
│   │       ├── barra.feature
│   │       └── novatela.feature
│   ├── support/
│   │   ├── step_definitions/   # Implementação dos steps
│   │   ├── commands.js         # Comandos customizados
│   │   ├── utils.js           # Utilitários
│   │   └── e2e.js             # Configurações globais
│   ├── fixtures/              # Dados de teste
│   ├── screenshots/           # Screenshots de falhas
│   ├── reports/               # Relatórios gerados
│   └── downloads/             # Arquivos baixados
├── cypress.config.js          # Configuração do Cypress
├── generate-report.js         # Script de geração de relatórios
├── package.json               # Dependências do projeto
└── README.md                  # Este arquivo
```

---

## 🧪 Tipos de Testes Implementados

### **1. Testes de Interface (E2E)**

#### **Web Tables (`webTables.feature`)**
- **Funcionalidade:** Gerenciamento de tabelas web
- **Cenários:**
  - Adição de 12 registros com dados dinâmicos
  - Navegação entre páginas da tabela
  - Exclusão de registros
  - Validação do estado original da tabela

#### **List Sort (`listsort.feature`)**
- **Funcionalidade:** Ordenação de listas
- **Cenários:**
  - Verificação de ordenação ascendente/descendente
  - Validação de dados ordenados

#### **Cadastro (`cadastro.feature`)**
- **Funcionalidade:** Formulários de cadastro
- **Cenários:**
  - Preenchimento de formulários
  - Validação de campos obrigatórios
  - Submissão de dados

#### **Barra de Progresso (`barra.feature`)**
- **Funcionalidade:** Barras de progresso
- **Cenários:**
  - Monitoramento de progresso
  - Validação de estados

#### **Nova Tela (`novatela.feature`)**
- **Funcionalidade:** Navegação entre telas
- **Cenários:**
  - Transições de tela
  - Validação de elementos

### **2. Testes de API (`backend.feature`)**

#### **Jornada Completa do Usuário:**
- **Cadastro de Usuário:**
  - Criação de usuário com dados dinâmicos
  - Validação de resposta de sucesso (201)

- **Autenticação:**
  - Geração de token de acesso
  - Validação de autorização

- **Gerenciamento de Livros:**
  - Listagem de livros disponíveis
  - Aluguel de livros (2 livros)
  - Consulta de livros no perfil

---

## 🎭 Metodologia BDD (Behavior Driven Development)

### **Linguagem Gherkin:**
Os cenários são escritos em linguagem natural usando Gherkin, tornando-os compreensíveis para toda a equipe:

```gherkin
Feature: Gerenciar registros e navegação na tabela

Scenario: Adicionar 12 registros e navegar para a próxima página
  Given que eu estou na página de "Web Tables"
  When eu adiciono os seguintes registros:
    | Nome   | Sobrenome | Email                 | Idade | Salário | Departamento |
    | João   | Silva     | joao.silva@teste.com  | 30    | 50000   | TI           |
  And eu clico para ver a próxima página
  When eu apago todos os registros adicionados
  Then a tabela deve voltar ao seu estado original
```

### **Vantagens da Metodologia BDD:**
- ✅ **Comunicação clara** entre técnicos e não-técnicos
- ✅ **Documentação viva** dos requisitos
- ✅ **Foco no comportamento** da aplicação
- ✅ **Colaboração** entre equipes

---

## 🚀 Como Executar os Testes

### **Pré-requisitos:**
- Node.js (versão 16 ou superior)
- npm ou yarn

### **Instalação:**
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd DesafioAccenture

# Instale as dependências
npm install
```

### **Execução dos Testes:**

#### **Executar todos os testes:**
```bash
npx cypress run
```

#### **Executar testes específicos:**
```bash
# Testes de interface
npx cypress run --spec "cypress/e2e/features/webTables.feature"

# Testes de API
npx cypress run --spec "cypress/e2e/features/backend.feature"
```

#### **Modo interativo:**
```bash
npx cypress open
```

### **Geração de Relatórios:**
```bash
# Executar testes e gerar relatório
npx cypress run
node generate-report.js
```

---

## 🔄 CI/CD com GitHub Actions

### **Pipeline Automatizado:**
O projeto inclui um pipeline de CI/CD configurado com GitHub Actions para automação completa dos testes.

### **Workflow Configurado:**
```yaml
name: CI/CD Pipeline Desafio Accenture

on:  
  workflow_dispatch:  # Execução manual

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js environment
        uses: actions/setup-node@v4
        with:
          node-version: '22.x' 

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

### **Como Executar o Pipeline:**

#### **1. Execução Manual:**
1. Acesse o repositório no GitHub
2. Vá para a aba **Actions**
3. Selecione **CI/CD Pipeline Desafio Accenture**
4. Clique em **Run workflow**
5. Aguarde a execução completa

#### **2. Status do Pipeline:**
- ✅ **Checkout:** Código baixado com sucesso
- ✅ **Node.js Setup:** Ambiente configurado (Node 22.x)
- ✅ **Dependencies:** Dependências instaladas
- ✅ **Tests:** Testes executados automaticamente

### **Benefícios do CI/CD:**
- 🔄 **Automação completa** dos testes
- 📊 **Relatórios automáticos** de execução
- 🚀 **Deploy seguro** com validação
- 👥 **Colaboração em equipe** facilitada
- 📈 **Histórico de execuções** mantido

### **Próximos Passos para CI/CD:**
Para expandir o pipeline, você pode adicionar:

```yaml
# Execução em pull requests
on:
  pull_request:
    branches: [ main, develop ]
  push:
    branches: [ main ]

# Adicionar cache para otimização
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

# Upload de relatórios como artifacts
- name: Upload test results
  uses: actions/upload-artifact@v3
  if: always()
  with:
    name: cypress-results
    path: cypress/reports/
```

---

## 📊 Relatórios e Resultados

### **Relatórios HTML:**
- **Localização:** `cypress/reports/`
- **Formato:** HTML interativo
- **Conteúdo:**
  - Resumo de execução
  - Detalhes por cenário
  - Screenshots de falhas
  - Métricas de performance

### **Screenshots:**
- **Localização:** `cypress/screenshots/`
- **Captura automática** em caso de falha
- **Evidência visual** para debugging

### **Dados do Relatório:**
- **Projeto:** Desafio Accenture
- **QA:** Rafael Suzano
- **Data/Hora:** Timestamp da execução
- **Navegador:** Chrome (latest)
- **Plataforma:** macOS Ventura

### **Status do Pipeline:**
- **GitHub Actions:** [![CI/CD Pipeline](https://github.com/rafaelsuzano/DesafioAccenture/actions/workflows/main.yml/badge.svg)](https://github.com/rafaelsuzano/DesafioAccenture/actions/workflows/main.yml)
- **Última Execução:** Disponível na aba Actions do GitHub
- **Histórico:** Todas as execuções são mantidas
- **Artifacts:** Relatórios disponíveis para download

---

## 🔧 Configurações Especiais

### **Comandos Customizados:**
O projeto inclui comandos personalizados para APIs:

```javascript
// Criação de usuário
cy.createUser(username, password)

// Geração de token
cy.CreateToken(username, password)

// Autorização
cy.CreateAuthorized(username, password)

// Gerenciamento de livros
cy.GetBooks()
cy.PostBooks(token, userId, isbn1, isbn2)
```

### **Dados Dinâmicos:**
Utilização do Faker.js para geração de dados realistas:

```javascript
import { faker } from '@faker-js/faker';

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let email = faker.internet.email();
```

### **Configuração do Cypress:**
```javascript
module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {
      // Configuração do Cucumber
    }
  }
});
```

---

## 🎯 Funcionalidades Testadas

### **Interface (DemoQA):**
- ✅ **Web Tables:** CRUD completo de registros
- ✅ **List Sort:** Ordenação de dados
- ✅ **Forms:** Preenchimento de formulários
- ✅ **Progress Bars:** Monitoramento de progresso
- ✅ **Navigation:** Navegação entre páginas

### **API (BookStore):**
- ✅ **User Management:** Cadastro e autenticação
- ✅ **Token Generation:** Geração de tokens JWT
- ✅ **Authorization:** Validação de acesso
- ✅ **Book Management:** Listagem e aluguel de livros
- ✅ **Profile Management:** Consulta de perfil

---

## 🏆 Resultados e Métricas

### **Cobertura de Testes:**
- **Testes E2E:** 5 features implementadas
- **Testes de API:** 6 cenários de jornada completa
- **Comandos Customizados:** 5 comandos reutilizáveis

### **Qualidade:**
- **Metodologia BDD:** Cenários em linguagem natural
- **Dados Dinâmicos:** Geração automática com Faker.js
- **Relatórios Detalhados:** HTML interativo
- **Screenshots Automáticos:** Evidência visual

---

## 👨‍💻 Desenvolvedor

**Rafael Suzano** - QA Automation Engineer

- **LinkedIn:** [Perfil LinkedIn]
- **GitHub:** [Perfil GitHub]
- **Email:** [Email de contato]

---

## 📝 Licença

Este projeto foi desenvolvido para o Desafio Accenture e está sob licença ISC.

---

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### **Contribuindo com o Pipeline:**
- 🔄 **Testes automáticos** serão executados em cada PR
- ✅ **Validação** do código antes do merge
- 📊 **Relatórios** disponíveis para análise
- 🚀 **Deploy automático** após aprovação

### **Workflow de Desenvolvimento:**
```bash
# 1. Clone o repositório
git clone https://github.com/rafaelsuzano/DesafioAccenture.git

# 2. Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade

# 3. Execute os testes localmente
npm install
npx cypress run

# 4. Commit e push
git add .
git commit -m "Adiciona nova funcionalidade de teste"
git push origin feature/nova-funcionalidade

# 5. Abra um Pull Request no GitHub
# O pipeline será executado automaticamente!
```

---

*Projeto desenvolvido com ❤️ para demonstrar habilidades em automação de testes com Cypress e metodologia BDD.*
