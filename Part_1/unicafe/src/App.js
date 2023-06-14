import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  return (
    <div>
      {props.props.all === 0 ? (
        <p>No statistics</p>
      ) : (
        <>
          <h2>statistics</h2>
          <StatisticLine text="good" value={props.props.good} />
          <StatisticLine text="neutral" value={props.props.neutral} />
          <StatisticLine text="bad" value={props.props.bad} />
          <StatisticLine text="all" value={props.props.all} />
          <StatisticLine text="average" value={props.props.averageTotal} />
          <StatisticLine text="positive" value={props.props.positive} />
        </>
      )}
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
  const all = good + neutral + bad;
  const average1 = good - bad;
  const averageTotal = average1 / all;

  const positive = percentage(good, all);
  const props = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average1: average1,
    averageTotal: averageTotal,
    positive: positive,
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text=" bad" />
      <Statistics props={props} />
    </div>
  );
};

export default App;
