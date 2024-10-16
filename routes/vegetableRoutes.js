// Import required modules
const express = require("express");
const router = express.Router();

// Import vegetable controller
const vegetableController = require("../controllers/vegetableController");

// Route to add vegetables for a specific date
// Endpoint: POST /api/vegetables/add
// Description: Allows adding a vegetable available on a specific date
router.post("/add", vegetableController.addVegetables);

// Route to get vegetables for a specific date
// Endpoint: GET /api/vegetables
// Description: Retrieves all vegetables available on a specific date
router.get("/", vegetableController.getVegetablesForDate);

module.exports = router;
