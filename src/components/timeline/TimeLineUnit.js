import React, { useEffect, useState } from "react";
import UpdateTimeLineModal from "./UpdateTimeLineModal";

export default function TimeLineUnit({
    imageLink,
    imageAltText,
    time,
    timelineText,
    timelineLink,
    details,
    timelineDetailsText,
    link,
    linkTargetValue,
}) {
    const [detailsBody, setDetailsBody] = useState(undefined);
    useEffect(() => {
        setDetailsBody(details);
    }, [details]);
    return (
        <>
            <li class="mb-10 ml-6">
                {/* 😎 detailsBody true false er upor base kore dekhate chacchi  */}
                {!detailsBody && (
                    <>
                        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-900 rounded-full ring-4 ring-gray-900 dark:ring-gray-900 dark:bg-blue-900">
                            {/* // light -> bg-blue-200 ring-white */}
                            <img
                                class="rounded-full shadow-lg"
                                src={imageLink}
                                alt={imageAltText}
                            />
                        </span>
                        <div class="justify-between items-center p-4 bg-gray-700 rounded-lg border border-gray-600 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            {/* light -> bg-white rounded-lg border border-gray-200 */}
                            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                {time}
                            </time>
                            <div class="text-sm font-normal text-gray-300 dark:text-gray-300">
                                {/* light -> text-gray-500 */}
                                {timelineText}
                                <a
                                    href={link}
                                    target={linkTargetValue}
                                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                                    // light -> text-blue-600
                                >
                                    {timelineLink}
                                </a>{" "}
                                {/* // text underline and mark word
                            
                            to{" "}
                            <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                                Funny Group
                            </span> */}
                            </div>
                        </div>
                    </>
                )}

                {detailsBody && (
                    <>
                        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-900 rounded-full ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-blue-900">
                            {/* bg-blue-200 rounded-full ring-8 ring-white */}
                            <img
                                class="rounded-full shadow-lg"
                                src={imageLink}
                                alt={imageAltText}
                            />
                        </span>
                        <div class="p-4 bg-gray-700 rounded-lg border border-gray-600 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            {/*light -> bg-white border-gray-200 */}
                            <div class="justify-between items-center mb-3 sm:flex">
                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                    {time}
                                </time>
                                <div class="text-sm font-normal text-gray-300 lex dark:text-gray-300">
                                    {/* light -> text-gray-500 */}
                                    {timelineText}
                                    <a
                                        href={link}
                                        target={linkTargetValue}
                                        class="font-semibold text-white dark:text-white hover:underline"
                                        // light -> text-gray-900
                                    >
                                        {timelineLink}
                                    </a>
                                </div>
                            </div>
                            <div class="p-3 text-xs italic font-normal  rounded-lg border text-gray-300 bg-gray-600 border-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                                {/*light -> text-gray-500 bg-gray-50 border-gray-200 */}
                                {timelineDetailsText}
                            </div>
                        </div>
                    </>
                )}
            </li>
        </>
    );
}
