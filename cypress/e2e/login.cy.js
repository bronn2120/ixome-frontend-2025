describe('Login', () => {
  it('logs in and redirects to dashboard', () => {
    cy.visit('/login')
    cy.wait(10000) // Increase for render
    cy.screenshot('login-page') # Debug
    cy.get('body').should('be.visible')
    cy.get('.login-form').should('be.visible')
    cy.get('#email-input').should('be.visible').type('test@ixome.ai')
    cy.get('#password-input').should('be.visible').type('Test212!')
    cy.get('#submit-btn').should('contain', 'Login').click()
    cy.url().should('include', '/dashboard')
  })
})
