import BookListContainer from "./book/BookListContainer";
function App() {
  return (
      <div className="">
        <h2 className="text-2xl" data-cy="heading">
          Bookish
        </h2>
        <BookListContainer />
      </div>
  );
}

export default App;
