import { WINDOW_RESIZE } from "../actions/actionTypes";

const initialState = {
  windowWidth: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return {
        ...state,
        windowWidth: action.payload
      };
    
    default:
      return state;
  }
};
