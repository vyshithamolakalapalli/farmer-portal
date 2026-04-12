// Weather.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=e583f7a1c24828ed0556a6c549e72b00&units=metric")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      <h2>🌦 Weather Updates</h2>

      {data && (
        <div style={styles.card}>
          <h3>{data.name}</h3>
          <h1>{data.main.temp}°C</h1>
          <p>{data.weather[0].main}</p>
          <p>💧 {data.main.humidity}% Humidity</p>
          <p>🌬 {data.wind.speed} m/s Wind</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "80px" },
  card: {
    background: "linear-gradient(135deg,#6dd5fa,#2980b9)",
    color: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "250px",
    margin: "auto",
  }
};

export default Weather;