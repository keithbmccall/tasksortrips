const router = require("express").Router();
const yelp = require("../models/Yelp");
//
router.get("/explore/:city", yelp.searchByCity, (req, res) => {
  const { results } = res.locals;
  res.json({ results });
});

module.exports = router;
