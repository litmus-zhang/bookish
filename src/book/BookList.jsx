import React from "react";

const BookList = ({ loading, books, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Page 😪😪</p>;
  return (
    <div data-cy="book-list">
      {books.map((book) => (
        <div key={book.id} data-cy="book-item">
          <h2>{book.name}</h2>
          <a href={`/books/${book.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default BookList;
