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
