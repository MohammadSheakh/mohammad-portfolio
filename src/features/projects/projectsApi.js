// socket er bepar thakle sheta import korte hobe
import { apiSlice } from "../api/apiSlice";

export const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //done ✅📈
        addProject: builder.mutation({
            query: (data) => ({
                // mutation jehetu tai amra ekta object return kore dibo ..
                url: "/api/project/",
                method: "POST",
                body: data,
            }),
            // may be kaj shesh 🙄 🧐🤔
            invalidatesTags: ["Project"], // auto refetching will work ..
        }),
        //done ✅📈
        getAllProjects: builder.query({
            // query jei jinish ta .. sheta amake ekta query function amake ekhane dite hobe ..
            query: () => "/api/project", //🔺 feedbacks node e hit kore shob data dekhabo
            // 😎 page parameter niye sumit vai er moto kaj korte hobe .. first e olpo
            // content dekhiye .. pore aro content dekhate hobe ..
            providesTags: ["Project"], // jeno refetch kore...
        }),

        //📈
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/api/project/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Project"],
        }),

        /// getMoreFeedbacks : builder.query({})
        //
        getAProjectById: builder.query({
            // by phoneNumber, email, status, reference,  facebookId diye search korar maddhome
            query: (id) => {
                // kono condition er upor base kore ki return kora lagbe ? 🔵🔴
                return `/api/project/getAProject/${id}`;
            },
        }),

        //📈 addProject  getAllProjects deleteProject getAProjectById updateShowHideControlInProject
        updateShowHideControlInProject: builder.mutation({
            query: ({ id, ...variable }) => ({
                // variable
                // showHideControl
                url: `/api/project/updateShowHide/${id}`,
                method: "PATCH", // single data change kore // put e replace kore ..
                body: { variable },
            }),
            invalidatesTags: ["Project"],
        }),

        updateAProjectById: builder.mutation({
            query: (id, updatedProject) => ({
                // variable
                // showHideControl
                url: `/api/project/${id}`,
                method: "PATCH", // single data change kore // put e replace kore ..
                body: updatedProject,
            }),
            invalidatesTags: ["Project"],
        }),
    }),
});
export const {
    useAddProjectMutation,
    useGetAllProjectsQuery,
    useGetAProjectByIdQuery,
    useDeleteProjectMutation,
    useUpdateAProjectByIdMutation,
    useUpdateShowHideControlInProjectMutation,
} = projectsApi;
// ekhan theke amra kichu hook pai .. API er EndPoints theke amra kichu hook pai ..
