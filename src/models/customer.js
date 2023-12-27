const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field missing! Please enter the name"],
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
  },
  city: {
    type: String,
    required: [true, "City field missing! Please enter the city"],
  },
  grade: {
    type: String,
    required: [true, "Grade field missing! Please enter the grade"],
  },
});

module.exports = mongoose.model("customer", customerSchema);
