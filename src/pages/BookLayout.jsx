import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 5 });
  console.log(searchParams.get("n"));
  const number = searchParams.get("n");
  // const [number, setNumber] = useState("4");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book{number}</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      {/* <Outlet /> */}
      <Outlet context={{ hello: "world" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
      {/* render the current page on the screen
       */}
      <br />
    </>
  );
};

export default BookLayout;
// concept of navigation on every single page
// outlet can take one single args that is context its as same as context hooks you can define some values that you pass down to any single component that is inside of this layout route
// search parameter
// useSearchParamQuery
