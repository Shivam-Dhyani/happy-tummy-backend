// routes/employeeRoutes.js

const express = require("express");
const router = express.Router();
const {
  addEmployee,
  getEmployees,
} = require("../controllers/employeeController");

// Route to add a new employee
router.post("/", addEmployee);

// Route to get all employees
router.get("/", getEmployees);

module.exports = router;
