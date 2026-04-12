import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      navigate("/login");
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Admin Dashboard</h1>

      <div style={container}>

        <div style={card} onClick={() => navigate("/profile")}>
          👤 Users
        </div>

        <div style={card} onClick={() => navigate("/crops")}>
          🌾 Crops
        </div>

        <div style={card} onClick={() => navigate("/prices")}>
          💰 Market Prices
        </div>

        <div style={card} onClick={() => navigate("/reports")}>
          📊 Reports
        </div>

        <div style={card} onClick={() => navigate("/schemes")}>
          📋 Schemes
        </div>

        <div style={card} onClick={() => navigate("/weather")}>
          🌦 Weather
        </div>

      </div>
    </div>
  );
};

const container = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  marginTop: "30px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
};

export default AdminDashboard;