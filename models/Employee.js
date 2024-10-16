// models/Employee.js

// Import mongoose
const mongoose = require("mongoose");

// Create a schema for the Employee
const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensure employee name is mandatory
  },
});

// Export the model so it can be used in other parts of the app
module.exports = mongoose.model("Employee", EmployeeSchema);
