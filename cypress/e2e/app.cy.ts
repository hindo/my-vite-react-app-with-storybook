describe('template spec', () => {
  it('passes', async () => {
    cy.visit('/')

    cy.contains('INC').click()
    cy.get('.count').should('have.text', '1')

    cy.contains('DEC').click()
    cy.get('.count').should('have.text', '0')
  })
})
