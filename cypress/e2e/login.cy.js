describe('Login', () => {
  it('logs in and redirects to dashboard', () => {
    cy.intercept('POST', '**/api/auth/local', {
      statusCode: 200,
      body: { jwt: 'fake-jwt', user: { id: 1, username: 'test' } },
    }).as('login');
    cy.intercept('POST', '**').as('anyPost'); // Debug
    cy.visit('/login');
    cy.wait(5000);
    cy.screenshot('login-page');
    cy.get('input[type="email"]').type('test@ixome.ai');
    cy.get('input[type="password"]').type('Test212!');
    cy.contains('button', 'Login').should('not.be.disabled').click();
    cy.wait('@login', { timeout: 15000 }).then((interception) => { cy.log('Intercepted URL: ' + interception.request.url); });
    cy.url().should('include', '/dashboard', { timeout: 15000 });
  });
});
