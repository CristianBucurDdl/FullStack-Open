import { useState } from "react";

const Display = ({ left, right }) => (
  <div>
    {left}LeftClick, {right}RightClick
  </div>
);
const DisplayTotal = ({ total }) => <div>{total}</div>;
const Button = ({ handleClick, name }) => (
  <button onClick={handleClick}>{name}</button>
);
const History = (props) => {
  return props.allClicks.length === 0 ? (
    <div>the app is used by pressing the buttons</div>
  ) : (
    <div>button press history: {props.allClicks.join(" ")}</div>
  );
};
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  const setLeftClick = () => {
    const updateLeft = left + 1;
    setLeft(updateLeft);
    setAllClicks(allClicks.concat("L"));

    setTotal(updateLeft + right);
  };
  const setRightClick = () => {
    setRight(right + 1);
    setAllClicks(allClicks.concat("R"));

    setTotal(left + right);
  };

  const setFunc = (newValue) => () => {
    console.log(newValue);
    setValue(newValue);
  };

  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={setFunc(1000)}>1000 {value}</button>
      <button onClick={setFunc(0)}>0 {value}</button>
      <button onClick={setFunc(value + 1)}>+1 {value}</button>
      <p>{value}</p>
      <Button handleClick={setLeftClick} name={"leftClick"} />
      <Button handleClick={setRightClick} name={"RightClick"} />
      <button
        onClick={() => {
          setLeft(0);
          setRight(0);
        }}
      >
        reset
      </button>

      <Display left={left} right={right} />
      {total}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
