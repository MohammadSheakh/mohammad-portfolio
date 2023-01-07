// socket er bepar thakle sheta import korte hobe
import { apiSlice } from "../api/apiSlice";

export const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // ekhane amra amader first endpoint ta likhbo
        /*
            /// addProject    
            /// updateShowHideStatusInProject 
            /// deleteProject 
            
            /// getAProjectsById 
            /// getAllProjects 
            /// updateAProjectById
        */
        //status :
        addProject: builder.mutation({
            query: (data) => ({
                // mutation jehetu tai amra ekta object return kore dibo ..
                url: "/api/project",
                method: "POST",
                body: data,
            }),
            // may be kaj shesh 🙄 🧐🤔
            invalidatesTags: ["Project"], // auto refetching will work ..
        }),
        /// updateShowHideStatusInProject
        updateShowHideControlInProject: builder.mutation({
            query: ({ id, ...variable }) => ({
                // variable
                // showHideControl
                url: `/api/updateShowHide/${id}`,
                method: "PATCH", // single data change kore // put e replace kore ..
                body: { variable },
            }),
            invalidatesTags: ["Project"],
        }),

        /// deleteProject
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/api/project/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Project"],
        }),

        /// getAProjectsById
        getAProjectById: builder.query({
            // by phoneNumber, email, status, reference,  facebookId diye search korar maddhome
            query: (id) => {
                return "/api/project/getAProject/:id";
                // return `/api/feedback/getAFeedback/?name=${name}&email=${email}&phoneNumber=${phoneNumber}&reference=${reference}&facebookId=${facebookId}`;
            },
        }),

        /// getAllProjects
        getAllProjects: builder.query({
            // query jei jinish ta .. sheta amake ekta query function amake ekhane dite hobe ..
            query: () => "/api/project", //🔺 feedbacks node e hit kore shob data dekhabo
            // 😎 page parameter niye sumit vai er moto kaj korte hobe .. first e olpo
            // content dekhiye .. pore aro content dekhate hobe ..
            providesTags: ["Project"], // jeno refetch kore...
        }),

        /// updateAProjectById
        updateAProjectById: builder.mutation({
            query: ({ id, updatedProjectData }) => ({
                // variable
                // showHideControl
                url: `/api/project/${id}`,
                method: "PATCH", // single data change kore // put e replace kore ..
                body: updatedProjectData,
            }),
            invalidatesTags: ["Project"],
        }),
    }),
});

export const {} = projectsApi;
// ekhan theke amra kichu hook pai .. API er EndPoints theke amra kichu hook pai ..
