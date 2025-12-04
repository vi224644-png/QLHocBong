require("dotenv").config();        // Load biến môi trường từ .env

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware đọc JSON
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// Route test
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
