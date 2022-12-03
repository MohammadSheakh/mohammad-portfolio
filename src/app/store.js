import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice"; // Dave Gray authReducer import korse ..

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // amra jehetu prottek tar shathe ekta kore slice o diyechi .. shegula keo niye ashte hobe
        auth: authSliceReducer,
    },
    devTools: process.env.NODE_ENV !== "production", // production e thakle devTools false hobe .. tokhon ar devtools kaj korbe na

    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});
