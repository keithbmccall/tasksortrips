require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
//
const port = process.env.PORT || 8080;
const app = express();
//controllers
const usersRouter = require('./controllers/Users')
const yelpRouter = require('./controllers/Yelp')
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

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', yelpRouter)
app.use('/users', usersRouter)

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.use((err, req, res, next) => {
    console.log("Error encountered:", err);
    res.status(500);
    res.send(err);
  });
  
