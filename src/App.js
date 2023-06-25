import React from "react";
import {
  Route,
  Routes,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";
import BookRoutes from "./pages/BookRoutes";
import "./pages/style.css";
// import Home from "./pages/Home";

function App() {
  const location = useLocation();
  console.log(location);
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       { path: "about", element: <About /> },
  //       { path: "contact", element: <Contact /> },
  //     ],
  //   },
  // ]);
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Hello Extra Boy</h1>}></Route>
      </Routes>
      <nav>
        <ul>
          <li>
            {/* <Link to="/" replace reloadDocument>
              Home
            </Link> */}
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive ? { color: "brown" } : {};
              }}
            >
              {({ isActive }) => {
                return isActive ? "Absolutely Active" : "Ghar";
              }}
            </NavLink>
          </li>
          <li>
            {/* <Link to="/books">Books</Link> */}
            <NavLink to="/books" state="HI">
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      {/* {elements} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nesting Routes */}
        <Route path="/books/*" element={<BookRoutes />} />
        {/* wrapped  */}
        {/* <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} /> */}
        {/* </Route> */}
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
// when we have multiple routes we can able to hard code a location that particular route is always going to use that location
// helps to show specific content on the specific page
// link replace it starts where you began when you click back
// reload document its going to reload the entire page oce again
// state here you can able to pass the data along with link navigation and its not going to show in the url bar  helps in  the state management
// NavLink similar to the basic link in the Router it allows you to do special things essentials  things like is active state
// NavLink has 3 properties class name Style and the children

// By default nav link has active state and its boolean value is true
// end is to put full stop for the parent and child
// state navigation
// const location = useLocation();
//   console.log(location);
// in conslore it has
// 1)Hash=# testing pahes
// 2) Key unique value if possible we can use it as cash
// 3) PathName=the current location
// 4) search related to search query
// 5)state
