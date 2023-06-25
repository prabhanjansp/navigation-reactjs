import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Hello Extra Boy</h1>}></Route>
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nesting Routes */}
        <Route path="/books" element={<BookLayout />}>
          {/* wrapped  */}
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/books" element={<BookList />} /> */}
        {/* <Route path="/books/:id" element={<Book />} /> */}
        {/*/:id will be in the express js its not in the url its completely hardcoded specifying the exact id the http://localhost:3000/books/1  */}
        {/* <Route path="/books/new" element={<NewBook />} /> */}
        {/* v6 of thew router magic to identify the what page we are looking for now 
        earlier it used to follow the top-down approach now its not*/}
        {/* when you hit the wrong url 404  cause */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route /> */}
      </Routes>
    </>
  );
}

export default App;
//path is url to find the locations
//then we need to find the component for that component
//element need to pass any type of thew jsx
//whatever the jsx that will be rendered in the screen
// *it will match anything apart from the exact paths
// 3 routes that all were going to share the same layout but they didn't have the same path, path was different for all of them in that case  we can use the concept  leave the path section rest all are the same<Route element={<BookLayout />}>
// means this route dose not any parent path but its going to wrap all the children inside this element
