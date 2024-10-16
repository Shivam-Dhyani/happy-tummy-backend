// controllers/tiffinController.js

const TiffinSelection = require("../models/TiffinSelection");
const Vegetable = require("../models/Vegetable");
const Employee = require("../models/Employee");

// Controller to save tiffin selection
exports.saveTiffinSelection = async (req, res) => {
  const { employeeId, tiffinType, vegetableId, date } = req.body;

  try {
    const selectedDate = new Date(date);

    // Step 1: Validate that the employee exists
    const employee = await Employee.findOne({
      _id: employeeId, // Check that the provided employee ID exists
    });

    if (!employee) {
      return res
        .status(400)
        .json({ error: "Selected employee is not available" });
    }

    // Step 2: Validate that the vegetable exists for the selected date
    const vegetable = await Vegetable.findOne({
      _id: vegetableId, // Check that the provided vegetable ID exists
      date: selectedDate, // Check that the vegetable is available on the provided date
    });

    if (!vegetable) {
      return res
        .status(400)
        .json({ error: "Selected vegetable is not available for this date" });
    }

    // Step 3: If validation passes, save the tiffin selection
    const selection = new TiffinSelection({
      employeeId,
      tiffinType,
      vegetableId, // Store the vegetable ID
      date: selectedDate,
    });

    await selection.save();
    res.json({ message: "Tiffin selection saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Controller to get tiffin selections for a specific date or range of dates
exports.getTiffinSelections = async (req, res) => {
  const { start, end } = req.query; // Get start and end dates from query params

  try {
    let selections;

    // If both start and end dates are provided, find selections within the range
    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);

      selections = await TiffinSelection.find({
        date: { $gte: startDate, $lte: endDate },
      })
        .populate("employeeId", "name") // Populate employee name
        .populate("vegetableId", "name") // Populate vegetable name
        .populate("vegetableId", "price"); // Populate vegetable price

      // If only the start date is provided, find selections for that specific date
    } else if (start) {
      const startDate = new Date(start);
      const endOfDay = new Date(startDate);
      endOfDay.setHours(23, 59, 59, 999); // Include the entire day

      selections = await TiffinSelection.find({
        date: { $gte: startDate, $lte: endOfDay },
      })
        .populate("employeeId", "name") // Populate employee name
        .populate("vegetableId", "name") // Populate vegetable name
        .populate("vegetableId", "price"); // Populate vegetable price

      // If only the end date is provided, find selections for that specific date
    } else if (end) {
      const endDate = new Date(end);
      const endOfDay = new Date(endDate);
      endOfDay.setHours(23, 59, 59, 999); // Include the entire day

      selections = await TiffinSelection.find({
        date: { $gte: endDate, $lte: endOfDay },
      })
        .populate("employeeId", "name") // Populate employee name
        .populate("vegetableId", "name") // Populate vegetable name
        .populate("vegetableId", "price"); // Populate vegetable price
    } else {
      return res
        .status(400)
        .json({ error: "Please provide at least one date" });
    }

    res.json(selections);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
