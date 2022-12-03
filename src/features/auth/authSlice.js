// first e slice then api create korte hobe ..

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined, // string ashbe .. may be ..
    user: undefined, // object ashbe ..
};

// as auth Feature .. so ,  authSlice create korbo ..
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // ei reducer gulai amar action ..
        userLoggedIn: (state, action) => {
            // reducer state ar action parameter hishebe receive kore ..
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined; // null o kore dite pari ..
            state.user = undefined;
        },
    },
});
// amader ke action named export korte hobe ..
// ar reducer gulao export default korte hoy ..
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

/**
 * export const selectCurrentUser = (state) => state.auth.user // new things 🎯
 * export const selectCurrentAccessToken = (state) => state.auth.accessToken
 */
