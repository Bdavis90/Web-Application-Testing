import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Display = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const countStrikes = () => {
    setStrikes(strikes + 1);
    if (strikes > 2) {
      setStrikes(0);
    }
  };

  const countBalls = () => {
    setBalls(balls + 1);
    if (balls === 3) {
      setBalls(0);
    }
  };

  const recordHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  const recordFoulBall = () => {
    if (strikes > 2) {
      return strikes;
    } else if (strikes < 2) {
      return setStrikes(strikes + 1);
    }
  };

  return (
    <div className="display-container">
      <Dashboard
        countStrikes={countStrikes}
        countBalls={countBalls}
        recordHit={recordHit}
        recordFoulBall={recordFoulBall}
      />
      <div className="display">
        <div className="strikes">Strikes: {strikes}</div>
        <div className="balls">Balls: {balls}</div>
      </div>
    </div>
  );
};

export default Display;
