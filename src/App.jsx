import { Typography } from "@mui/material";
import BookListContainer from "./book/BookListContainer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
      <div className="">
        <Typography variant="h2" component="h2" data-cy="heading">
          Bookish
        </Typography>
        <BookListContainer />
      </div>
  );
}

export default App;
