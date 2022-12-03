import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// react theke na nile hook pabo na .. node.js er jonno /query theke nite hoy

// authSlice theke userLoggedOut nite hobe pas
import { userLoggedOut } from "../auth/authSlice";

// amra jani proti ta request e base query er moddhe diye jay .. prepareHeaders function ta prottek ta khetre ek bar
// kore call hoy.. and she dekhbe amar user eta ke customize kore diyeche kina
// fetchBaseQuery ta axios er moto ..
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    // credentials: "include", // new things 🎯 // it will send back our http only secure cookie
    // so you want the cookie to send with every query..
    prepareHeaders: async (headers, { getState, endpoint }) => {
        console.log("getState() from apiSlice.js : ", getState());
        const token = getState()?.auth.accessToken;
        console.log(
            "features -> api -> apiSlice.js -> baseQuery -> prepareHeaders -> token",
            token
        );
        if (token) {
            headers.set("Authorization", `Bearer ${token}`); // authorization ta small letter e likha
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    // custom query function likhbo
    baseQuery: async (args, api, extraOptions) => {
        // amra jani proti ta request e base query er moddhe diye jay .. prepareHeaders function ta prottek ta khetre ek bar
        // kore call hoy.. and she dekhbe amar user eta ke customize kore diyeche kina
        let result = await baseQuery(args, api, extraOptions);

        console.log(
            "features -> api -> apiSlice.js -> apiSlice -> baseQuery -> result ->",
            result
        );

        if (result?.error?.status === 401) {
            api.dispatch(userLoggedOut()); // userLoggedOut() action dispatch kora lagbe ekhane .. authSlice theke ashbe
            localStorage.clear();
        }
        return result;
    },
    tagTypes: [],
    endpoints: (builder) => ({}), // extended api slices ..
});
