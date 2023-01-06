import React, { useEffect, useState } from "react";
import {
    useGetAFeedbackQuery,
    useGetAllFeedbacksQuery,
    useDeleteFeedbackMutation,
    useUpdateShowHideControlInFeedbackMutation,
} from "../../../features/feedbacks/feedbacksApi";

import FeedbackSearch from "./FeedbackSearch";

export default function Feedback() {
    /********************************************************
     *
     *  May be Store theke data niye eshe dekhate hobe .................
     *
     */

    const [deleteFeedback] = useDeleteFeedbackMutation();
    const [updateShowHideControlInFeedback] =
        useUpdateShowHideControlInFeedbackMutation();

    const {
        data, // data pabo .. ager moto messages diye rename kore fellam
        isLoading,
        isError,
        error,
    } = useGetAllFeedbacksQuery();

    console.log("data from dashboard/Feedback.js", data);

    // const {
    //     data1, // data pabo .. ager moto messages diye rename kore fellam
    //     isLoading1,
    //     isError1,
    //     error1,
    // } = useGetAFeedbackQuery();
    let feedbackData = [];
    useEffect(() => {
        console.log("useEffect calling from Feedback.js");
        // if (data1)
        //     if (data?.length > 0) {
        //         feedbackData = data;
        //     }
        // if (data1?.length > 0) {
        //     feedbackData = data1;
        // }
    }, []);

    // console.log("data from dashboard -> feedback.js 😀: ", data);

    //const feedbackData = data;
    const [showHideStatus, setShowHideStatus] = useState("Show");
    let variable = "Show";
    const handleEditClick = async (id, showHideControl) => {
        console.log("Edit button click🎫", id, showHideControl);

        if (showHideControl === "Show") {
            setShowHideStatus("Hide");
            variable = "Hide";
            console.log("if block Write Hide", id, variable);
        } else {
            console.log(
                "else block Default Show",
                id,
                //showHideStatus,
                variable
            );
        }

        // setShowHideStatus("Show");

        const response = await updateShowHideControlInFeedback({
            id,
            //showHideStatus,
            variable,
        });
        if (response) {
            setShowHideStatus("");
        }
    };
    const handleDeleteClick = async (id) => {
        console.log("delete button click", id);
        await deleteFeedback(id);
    };

    return (
        <>
            <div class="w-auto h-auto ">
                {/* w-[1200px] */}
                <div class="relative overflow-y-auto   shadow-md sm:rounded-lg">
                    {/* ekhane ekta search box thakbe ...  */}

                    <div class="ml-[70%] mb-4">
                        <FeedbackSearch />
                    </div>
                    <div class=" overflow-y-auto h-[350px]   ">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs   text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Feedback
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Phone Number
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Reference
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Facebook Id
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Present Address
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Permenent Address
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.map((feedback) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="px-6 py-4">
                                            {feedback.name}
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.feedback}
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.phoneNumber}
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.showHideControl}
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            {/* ******************************* 😎 
                                            ei button e press korle Status Show theke Hide hoye jabe ..
                                         * */}
                                            <button
                                                // href="#"
                                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                onClick={() =>
                                                    handleEditClick(
                                                        feedback._id,
                                                        feedback.showHideControl
                                                    )
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                // href="#"
                                                class="ml-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                onClick={() =>
                                                    handleDeleteClick(
                                                        feedback._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.reference}
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.email}
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.facebookId}
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.presentAddress}
                                        </td>
                                        <td class="px-6 py-4">
                                            {feedback.permanentAddress}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
