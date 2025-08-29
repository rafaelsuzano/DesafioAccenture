const baseUrl = Cypress.config('baseUrl');
Cypress.Commands.add('createUser', (username, password) => {
  cy.api({
    method: 'POST',
    url: baseUrl+'Account/v1/User',
    failOnStatusCode: false,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      userName: username,
      password: password
    }
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add('CreateToken', (username, password) => {
  cy.api({
    method: 'POST',
    url: baseUrl+'Account/v1/GenerateToken',
    failOnStatusCode: false,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      userName: username,
      password: password
    }
  }).then((response) => {
    return response;
  });
});


Cypress.Commands.add('CreateAuthorized', (username, password) => {
  cy.api({
    method: 'POST',
    url: baseUrl+'Account/v1/Authorized',
    failOnStatusCode: false,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      userName: username,
      password: password
    }
  }).then((response) => {
    return response;
  });
})


Cypress.Commands.add('GetBooks', () => {
  cy.api({
    method: 'GET',
    url: baseUrl+'BookStore/v1/Books',
    failOnStatusCode: false,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
  }).then((response) => {
    return response;
  });
})


Cypress.Commands.add('PostBooks', (token, userId, isbn1,isbn2) => {
  cy.api({
    method: 'POST',
    url: baseUrl+'BookStore/v1/Books',
    failOnStatusCode: false,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: {
   
      "userId":userId,
       "collectionOfIsbns": [
    {
      "isbn": isbn1
    },
    {
      "isbn": isbn2
    }
  ]
    }
  }).then((response) => {
    return response;
  });
});





Cypress.Commands.add('GetUser', (token,idusuario) => {
  cy.api({
    method: 'GET',
    url: baseUrl+'Account/v1/User/'+idusuario,
    failOnStatusCode: false,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ token
    },
  
  }).then((response) => {
    return response;
  });
})
