describe('Login', () => {
  it('logs in and redirects to dashboard', () => {
    cy.visit('/login');
    cy.wait(5000);  // Increase for stable load
    cy.screenshot('login-page');  // Debug
    cy.get('.login-form').should('be.visible');
    cy.get('input[type="email"]').type('test@ixome.ai');
    cy.get('input[type="password"]').type('Test212!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
