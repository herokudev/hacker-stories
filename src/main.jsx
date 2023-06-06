import React from "react";
import ReactDOM from "react-dom/client";
import AppTemplate from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {console.log("Main Component render")}
    <AppTemplate />
  </React.StrictMode>
);
