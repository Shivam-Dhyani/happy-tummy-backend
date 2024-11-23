const AvailableVegetables = require("../models/Vegetable");

// Controller to add multiple vegetables for a specific date
exports.addVegetables = async (req, res) => {
  const { vegetables, date } = req.body; // 'vegetables' will be an array of {name, price}

  try {
    // Check if a document for the given date already exists
    let availableVegetables = await AvailableVegetables.findOne({
      date: new Date(date),
    });
    if (availableVegetables) {
      // If the document exists, append new vegetables to the existing array
      availableVegetables.vegetables.push(...vegetables);
    } else {
      // If no document exists, create a new one
      availableVegetables = new AvailableVegetables({
        date: new Date(date),
        vegetables,
      });
    }

    // Save the document (insert or update)
    await availableVegetables.save();

    res.json({ message: "Vegetables added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Controller to get vegetables for a specific date
exports.getVegetablesForDate = async (req, res) => {
  const { date } = req.query;

  try {
    const vegetables = await AvailableVegetables.find({
      date: new Date(date),
    });

    res.json(vegetables);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
