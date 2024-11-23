// // Import mongoose
// const mongoose = require("mongoose");

// // Create a schema for the available vegetables
// const VegetableSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true, // Store which date these vegetables are available
//   },
// });

// // Export the Vegetable model
// module.exports = mongoose.model("Vegetable", VegetableSchema);

const mongoose = require("mongoose");

// Create a schema for individual vegetables
const VegetableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create a schema for the available vegetables on a specific date
const AvailableVegetablesSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true, // Ensure each date has only one document
  },
  vegetables: {
    type: [VegetableSchema], // Array of vegetable objects
    validate: {
      validator: function (v) {
        // Ensure the array has at least one object
        return v && v.length > 0;
      },
      message: "At least one vegetable is required.",
    },
  },
});

// Export the model
module.exports = mongoose.model(
  "AvailableVegetables",
  AvailableVegetablesSchema
);
