const Orders = require("../models/orders");

async function getOrders(req, res) {
  try {
    const response = await Orders.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

async function createOrders(req, res) {
  try {
    const { amt, orderDate } = req.body;
    const response = await Orders.create({
      purchaseAmt: amt,
      orderDate: orderDate,
    });
    res.status(201).json({ message: "Order created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

async function updateOrders(req, res) {
  try {
    const { amt, orderDate } = req.body;
    const orderExists = await Orders.findById(req.params.id);
    if (!orderExists) {
      return res
        .status(404)
        .json({ message: "Order not found! Unable to delete" });
    }
    const response = await Orders.findByIdAndUpdate(
      req.params.id,
      {
        purchaseAmt: amt,
        orderDate: orderDate,
      },
      { new: true }
    );
    res.status(200).json({ message: "Order updated successfully", response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

async function deleteOrders(req, res) {
  try {
    const response = await Orders.findByIdAndDelete(req.params.id);
    if (!response) {
      res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
}

module.exports = {
  getOrders,
  createOrders,
  updateOrders,
  deleteOrders,
};
