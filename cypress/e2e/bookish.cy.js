/// <reference types="cypress" />

import axios from 'axios'
describe('Bookish application', () => {
  before(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err)
  })
  afterEach(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err)
  })
  beforeEach(() => {
    const books = [
      { "name": "Refactoring", "id": 1 },
      { "name": "Domain Driven Design", "id": 2 },
      { "name": "Building Microservices", "id": 3 }
    ]
    return books.map(book =>
      axios.post('http://localhost:8080/books', book,
        { headers: { 'Content-Type': 'application/json' } }
      )
    )
  })
  it('visit the bookish app', () => {
    cy.visit('/')
    cy.get('[data-cy="heading"]').contains('Bookish')
  })
  it("shows a book list", () => {
    cy.visit('/')
    cy.get('[data-cy="book-list"]').should('exist')
    cy.get('[data-cy="book-item"]').should('have.length', 3);
    cy.get('[data-cy="book-item"]').contains('Refactoring')
  })
  it("Goes to the detail page", () => {
    cy.visit('/')
    cy.get('[data-cy="book-item"]').contains("View Details").click();
    cy.url().should('include', '/books/3')
    cy.get('[data-cy="book-detail"]').contains('Building Microservices')
  })
})