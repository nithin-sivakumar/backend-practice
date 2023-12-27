const Customer = require("../models/customer");

async function getAllCustomers(req, res) {
  try {
    const response = await Customer.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

async function createCustomer(req, res) {
  try {
    const { name, city, email, grade } = req.body;
    const response = await Customer.create({
      name: name,
      city: city,
      email: email,
      grade: grade,
    });
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

async function updateCustomer(req, res) {
  try {
    const { name, city, email, grade } = req.body;
    const response = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        city: city,
        email: email,
        grade: grade,
      },
      { new: true }
    );
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

async function deleteCustomer(req, res) {
  try {
    const response = await Customer.findByIdAndDelete(req.params.id);
    if (!response) {
      res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

module.exports = {
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  createCustomer,
};
