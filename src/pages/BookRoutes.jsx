import React from "react";
import BookLayout from "./BookLayout";
import { Route, Routes } from "react-router-dom";
import Book from "./Book";
import BookList from "./BookList";
import NewBook from "./NewBook";

const BookRoutes = () => {
  return (
    <>
      <BookLayout />
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
