import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ListApp from "./componenet/ListApp";
import FilterListApp from "./componenet/FilterListApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    {/* <ListApp /> */} <FilterListApp />
  </React.StrictMode>
);
