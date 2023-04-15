describe('Bookish application', () => {
  it('visit the bookish app', () => {
    cy.visit('/')
    cy.get('[data-cy="heading"]').contains('Bookish')
  })
})