// routes/tiffinRoutes.js

const express = require("express");
const router = express.Router();
const {
  saveTiffinSelection,
  getTiffinSelections,
} = require("../controllers/tiffinController");

// Route to save tiffin selection
router.post("/select", saveTiffinSelection);

// Route to get tiffin selections for a specific date
router.get("/", getTiffinSelections);

module.exports = router;
