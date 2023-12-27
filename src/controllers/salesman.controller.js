const Salesman = require("../models/salesman");

async function getAllSalesmen(req, res) {
  try {
    const salesmen = await Salesman.find();
    res.status(200).json(salesmen);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function createSalesman(req, res) {
  try {
    const { name, city, commission } = req.body;
    const response = await Salesman.create({
      name: name,
      city: city,
      commission: commission,
    });
    res.status(201).json({ message: "Salesman created successfully " });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function updateSalesman(req, res) {
  try {
    const { name, city, commission } = req.body;
    const updatedUser = await Salesman.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        city: city,
        commission: commission,
      },
      { new: true }
    );
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function deleteSalesman(req, res) {
  try {
    const response = await Salesman.findByIdAndDelete(req.params.id);
    if (!response) {
      res.status(404).json({ message: "Salesman does not exist" });
    }
    res.status(200).json({ message: "Salesman deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = {
  getAllSalesmen,
  createSalesman,
  updateSalesman,
  deleteSalesman,
};
