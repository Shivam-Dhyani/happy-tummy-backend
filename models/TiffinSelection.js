// Import mongoose
const mongoose = require("mongoose");

// Create a schema for the daily tiffin selection
const TiffinSelectionSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee", // Store the employee ID from the Employee model
    required: true,
  },
  tiffinType: {
    type: String,
    enum: ["half", "full", "only-veggie"], // Employee can choose half, only-veggie or full tiffin
    required: true,
  },
  vegetableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vegetable", // Store the vegetable ID from the Vegetable model
    required: true,
  },
  availableVegetablesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AvailableVegetables", // Reference to AvailableVegetables model
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("TiffinSelection", TiffinSelectionSchema);
