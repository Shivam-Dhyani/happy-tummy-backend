// controllers/tiffinController.js

const TiffinSelection = require("../models/TiffinSelection");
const Vegetable = require("../models/Vegetable");
const Employee = require("../models/Employee");

// Controller to save tiffin selection
exports.saveTiffinSelection = async (req, res) => {
  const { employeeId, tiffinType, vegetableDateId, vegetableId, date } =
    req.body;

  try {
    const selectedDate = new Date(date);
    const endDate = new Date(selectedDate);
    endDate.setHours(endDate.getHours() + 24); // Add 24 hours to the selected date

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
    const vegetables = await Vegetable.findOne({
      // _id: vegetableId, // Check that the provided vegetable ID exists
      date: { $gte: selectedDate, $lt: endDate }, // Check vegetable availability in the 24-hour range
    });

    if (!vegetables) {
      return res
        .status(400)
        .json({ error: "No vegetable added for this date." });
    }

    const vegetable = vegetables?.vegetables?.find(
      (sabji) => sabji?._id == vegetableId
    );

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
      availableVegetablesId: vegetableDateId, // Store the availableVegetables ID
      date: selectedDate,
    });

    await selection.save();
    res.json({ message: "Tiffin selection saved successfully!" });
  } catch (error) {
    console.log("Save Tiffin API error::", error);

    res.status(500).json({ error: `Server Error: ${error}` });
  }
};

// Controller to get tiffin selections for a specific date or range of dates
exports.getTiffinSelections = async (req, res) => {
  const { start, end } = req.query; // Get start and end dates from query params

  if (!start) {
    return res
      .status(400)
      .json({ error: "Please provide at least a start date1" });
  }

  try {
    let selections;

    // Convert query dates to Date objects
    const startDate = start ? new Date(start) : null;
    let endDate = end ? new Date(end) : null;

    // If only start date is provided, set end date to 24 hours later
    if (startDate && !endDate) {
      endDate = new Date(startDate);
      endDate.setUTCHours(endDate.getUTCHours() + 24); // Set end date to 24 hours after start date
    }

    // Query for selections based on date range or specific dates
    selections = await TiffinSelection.find({
      date: { $gte: startDate, $lt: endDate },
    })
      .populate("employeeId", "name") // Populate employee name
      .populate("availableVegetablesId", "date vegetables"); // Populate available vegetables and their date

    // Attach specific vegetable details to each tiffin selection
    const selectionsWithVegetableDetails = selections.map((selection) => {
      const { availableVegetablesId, vegetableId } = selection;
      const selectedVegetable = availableVegetablesId?.vegetables.find(
        (veg) => veg._id?.toString() === vegetableId?.toString()
      );

      return {
        ...selection?._doc,
        vegetableId: selectedVegetable, // Attach specific vegetable details
      };
    });

    res.json(selectionsWithVegetableDetails);
  } catch (error) {
    console.error("Error fetching tiffin selections:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
