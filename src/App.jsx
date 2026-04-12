import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Weather from "./pages/Weather";
import Crops from "./pages/Crops";
import Schemes from "./pages/Schemes";
import Prices from "./pages/Prices";

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
  

          <Route path="/weather" element={<Weather />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;