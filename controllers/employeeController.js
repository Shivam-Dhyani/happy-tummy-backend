// controllers/employeeController.js

const Employee = require("../models/Employee");

// Controller to add a new employee
exports.addEmployee = async (req, res) => {
  const { name } = req.body; // Get employee name from request body

  try {
    // Create and save a new employee
    const employee = new Employee({ name });
    await employee.save();
    res.json({ message: "Employee added!" }); // Respond with success message
  } catch (error) {
    res.status(500).json({ error: "Server Error" }); // Handle errors
  }
};

// Controller to get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find(); // Retrieve all employees from DB
    res.json(employees); // Send employees as JSON response
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
