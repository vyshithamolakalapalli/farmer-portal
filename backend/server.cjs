require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

/* 🔧 MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* 🔗 DATABASE */
/* 🔗 DATABASE */

/* 🔗 DATABASE */

const URI = "mongodb://127.0.0.1:27017/farmerDB";

console.log("Connecting to LOCAL DB...");

mongoose.connect(URI)
  .then(() => {
    console.log("Database connected ✅");
  })
  .catch((err) => {
    console.log("❌ DB ERROR:", err.message);
  });

// optional debug
mongoose.connection.on("connected", () => {
  console.log("🔥 Mongoose connected successfully");
});

/* ================= MODELS ================= */

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "user" }
});

const Crop = mongoose.model("Crop", {
  name: String,
  price: Number
});

/* ================= AUTH ================= */

/* 🔐 VERIFY TOKEN (FIXED) */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ message: "No token ❌" });
  }

  // Expect: Bearer token
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Token missing ❌" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token ❌" });
  }
};

/* 🔐 VERIFY ADMIN */
const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only ❌" });
  }
  next();
};

/* ================= TEST ================= */

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

/* ================= USER ================= */

/* 🟢 REGISTER */
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user"
    });

    await user.save();

    res.json({ message: "User registered ✅" });
  } catch {
    res.status(500).json({ message: "Register error ❌" });
  }
});

/* 🟢 LOGIN */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password ❌" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({ token, role: user.role });
  } catch {
    res.status(500).json({ message: "Login error ❌" });
  }
});

/* ================= ADMIN ================= */

app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/* ================= CROPS ================= */

/* 🟢 CREATE */
app.post("/api/crops", verifyToken, async (req, res) => {
  const crop = new Crop(req.body);
  await crop.save();
  res.json({ message: "Crop added ✅", crop });
});

/* 🟢 READ */
app.get("/api/crops", verifyToken, async (req, res) => {
  const crops = await Crop.find();
  res.json(crops);
});

/* 🟢 UPDATE */
app.put("/api/crops/:id", verifyToken, async (req, res) => {
  const crop = await Crop.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Updated ✅", crop });
});

/* 🟢 DELETE */
app.delete("/api/crops/:id", verifyToken, async (req, res) => {
  await Crop.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});

/* ================= START ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});