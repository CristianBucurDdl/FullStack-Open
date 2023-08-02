import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Notes from "./Notes";
import Unicafe from "./Unicafe-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Notes />
    <Unicafe />
  </React.StrictMode>
);
