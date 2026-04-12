import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  return (
     <div style={{ textAlign: "center" }}>

      <h2>Register Page</h2>

      <input type="text" placeholder="Name" /><br />
      <input type="email" placeholder="Email" /><br/>
      <input type="password" placeholder="Password" /><br/>

      <button className="register-btn" onClick={handleRegister}>
        Register
      </button>

    </div>
  );
}

export default Register;