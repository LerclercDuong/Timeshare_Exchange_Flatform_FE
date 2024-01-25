import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS
} from "./types";


const LoginSuccess = (information) => (dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: {
            ...information
        },
    });
};
const LoginFail = (information) => (dispatch) => {
    dispatch({
        type: LOGIN_FAIL,
        payload: {
            ...information
        },
    });
};

const RegisterSuccess = (information) => (dispatch) => {
    dispatch({
        type: REGISTER_SUCCESS,
        payload: {
            ...information
        },
    });
};

export {LoginSuccess, LoginFail, RegisterSuccess};