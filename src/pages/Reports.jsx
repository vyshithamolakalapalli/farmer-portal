import React from "react";

function Reports() {
  return (
    <div style={{ padding: "80px", textAlign: "center" }}>
      <h2>Farmer Reports</h2>

      <div style={{
        margin: "auto",
        width: "400px",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9"
      }}>

        <p><strong>Crop Yield Report:</strong> Rice production increased by 10% this season.</p>
        <p><strong>Weather Impact:</strong> Moderate rainfall expected this month.</p>
        <p><strong>Market Trend:</strong> Wheat prices expected to rise next week.</p>

      </div>
    </div>
  );
}

export default Reports;