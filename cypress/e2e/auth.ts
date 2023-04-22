// import { tasks } from '@/components';

const tasks = {
  tasks: [
    { id: '1', state: 'TASK_INBOX', title: 'Build a date picker' },
    { id: '2', state: 'TASK_INBOX', title: 'QA dropdown' },
    {
      id: '3',
      state: 'TASK_INBOX',
      title: 'Write a schema for account avatar component',
    },
    { id: '4', state: 'TASK_INBOX', title: 'Export logo' },
    { id: '5', state: 'TASK_INBOX', title: 'Fix bug in input error state' },
    { id: '6', state: 'TASK_INBOX', title: 'Draft monthly blog to customers' },
  ],
};

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
