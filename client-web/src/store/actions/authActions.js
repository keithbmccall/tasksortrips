import axios from "axios";
import { ATTEMPT_LOGIN, ATTEMPT_REGISTER } from "./actionTypes";

export const attemptLogin = data => dispatch => {
  axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    body: data
  })
    .then(res => res.json())
    .then(auth =>
      dispatch({
        type: ATTEMPT_LOGIN,
        payload: auth
      })
    );
};


