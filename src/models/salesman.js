const mongoose = require("mongoose");

const salesmanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field missing! Please enter the name"],
  },
  city: {
    type: String,
    required: [true, "City field missing! Please enter the city"],
  },
  commission: {
    type: String,
    required: [true, "Commission field missing! Please enter the commission"],
  },
});

module.exports = mongoose.model("salesman", salesmanSchema);
