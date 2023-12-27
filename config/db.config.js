const mongoose = require("mongoose");
require("dotenv").config()

const DB_URL = process.env.MONGO_URL || "";

const connectDB = async () => {
  if(DB_URL === "") {
    console.log(`    ⛔ Kindly provide the database url in the .env file and RESTART the server`);
  } else {
    console.log(`    🟠 Attempting to connect to MongoDB`);
    try {
      const res = await mongoose.connect(DB_URL);
      // console.log(res);
      console.log(`    🟢 Server is connected to mongoDB successfully`);
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = connectDB;