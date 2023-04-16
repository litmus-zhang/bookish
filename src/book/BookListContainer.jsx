import BookList from "./BookList";
import { useRemoteService } from "../utils/hooks";

const BookListContainer = () => {
  let uri = "http://localhost:8080/books";
  const { data, loading, error } = useRemoteService(uri, []);
  return <BookList books={data} loading={loading} error={error} />;
};

export default BookListContainer;
