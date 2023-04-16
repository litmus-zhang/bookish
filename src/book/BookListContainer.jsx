import BookList from "./BookList";
import { useRemoteService } from "../utils/hooks";
import React, { useEffect } from "react";

const BookListContainer = () => {
  let uri = "http://localhost:8080/books";
  const { data, loading, error } = useRemoteService(uri, []);
  const [searchTerm, setSearchTerm] = React.useState("");
  useEffect(() => {
    if (searchTerm) {
      uri = `http://localhost:8080/books?q=${searchTerm}`;
    } else {
      uri = "http://localhost:8080/books";
    }
  }, [searchTerm]);
  return (
    <div className="">
      <input
        type="text"
        value={searchTerm}
        data-cy="search-input"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookList books={data} loading={loading} error={error} />
    </div>
  );
};

export default BookListContainer;
