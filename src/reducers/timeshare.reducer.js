import {LOAD_TIMESHARE} from "../actions/types";

// src/reducers/authReducer.js
const initialState = {
    timeshare_id: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            const {_id, username, role, profilePicture} = action.payload;
            try {
                return {
                    ...state,
                    isAuthenticated: true,
                    user: {_id, username, role, profilePicture},
                    error: null,
                };
            } catch (error) {
                // Handle error appropriately, you might want to set error in the state
                console.error("Login failed:", error);
                return {
                    ...state,
                    isAuthenticated: false,
                    user: null,
                    error: "Login failed",
                };
            }
        case LOGIN_FAIL:
            const {error} = action.payload;
            try {
                return {
                    ...state,
                    isAuthenticated: false,
                    user: null,
                    error: error,
                };
            } catch (error) {
                // Handle error appropriately, you might want to set error in the state
                console.error("Login failed:", error);
                return {
                    ...state,
                    isAuthenticated: false,
                    user: null,
                    error: "Login failed",
                };
            }
        default:
            return state;
    }
};
export default authReducer;
