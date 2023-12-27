const express = require("express");
const app = express.Router();
const salesmanRouter = require("./salesman.route");
const customerRouter = require("./customer.route");
const orderRouter = require("./order.route");

// Import additional routes here
// const exampleRouter = require("./path_to_example_router");

// Link the sub-routes to index.route.js
// router.use("/api/example", exampleRouter)

// app.use("/api/user", userRouter);
app.use("/api/salesman", salesmanRouter);

app.use("/api/customer", customerRouter);

app.use("/api/order", orderRouter);

module.exports = app;
