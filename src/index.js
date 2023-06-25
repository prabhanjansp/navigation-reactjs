import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  HashRouter,
  unstable_HistoryRouter,
  MemoryRouter,
  StaticRouter,
} from "react-router-dom";
// "react-router-dom/server";
//actually browser router is react context

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
    {/* <MemoryRouter>
      <App />
    </MemoryRouter> */}
    {/* <StaticRouter location="/">
          <App />
    </StaticRouter> */}
    {/* render home page */}
  </React.StrictMode>
);
// history navigation is unstable
// Memory router it actually stores everything related to where you have been in history inside  memory
//static router helps you to find the exact router pages ,it helps for testing purpose
