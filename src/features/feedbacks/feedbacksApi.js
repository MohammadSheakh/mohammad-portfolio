// socket er bepar thakle sheta import korte hobe
import { apiSlice } from "../api/apiSlice";
// jehetu default export na .. export const .. tai import korar shomoy {} diye nite hobe
// onno kono Api niye kaj korte hoile shetao import korte hobe ..

// API create korar main interest hocche database ke heat kora ..
// database er feedback node e hit kora ..

export const feedbacksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // ekhane amra amader first endpoint ta likhbo
        /*
            /// getAllFeedbacks     // feedback er status er upor base koreo get kora lagbe ..
            /// getMoreFeedbacks // new page er data anar jonno amra new API banacchi
            /// getFeedback // feedback id, phone number , email address, name diye search korar maddhome ekta feedback ene dekhate hobe
            ///////////////// ba joto gula match kore .. shob gula ene dekhate hobe ..
            /// addFeedback // amar 3 dhoroner form ase .. 3 ta database hobe .. naki 1 tai ..
            /// editFeedback // shudhu .. status ar hide show control tai change korte parbo ami
            /// deleteFeedback
        */
        //done ✅📈
        addFeedback: builder.mutation({
            query: (data) => ({
                // mutation jehetu tai amra ekta object return kore dibo ..
                url: "/api/feedback",
                method: "POST",
                body: data,
            }),
            // may be kaj shesh 🙄 🧐🤔
        }),
        //done ✅📈
        getAllFeedbacks: builder.query({
            // query jei jinish ta .. sheta amake ekta query function amake ekhane dite hobe ..
            query: () => "/api/feedback", //🔺 feedbacks node e hit kore shob data dekhabo
            // 😎 page parameter niye sumit vai er moto kaj korte hobe .. first e olpo
            // content dekhiye .. pore aro content dekhate hobe ..
        }),

        /// getMoreFeedbacks : builder.query({})
        getAFeedback: builder.query({
            // by phoneNumber, email, status, reference,  facebookId diye search korar maddhome
            query: ({ name, email, phoneNumber, reference, facebookId }) => {
                // kono condition er upor base kore ki return kora lagbe ? 🔵🔴
                console.log(
                    `from getAFeedback from feedback API front-end /api/feedback/getAFeedback/?name=${name}&email=${email}&phoneNumber=${phoneNumber}&reference=${reference}&facebookId=${facebookId}`
                );
                return `/api/feedback/getAFeedback/?name=${name}&email=${email}&phoneNumber=${phoneNumber}&reference=${reference}&facebookId=${facebookId}`;
            },
            async onQueryStarted(
                { name, email, phoneNumber, reference, facebookId },
                { queryFulfilled, dispatch }
            ) {
                // amra ekhane getAllFeedbacks API er moddhe getAFeedback er call kora data push kore dibo
                try {
                    const feedbackSearchResult = await queryFulfilled; // search result paowar pore
                    console.log(
                        "feedbackSearchResult.data 😀😀😀😀😀",
                        feedbackSearchResult.data
                    );
                    if (feedbackSearchResult?.data?.length > 0) {
                        /** ekhon ei jei search result ta ashse .. ami chacchi sheta ke
                         *  getAllFeedbacks api er queryData er moddhe push kore dite .. getAllFeedbacks
                         *  er ager data remove kore diye .. eita push kore dibo ...
                         */
                        console.log("length exist");
                        dispatch(
                            apiSlice.util.updateQueryData(
                                // jokhon e data pabo .. tokhon "getAllFeedbacks" API er cash update kore felbo ..
                                "getAllFeedbacks",
                                // getAllFeedbacks er jodi kono parameter thake , je , sheta diye
                                // identify kora lagbe .. sheta provide korte hobe .. amader nai .. so
                                // amra dibo na ..
                                (draft) => {
                                    //console.log("draft🙂", String(draft));
                                    // return {
                                    //     data: [
                                    //         //...draft.data, // ager data er shathe
                                    //         ...feedbackSearchResult.data, // new data append kore dilam ..
                                    //     ], // array of object er moddhe concatinate kore dicchi ..
                                    //     // draft theke niye kaj kortesi
                                    //     // tai number kore dite hobe .. karon string chilo
                                    // };
                                    /**
                                     * normally amra ager data er shathe new data diye dei ... 
                                     * draft er moddhe amader ager data ase .. 
                                     * ...draft,
                                     * ... feedbackSearchResult.data,
                                     * // ei draft er moddhe first page er chunk ta diye dibe ..
                                     // draft.push(res);  // 😀 draft er moddhe push na ei khetre ..
                                    // ami new ekta array of object .. amake kintu draft er shathe concatinate korte hobe
                                    // amake ekta new array return korte hobe .. sekhan e ami draft e ja chilo .. sheta
                                    // to ami diboi .. tar shathe shathe conversations er data tao spread kore dibo
                                    😅 draft ta ke print korte hole amake stringify kore nite hobe ..  
                                    return {
                                        data: [
                                            ...draft.data, // ager data er shathe
                                            ...conversations.data, // new data append kore dilam ..
                                        ], // array of object er moddhe concatinate kore dicchi ..
                                        totalCount: Number(draft.totalCount), // draft theke niye kaj kortesi
                                        // tai number kore dite hobe .. karon string chilo
                                    };
                                     */
                                    // console.log("draft😑😑", draft);
                                    draft.push(feedbackSearchResult.data);
                                }
                            )
                        );
                    } else {
                        console.log("Else block");
                    }
                } catch (err) {
                    // undo() korar kichu nai .. karon ami pissimistically korchi ..
                    // response na ashle .. hobei na ashole ..
                }
            },
        }),

        getAFeedbackByShowHide: builder.query({
            query: (showHideControl) =>
                `/api/feedback/showHideControl/?showHideControl=${showHideControl}`,
        }),
    }),
});

export const {
    useAddFeedbackMutation,
    useGetAllFeedbacksQuery,
    useGetAFeedbackQuery,
} = feedbacksApi;
// ekhan theke amra kichu hook pai .. API er EndPoints theke amra kichu hook pai ..
