const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 7500;
const path = require("path");
//
const app = express();
// mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/tasks")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch(err =>
    console.log("error at connecting MongoDB with Mongoose: ", err)
  );
