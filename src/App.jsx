import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import BookDetailContainer from "./book/BookDetail";
function App() {
  return (
    <div className="">
      <Typography variant="h2" component="h2" data-cy="heading">
        Bookish
      </Typography>
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
