// server.js

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables from .env
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());
app.use(cors());

// API routes
app.use("/api/employees", require("./routes/employeeRoutes")); // Employee routes
app.use("/api/tiffin", require("./routes/tiffinRoutes")); // Tiffin routes
app.use("/api/vegetables", require("./routes/vegetableRoutes"));

// Define the home route
app.get("/", (req, res) => {
  res.send("Tiffin Management API is running");
});

// Start the server and listen on the defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
