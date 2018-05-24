const router = require("express").Router();
require("../models/Users");
const users = require("../models/Users");

router.post("/register", users.createAccount, (req, res) => {
  const response = { errors: [], user: "" };
  response.errors = res.locals.errors || null
  response.user = res.locals.user || null
  res.json(response);
});

module.exports = router;
