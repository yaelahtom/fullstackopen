/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './App.module.css'

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
</tr>
);

const Statistics = ({ goodValue, badValue, neutralValue, allValue, average, positivePercentage }) => (
  <table className={styles.statistics}>
    <thead>
      <tr>
        <th>Indicator</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <StatisticsLine text="good" value={goodValue} />
      <StatisticsLine text="bad" value={badValue} />
      <StatisticsLine text="neutral" value={neutralValue} />
      <StatisticsLine text="all" value={allValue} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positivePercentage + "%"} />
    </tbody>
  </table>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const allValue = good + bad + neutral;
  const average = allValue > 0 ? (good / allValue).toFixed(1) : 0;

  // calculate positive feedback percentage (avoid NaN for zero allValue)
  const positivePercentage = allValue > 0 ? ((good / allValue) * 100).toFixed(1) : 0;

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={handleGoodClick} />
      <Button text="Neutral" onClick={handleNeutralClick} />
      <Button text="Bad" onClick={handleBadClick} />
      <h1>Statistics</h1>
      <Statistics
        goodValue={good}
        badValue={bad}
        neutralValue={neutral}
        allValue={allValue}
        average={average}
        positivePercentage={positivePercentage}
      />
    </>
  );
};

export default App;
