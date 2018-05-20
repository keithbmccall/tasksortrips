import { WINDOW_RESIZE } from "./actionTypes";

export const windowResize = () => dispatch => {
    dispatch({
        type: WINDOW_RESIZE,
        payload: window.innerWidth
    })

};
