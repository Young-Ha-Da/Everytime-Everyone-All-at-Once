import { tasks } from '@/components';

describe('User Authenticate', () => {
  beforeEach(() => {
    cy.intercept('GET', '/tasks', {
      statusCode: 201,
      body: tasks,
    });
  });

  it('user can authenticate using the login form', () => {
    const email = '이때어때@test.com';
    const password = 'k12h1k0$5;lpa@Afn';

    cy.visit('/');

    // Fill out the form
    cy.get('input[name=id]').type(email);
    cy.get('input[name=password]').type(`${password}`);

    // Click the sign-in button
    cy.get('button[type=submit]').click();

    // UI should display the user's task list
    cy.get('[title="tasks"] button').should('have.length', 6);
  });
});
