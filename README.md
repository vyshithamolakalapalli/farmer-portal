🌾 Farmer Portal - Full Stack Web Application

📌 Project Overview

Farmer Portal is a full-stack web application developed to provide secure user authentication and crop management functionality.
The system allows users to register, log in, and manage crop details efficiently with secure protected routes.

---

🚀 Features

- User Registration and Login
- JWT-Based Authentication
- Password Hashing using bcrypt
- Role-Based Access Control (Admin/User)
- CRUD Operations for Crop Management
- Protected API Routes
- Environment Variable Usage
- MongoDB Database Integration

---

🛠️ Technologies Used

Frontend

- React.js
- HTML
- CSS
- JavaScript

Backend

- Node.js
- Express.js

Database

- MongoDB

Security

- JWT Authentication
- bcrypt Password Hashing

---

📂 Project Structure

farmer-portal/
│
├── backend/
│   ├── server.js
│   └── .env
│
├── public/
│
├── src/
│
├── package.json
│
└── README.md

---

⚙️ Installation & Setup

Install Dependencies

npm install

Run Backend Server

node backend/server.js

Run Frontend

npm start

---

🔗 API Endpoints

Authentication

- POST /register → Register New User
- POST /login → Login User

Crop Management

- POST /api/crops → Add New Crop
- GET /api/crops → Get All Crops
- PUT /api/crops/:id → Update Crop
- DELETE /api/crops/:id → Delete Crop

---

🔐 Security Features

- JWT Token Authentication
- Password Encryption using bcrypt
- Protected Routes using Middleware
- Role-Based Authorization for Admin/User

---

🌍 Environment Variables

Create a ".env" file inside backend folder:

PORT=5000
JWT_SECRET=your_secret_key

---

👨‍💻 Author

Developed by Vyshitha

---

📜 License

This project is developed for educational purposes.