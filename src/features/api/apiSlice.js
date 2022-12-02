import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// react theke na nile hook pabo na .. node.js er jonno /query theke nite hoy

// authSlice theke userLoggedOut nite hobe pas
import { userLoggedOut } from "../auth/authSlice";

// amra jani proti ta request e base query er moddhe diye jay .. prepareHeaders function ta prottek ta khetre ek bar
// kore call hoy.. and she dekhbe amar user eta ke customize kore diyeche kina
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = getState()?.auth.accessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        // amra jani proti ta request e base query er moddhe diye jay .. prepareHeaders function ta prottek ta khetre ek bar
        // kore call hoy.. and she dekhbe amar user eta ke customize kore diyeche kina
        let result = await baseQuery(args, api, extraOptions);

        if (result?.error?.status === 401) {
            api.dispatch(userLoggedOut()); // userLoggedOut() action dispatch kora lagbe ekhane .. authSlice theke ashbe
            localStorage.clear();
        }
        return result;
    },
    tagTypes: [],
    endpoints: (builder) => ({}),
});
