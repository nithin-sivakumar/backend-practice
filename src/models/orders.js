const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  purchaseAmt: {
    type: Number,
    required: [true, "Please enter the amount"],
  },
  orderDate: {
    type: Date,
    required: [true, "Please enter the order date"],
  },
});

module.exports = mongoose.model("orders", ordersSchema);
