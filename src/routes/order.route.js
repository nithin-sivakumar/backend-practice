const express = require("express");
const {
  getOrders,
  createOrders,
  updateOrders,
  deleteOrders,
} = require("../controllers/order.controller");
const router = express.Router();

router.get("/all", getOrders);

router.post("/create", createOrders);

router.put("/update/:id", updateOrders);

router.delete("/delete/:id", deleteOrders);

module.exports = router;
