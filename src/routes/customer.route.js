const express = require("express");
const {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer.controller");
const validateCustomer = require("../validation/customer");

const router = express.Router();

router.get("/all", getAllCustomers);

router.post("/create", validateCustomer, createCustomer);

router.put("/update/:id", validateCustomer, updateCustomer);

router.delete("/delete/:id", deleteCustomer);

module.exports = router;
