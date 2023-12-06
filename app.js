const dotenv = require("dotenv").config();
const database = require("./db");
const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User.model")
const Guest = require("./models/Guest.model")
const Vendor = require("./models/Vendor.model")

const { isAuthenticated } = require("./middleware/jwt.middleware") 

const app = express();

const config = require("./config")(app);


// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);


const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const vendorRoutes = require("./routes/vendor.routes")
app.use("/api", vendorRoutes) // I left out /vendors, otherwise there won't be anything in some routes in Vendor.Routes


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
