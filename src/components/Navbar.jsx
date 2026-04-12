import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h3>Farmer Portal</h3>

      <div>
        <Link to="/">Home</Link>

        {!token && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {token && (
          <>
            <button onClick={() => navigate("/dashboard")}>User Dashboard</button>
            {role === "admin" && (
              <button onClick={() => navigate("/admin")}>Admin Dashboard</button>
            )}
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;