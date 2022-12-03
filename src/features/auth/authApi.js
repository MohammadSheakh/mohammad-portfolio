import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //////////////////////////////////////////////////////////////////////////////
        // register nam er ekta endpoint likhbo ekhane
        register: builder.mutation({
            query: (data) => ({
                // data receive kore .. jeta amra form er body te pathabo ..
                url: "/api/admin/register",
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
            // https://www.youtube.com/watch?v=-JJFQ9bkUbo ei video er jei ta credentials . amader sheita data
            query: (data) => ({
                url: "/api/admin/login",
                method: "POST",
                body: data, // {...data} // evabe pathaise .. Dave Gray yt channel
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(
                        "authApi -> login endpoint -> try block 🎯🎯",
                        result
                    );

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
                    console.log(
                        "authApi -> login endpoint -> catch block 🤐🤐",
                        err
                    );
                    // do nothing
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
// ekhan theke amra kichu hook pai .. API er EndPoints theke amra kichu hook pai ..
