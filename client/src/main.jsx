import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./components/autenticacion/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>
);

