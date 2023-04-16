import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ loading, books, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Page 😪😪</p>;
  return (
    <div className="flex flex-wrap gap-2" data-cy="book-list">
      {books.map((book) => (
        <div
          className="flex flex-col p-3 rounded justify-between hover:shadow-md hover:border-blue-400 w-[300px] h-[150px] border "
          key={book.id}
          data-cy="book-item"
        >
          <h2 className="font-bold text-xl">{book.name}</h2>
          <p className="text-sm">{book.description}</p>
          <div>
            <button className="bg-black rounded text-white text-sm p-1.5">
              <a href={`/books/${book.id}`}>View Details</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
