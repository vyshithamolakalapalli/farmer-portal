import React from "react";

function Profile() {
  return (
    <div style={{ padding: "80px", textAlign: "center" }}>
      <h2>Farmer Profile</h2>

      <div style={{
        margin: "auto",
        width: "300px",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9"
      }}>

        <p><strong>Name:</strong> Ramesh Kumar</p>
        <p><strong>Email:</strong> ramesh@gmail.com</p>
        <p><strong>Phone:</strong> 9876543210</p>
        <p><strong>Location:</strong> Andhra Pradesh</p>

      </div>
    </div>
  );
}

export default Profile;