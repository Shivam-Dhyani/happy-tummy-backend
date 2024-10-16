const Vegetable = require("../models/Vegetable");

// Controller to add vegetables for a specific date
exports.addVegetables = async (req, res) => {
  const { name, price, date } = req.body;

  try {
    const vegetable = new Vegetable({
      name,
      price,
      date: new Date(date),
    });

    await vegetable.save();
    res.json({ message: "Vegetable added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Controller to get vegetables for a specific date
exports.getVegetablesForDate = async (req, res) => {
  const { date } = req.query;

  try {
    const vegetables = await Vegetable.find({
      date: new Date(date),
    });

    res.json(vegetables);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
