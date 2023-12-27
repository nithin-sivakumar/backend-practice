const express = require("express");
const app = express();
const cors = require("cors");
const indexRouter = require("./src/routes/index.route")
const corsOptions = require("./config/cors.config");
const connectDB = require("./config/db.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// app.use(indexRouter);
connectDB();

module.exports = app;