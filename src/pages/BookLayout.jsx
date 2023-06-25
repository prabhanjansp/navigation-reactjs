import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      {/* <Outlet /> */}
      <Outlet context={{ hello: "world" }} />
      {/* render the current page on the screen
       */}
      <br />
    </>
  );
};

export default BookLayout;
// concept of navigation on every single page
// outlet can take one single args that is context its as same as context hooks you can define some values that you pass down to any single component that is inside of this layout route
