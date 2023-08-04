import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return (state = 0);
    default:
      return state;
  }
};
const store = createStore(counterReducer);
store.subscribe(() => {
  const storeNow = store.getState();
  console.log(storeNow);
});
function Calculator() {
  return (
    <div className="App">
      <h1>counter</h1>
      <div>{store.getState()}</div>
      <button onClick={(e) => store.dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </button>
      <button onClick={(e) => store.dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={(e) => store.dispatch({ type: "ZERO" })}>Zero</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<Calculator />);
};
renderApp();
store.subscribe(renderApp);
export default Calculator;
