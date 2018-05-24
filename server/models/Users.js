require("./index");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.model("users");

const users = {};

users.createAccount = (req, res, next) => {
  const { name, email, password, password2, location } = req.body;
  let errors = [];

  password !== password2 && errors.push({ text: "Passwords do not match!" });

  password.length < 4 &&
    errors.push({ text: "Password must be at least 4 characters!!" });
  if (errors.length > 0) {
    res.locals.errors = errors;
    next();
  } else {
    User.findOne({ email }).then(user => {
      if (user) {
        res.locals.errors = errors.push("This email is already in use!");
        next();
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            const newUser = {
              name,
              email,
              password: hash,
              location
            };
            //   create user function
            new User(newUser)
              .save()
              .then(user => {
                res.locals.user = user;
                next();
              })
              .catch(err => {
                console.log("register error: ", err);
              });
          });
        });
      }
    });
  }
};

module.exports = users;
