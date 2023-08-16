import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import noteService from "./services/notes";
import noteReducer, { appendNote, setNotes } from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

// noteService.getAll().then((notes) => store.dispatch(setNotes(notes)));
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

console.log(store.getState());
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
