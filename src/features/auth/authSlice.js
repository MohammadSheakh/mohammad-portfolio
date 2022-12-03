// first e slice then api create korte hobe ..

import { createSlice } from "@redux/toolkit";

const initialState = {
    accessToken: undefined, // string ashbe .. may be ..
    user: undefined, // object ashbe ..
};

// as auth Feature .. so ,  authSlice create korbo ..
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            // reducer state ar action parameter hishebe receive kore ..
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});
// amader ke action named export korte hobe ..
// ar reducer gulao export default korte hoy ..
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
