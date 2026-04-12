import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
   <div className="dashboard">
  <div className="cards"></div>
      <h1>User Dashboard</h1>

      <div style={{ marginTop: "30px" }}>
        <Link to="/weather">🌦 Weather</Link> |{" "}
        <Link to="/crops">🌾 Crops</Link> |{" "}
        <Link to="/schemes">📋 Schemes</Link> |{" "}
        <Link to="/prices">💰 Prices</Link>
      </div>
    </div>
  );
};

export default Dashboard;