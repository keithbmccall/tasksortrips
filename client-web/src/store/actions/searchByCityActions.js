import axios from "axios";
import { SEARCH_BY_CITY } from "./actionTypes";
//
import { YELP_KEY } from "../../keys";
//
export const searchByCity = city => dispatch => {
  axios({
    url: `https://api.yelp.com/v3/events?location=${city}&radius=40000&limit=50`,
    method: "get",
    authorization: `Bearer ${YELP_KEY}`
  }).then(results => console.log(results));
};
