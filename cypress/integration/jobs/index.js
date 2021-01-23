const url = 'http://127.0.0.1:8080/?page=vagas';

describe('Test Jobs page', () => {
    beforeEach(() => {
        cy.visit(url);
    });


    it('testa se menu funciona', () => {
        cy.get('a[href="?page=login"]').should('have.text', 'Sair');
        cy.get('a[href="?page=vagas"]').should('have.text', 'Minhas Vagas');
        cy.get('a[href="?page=vagas"]').click();
    });

    it('testa se está na pagina correta e se a tabela funciona', () => {
        cy.get('h1').should('have.text', 'Minhas Vagas');

        cy.get('table[class="table table-hover table-striped"]');

        cy.get('th').contains('Titulo');
        cy.get('th').contains('Status');
        cy.get('th').contains('Perfis interessados');
        cy.get('th').contains('Data');
        cy.get('th').contains('Ações');

        cy.get('a[class="btn btn-light"]').contains('Detalhes');
        cy.get('button[class="btn btn-warning"]').contains( 'Editar');
        cy.get('button[class="btn btn-danger"]').contains('Excluir');

        cy.get('#job-details-0').click();

        cy.contains('Detalhes da Vaga');
    });


})