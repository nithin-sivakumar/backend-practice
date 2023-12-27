const express = require("express");
const {
  getAllSalesmen,
  createSalesman,
  updateSalesman,
  deleteSalesman,
} = require("../controllers/salesman.controller");
const router = express.Router();

router.get("/all", getAllSalesmen);

router.post("/create", createSalesman);

router.put("/update/:id", updateSalesman);

router.delete("/delete/:id", deleteSalesman);

module.exports = router;
