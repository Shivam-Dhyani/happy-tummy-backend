// controllers/employeeController.js

const Employee = require("../models/Employee");

// Controller to add a new employee
exports.addEmployee = async (req, res) => {
  const { name } = req.body; // Get employee name from request body

  try {
    // Check if an employee with the same name already exists
    const existingEmployee = await Employee.findOne({ name });
    if (existingEmployee) {
      return res
        .status(400)
        .json({ error: "Employee with this name already exists." });
    }

    // Create and save a new employee
    const employee = new Employee({ name });
    await employee.save();

    // Respond with success message and employee name
    res.json({
      message: "Employee added!",
      employee: { name: employee.name },
    });
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
