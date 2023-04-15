import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRemoteService } from "../utils/hooks";

export const BookDetail = ({ book }) => {
  return (
    <div data-cy="book-detail">
      <h2>{book.name}</h2>
      <p>{book.description}</p>
    </div>
  );
};
function BookDetailContainer() {
  const { id } = useParams();
  const { data } = useRemoteService(`http://localhost:8080/books/${id}`, {});
  return <BookDetail book={data} />;
}

export default BookDetailContainer;
