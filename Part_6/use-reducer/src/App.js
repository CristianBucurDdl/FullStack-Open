import { useReducer } from "react";

function App() {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + 1;
      case "DEC":
        return state - 1;
      case "ZERO":
        return 0;
      default:
        return state;
    }
  };
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={() => counterDispatch({ type: "INC" })}>+</button>
        <button onClick={() => counterDispatch({ type: "DEC" })}>-</button>
        <button onClick={() => counterDispatch({ type: "ZERO" })}>0</button>
      </div>
    </>
  );
}

export default App;
