const url = 'http://127.0.0.1:8080/';

describe('Test Login', () => {
    beforeEach(() => {
        cy.visit(url);
    });

    it('contains "title"', () => {
        cy.title().should('contain', 'Titulo da Página');
    });

    it('contains "Identifique-se"', () => {
        cy.contains('Identifique-se');
    });

    it('testa se consegue logar', () => {
       cy.get('#email[type="email"]');
       cy.get('#password[type="password"]');

       cy.get('#confirm').should('have.text', 'ENTRAR');

       cy.get('#email').type('usuario@email.com');
       cy.get('#password').type('12345678');

       cy.get('#confirm').click();

       cy.contains('Dashboard');
    });

})