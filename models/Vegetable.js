// Import mongoose
const mongoose = require("mongoose");

// Create a schema for the available vegetables
const VegetableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true, // Store which date these vegetables are available
  },
});

// Export the Vegetable model
module.exports = mongoose.model("Vegetable", VegetableSchema);
