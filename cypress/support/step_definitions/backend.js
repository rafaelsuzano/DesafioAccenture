
import { faker } from '@faker-js/faker';

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let firstName, lastName, login, Token, LivroReserva, idusuario
let listaLivros = []

Given('eu acesso a api para cadastro de Usuário', () => {
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    login = firstName + lastName
});

When('eu preencho todos os campos obrigatórios', () => {

    cy.createUser(login, 'Suz@no30').as('apiResponseCreateUser');
    cy.get('@apiResponseCreateUser').then((response) => {

        cy.log('Corpo da Resposta:', JSON.stringify(response.body));
        idusuario = (response.body['userID'])
    });
});

Then('eu devo ver uma mensagem de sucesso', () => {
    cy.get('@apiResponseCreateUser').then((response) => {

        expect(response.status).to.eq(201);

    });
});



Given('eu acesso a api para gerar token', () => {
    cy.log('Usuário:' + login)
});

When('eu preencho  os dados do usuario', () => {

    cy.CreateToken(login, 'Suz@no30').as('apiResponseCreateToken');
    cy.get('@apiResponseCreateToken').then((response) => {


        cy.log('Corpo da Resposta:', JSON.stringify(response.body));
    });
});

Then('eu deve receber um token', () => {
    cy.get('@apiResponseCreateToken').then((response) => {

        expect(response.status).to.eq(200);
        cy.log('Token', JSON.stringify(response.body['token']));
        Token = (response.body['token'])

    });
});




Given('eu acesso a api para confirmar a autorizacao', () => {
    cy.log('Usuário:' + login)
});

When('eu preencho  os dados do login', () => {

    cy.CreateAuthorized(login, 'Suz@no30').as('apiResponseAuthorized');
    cy.get('@apiResponseAuthorized').then((response) => {

        cy.log('Corpo da Resposta:' + JSON.stringify(response.body));

    });
});

Then('eu deve receber a autorizacao', () => {
    cy.get('@apiResponseAuthorized').then((response) => {

        expect(response.status).to.eq(200);
        cy.log('Acesso', JSON.stringify(response.body));

        expect(JSON.stringify(response.body)).to.eq('true');


    });
});





Given('eu acesso a API de livros publica', () => {

});

When('eu solicito a lista de todos os livros', () => {

    cy.GetBooks().as('apiResponseGetBooks');
    cy.get('@apiResponseGetBooks').then((response) => {

        cy.log('Corpo da Resposta:' + JSON.stringify(response.body));

    });
});

Then('eu devo receber uma lista de livros', () => {
    cy.get('@apiResponseGetBooks').then((response) => {


        cy.log('Livros' + JSON.stringify(response.body));
        const books = response.body.books;

        books.forEach((book) => {
            cy.log(`ISBN do livro: ${book.isbn}`);
            listaLivros.push(book.isbn)

        })

        expect(response.status).to.eq(200);

    });


});



Given('que eu sou um usuário autenticado para alugar livros', () => {
    cy.log('Token:' + Token)
    cy.log('Usuario:' + login)
    cy.log('ID Usuário:' + idusuario)



});

When('eu solicito a adição de dois livros ao meu perfil', () => {

    cy.PostBooks(Token, idusuario, listaLivros[0], listaLivros[1]).as('apiResponseAlugarBooks');
    cy.get('@apiResponseAlugarBooks').then((response) => {

        cy.log('Corpo da Resposta:' + JSON.stringify(response.body));

    });
});

Then('a requisição de alugar deve ser bem-sucedida', () => {
    cy.get('@apiResponseAlugarBooks').then((response) => {

        expect(response.status).to.eq(201);

    });


});






Given('que eu sou um usuário autenticado', () => {

});

When('eu consulto a lista de livros do meu perfil', () => {

    cy.GetUser(Token,idusuario).as('apiResponseGetBooksUser');
    cy.get('@apiResponseGetBooksUser').then((response) => {
      cy.log('Corpo da Resposta:' + JSON.stringify(response.body));
        expect(response.status).to.eq(200);
   

    });
});

Then('os livros que eu adicionei devem ser listados', () => {
    cy.get('@apiResponseGetBooksUser').then((response) => {
        const livros = response.body.books;
        const numeroDeLivros = livros.length;
   
        expect(numeroDeLivros).to.eq(2)

    });


});

