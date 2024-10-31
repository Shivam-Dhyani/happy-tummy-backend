// // models/TiffinSelection.js

// // Import mongoose
// const mongoose = require("mongoose");

// // Create a schema for the daily tiffin selection
// const TiffinSelectionSchema = new mongoose.Schema({
//   employeeId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Employee", // Reference to the Employee model
//     required: true,
//   },
//   tiffinType: {
//     type: String,
//     enum: ["half", "full", "only-veggie"], // Employee can choose half or full tiffin
//     required: true,
//   },
//   vegetableChoice: {
//     type: String, // Chosen vegetable
//     required: true,
//   },
//   date: {
//     type: Date, // Chosen date
//     required: true,
//   },
// });

// // Export the model
// module.exports = mongoose.model("TiffinSelection", TiffinSelectionSchema);

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
  date: {
    type: Date,
    required: true,
  },
});

// Export the model
module.exports = mongoose.model("TiffinSelection", TiffinSelectionSchema);
