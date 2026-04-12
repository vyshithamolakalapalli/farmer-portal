import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Farmer Assistance Portal</h1>
          <p>Helping farmers with crop information and weather updates</p>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <div className="home-dashboard">

        <h2>Farmer Services</h2>

        <div className="dashboard-grid">

          <div className="dashboard-card" onClick={() => navigate("/weather")}>
            <h3>🌦 Weather</h3>
            <p>Check today's weather forecast.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/crops")}>
            <h3>🌾 Crop Info</h3>
            <p>Learn about crops suitable for farming.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/schemes")}>
            <h3>💰 Schemes</h3>
            <p>Government schemes for farmers.</p>
          </div>

          <div className="dashboard-card" onClick={() => navigate("/prices")}>
            <h3>📈 Market Prices</h3>
            <p>Latest crop market prices.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;