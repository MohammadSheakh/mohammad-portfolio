import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //////////////////////////////////////////////////////////////////////////////
        // register nam er ekta endpoint likhbo ekhane
        register: builder.mutation({
            query: (data) => ({
                // data receive kore .. jeta amra form er body te pathabo ..
                url: "api/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            // local storage e kokhono object rakha jay na .. result er moddhe jinish ta ashe na .. result.data er
                            // moddhe jinish ta dey she .. onek ta axios er moto ..
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                    // local state update korbo ekhon redux er .. auth slice er userLoggedIn action ta
                    // dispatch kore dibo
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing .. error ta UI theke catch korte parbo ..
                    console.log(
                        "Error from front-end > feature > auth -> authApi -> catch block",
                        err
                    );
                }
            },
        }),

        // login endpoints //////////////////////////////////////////////////////////////////////////////
        login: builder.mutation({
            query: (data) => ({
                url: "/api/login",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
// ekhan theke amra kichu hook pai .. API er EndPoints theke amra kichu hook pai ..
