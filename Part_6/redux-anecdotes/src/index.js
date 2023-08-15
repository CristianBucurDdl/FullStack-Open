import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import initialReducer from "./reducers/anecdoteReducer";
import filterReducer, { useFilter } from "./reducers/filterReducer";
import { store } from "./reducers/store";

// const reducer = combineReducers({
//   filter: filterReducer,
//   anecdotes: initialReducer,
// });
// const store = createStore(reducer);

// store.dispatch(useFilter("first"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    <App />{" "}
  </Provider>
);
