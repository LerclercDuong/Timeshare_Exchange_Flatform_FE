import {REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS} from "../actions/types";

// src/reducers/authReducer.js
const initialState = {
    isAuthenticated: null,
    user: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAIL:
            const {error} = action.payload;
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: "Login fail",
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            }
        case REGISTER_FAIL:
            console.log(action.payload)
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload.data,
            }
        default:
            return state;
    }
};
export default authReducer;
  