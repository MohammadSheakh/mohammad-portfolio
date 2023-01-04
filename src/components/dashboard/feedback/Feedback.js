import React from "react";
import { useGetAllFeedbacksQuery } from "../../../features/feedbacks/feedbacksApi";

import FeedbackSearch from "./FeedbackSearch";

export default function Feedback() {
    const {
        data, // data pabo .. ager moto messages diye rename kore fellam
        isLoading,
        isError,
        error,
    } = useGetAllFeedbacksQuery();

    // console.log("data from dashboard -> feedback.js 😀: ", data);

    //const feedbackData = data;

    return (
        <>
            <div class="w-auto h-auto ">
                {/* w-[1200px] */}
                <div class="relative  overflow-x-auto  shadow-md sm:rounded-lg">
                    {/* ekhane ekta search box thakbe ...  */}

                    <div class="ml-[70%] mb-4">
                        <FeedbackSearch />
                    </div>

                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                    <td class="px-6 py-4">{feedback.name}</td>
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
                                        <a
                                            href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td class="px-6 py-4">
                                        {feedback.reference}
                                    </td>
                                    <td class="px-6 py-4">{feedback.email}</td>
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
        </>
    );
}
