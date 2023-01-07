import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        /////////////////////////////////////////////////////////////////////////////
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
                    const user = {
                        name: result.data.name,
                        email: result.data.email,
                        isAdmin: result.data.isAdmin,
                        _id: result.data._id,
                    };
                    //🔺
                    console.log(
                        "authApi -> login endpoint -> try block 🎯2️⃣ -> result variable ->",
                        result
                    );

                    console.log(
                        "authApi -> login endpoint -> try block 🎯2️⃣2️⃣2️⃣ -> user variable ->",
                        user
                    );

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            //user: loggedInUser,
                            user: user._id,

                            // user: {
                            //     name: result.data.name,
                            //     email: result.data.email,
                            //     isAdmin: result.data.isAdmin,
                            //     _id: result.data._id,
                            // },
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            //user: result.data,
                            user: user,

                            // user: {
                            //     name: result.data.name,
                            //     email: result.data.email,
                            //     isAdmin: result.data.isAdmin,
                            //     _id: result.data._id,
                            // },
                        })
                    );
                } catch (err) {
                    // 🔺 console.log(
                    //     "authApi -> login endpoint -> catch block  query fulfilled er response ashe nai .. result e kichu ashe nai .. 🤐🤐",
                    //     err
                    // );
                    // do nothing
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
// ekhan theke amra kichu hook pai .. API er EndPoints theke amra kichu hook pai ..
