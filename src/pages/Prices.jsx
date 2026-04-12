import React from "react";

function Prices() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Market Prices</h2>

      <table border="1" style={{ margin: "auto" }}>
        <tr><th>Crop</th><th>Price</th></tr>
        <tr><td>Rice</td><td>2200</td></tr>
        <tr><td>Wheat</td><td>2100</td></tr>
      </table>
    </div>
  );
}

export default Prices;