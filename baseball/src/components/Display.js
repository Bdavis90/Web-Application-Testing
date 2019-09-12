import React, { useState } from "react";

const Display = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const countStrikes = strike => {
    setStrikes((strike += 1));
    if (strike > 2) {
      setStrikes(0);
    }
  };

  const countBalls = ball => {
    setBalls((ball += 1));
    if (ball > 3) {
      setBalls(0);
    }
  };

  return (
    <div className="display-container">
      <button onClick={() => countStrikes(strikes)}>strike</button>
      <button onClick={() => countBalls(balls)}>ball</button>
      <div className="strikes">{strikes}</div>
      <div className="strikes">{balls}</div>
    </div>
  );
};

export default Display;
