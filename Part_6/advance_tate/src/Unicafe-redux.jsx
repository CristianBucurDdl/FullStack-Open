import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";

const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOOD":
      return { ...state, good: state.good + 1 };
    case "OK":
      return { ...state, ok: state.ok + 1 };
    case "BAD":
      return { ...state, bad: state.bad + 1 };
    case "ZERO":
      return initialState;

    default:
      return state;
  }
};
const store = createStore(createReducer);
const Unicafe = () => {
  const [inital, setInital] = useState(0);

  const callFunct = (dispatch) => {
    store.dispatch({ type: dispatch });
    setInital(inital + 1);
  };
  return (
    <div>
      <h1>Unicafe</h1>
      <button onClick={(e) => callFunct("GOOD")}>good</button>
      <button onClick={(e) => callFunct("OK")}>OK</button>
      <button onClick={(e) => callFunct("BAD")}>Bad</button>
      <button onClick={(e) => callFunct("ZERO")}>Reset Stats</button>
      <li>{store.getState().good}</li>
      <li>{store.getState().ok}</li>
      <li>{store.getState().bad}</li>
    </div>
  );
};

// const renderApp = () => {
//   root.render(<Unicafe />);
// };
// // renderApp();
// store.subscribe(renderApp);
export default Unicafe;
