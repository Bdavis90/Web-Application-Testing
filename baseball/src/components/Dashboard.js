import React from "react";
import Display from "./Display";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Display />
      <button>Strike</button>
      <button>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </div>
  );
};

export default Dashboard;
