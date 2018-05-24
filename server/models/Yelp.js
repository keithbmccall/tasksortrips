const axios = require("axios");

const YELP_KEY = process.env.YELP_KEY

const yelp = {};

yelp.searchByCity = (req, res, next) => {
  const { city } = req.params;
  //
  axios({
    url: `https://api.yelp.com/v3/events?location=${city}&radius=40000&limit=50&sort_on=popularity&categories=music,visual-arts,performing-arts,fashion,festivals-fairs&start_date=10`,
    method: "get",
    headers: {
      'Authorization': `Bearer ${YELP_KEY}`
    }
  })
    .then(results => {
      res.locals.results = results.data;
      next();
    })
    .catch(err => {
      console.log("error in yelp.searchbycity: ", err);
    });
};

module.exports = yelp;
