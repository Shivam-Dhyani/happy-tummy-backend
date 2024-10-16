// config/db.js

// Import required libraries
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

// Connect to MongoDB
const connectDB = async () => {
  try {
    // Use Mongoose to connect to the database using the URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
