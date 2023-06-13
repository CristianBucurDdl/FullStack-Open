import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average{props.averageTotal}</p>
      <p>positive {props.positive}</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );
  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }
  const porps = {
    all: good + neutral + bad,
    average1: good - bad,
    averageTotal: average1 / all,

    positive: percentage(good, all),
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text=" bad" />
      <Statistics props={porps} />
    </div>
  );
};

export default App;
