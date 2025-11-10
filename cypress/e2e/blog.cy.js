describe('Blog', () => {
  it('renders blog list and post', () => {
    cy.visit('/blog');
    cy.wait(5000);
    cy.screenshot('blog-list');
    cy.contains('Blog').should('be.visible');
    cy.get('body').then(() => { cy.log(.text()); }); // Debug content
    cy.contains('First Post', { timeout: 10000 }).should('be.visible').click();
    cy.url().should('include', '/blog/first-post');
    cy.contains('First Post', { timeout: 10000 }).should('be.visible');
  });
});
