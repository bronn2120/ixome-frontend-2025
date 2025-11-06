describe('Login', () => {
  it('logs in and redirects to dashboard', () => {
    cy.visit('/login')
    cy.wait(3000) // Wait for render
    cy.get('body').should('be.visible')
    cy.get('form').should('be.visible') // General form
    cy.get('input[type="email"]').should('be.visible').type('test@ixome.ai')
    cy.get('input[type="password"]').should('be.visible').type('Test212!')
    cy.get('button[type="submit"]').should('be.visible').click()
    cy.url().should('include', '/dashboard')
  })
})
