import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;
const Button = ({ handleClick, name }) => (
  <button onClick={handleClick}>{name}</button>
);

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const resetState = () => setCounter(0);
  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} name={"plus"} />
      <Button handleClick={decreaseByOne} name={"minus"} />
      <Button handleClick={resetState} name={"reset"} />
    </div>
  );
};

export default App;
