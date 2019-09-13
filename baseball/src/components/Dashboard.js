import React from "react";
import Display from "./Display";

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <div className="button-container">
        <button onClick={() => props.countStrikes()}>Strike</button>
        <button onClick={() => props.countBalls()}>Balls</button>
        <button onClick={() => props.recordFoulBall()}>Foul</button>
        <button onClick={() => props.recordHit()}>Hit</button>
      </div>
      {/* <button>Ball</button>
      <button>Foul</button>
      <button>Hit</button> */}
    </div>
  );
};

export default Dashboard;
