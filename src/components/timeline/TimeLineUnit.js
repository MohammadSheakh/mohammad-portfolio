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
                        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img
                                class="rounded-full shadow-lg"
                                src={imageLink}
                                alt={imageAltText}
                            />
                        </span>
                        <div class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                {time}
                            </time>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                                {timelineText}
                                <a
                                    href={link}
                                    target={linkTargetValue}
                                    class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
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
                        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img
                                class="rounded-full shadow-lg"
                                src={imageLink}
                                alt={imageAltText}
                            />
                        </span>
                        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                            <div class="justify-between items-center mb-3 sm:flex">
                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                                    {time}
                                </time>
                                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                                    {timelineText}
                                    <a
                                        href={link}
                                        target={linkTargetValue}
                                        class="font-semibold text-gray-900 dark:text-white hover:underline"
                                    >
                                        {timelineLink}
                                    </a>
                                </div>
                            </div>
                            <div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                                {timelineDetailsText}
                            </div>
                        </div>
                    </>
                )}
            </li>
        </>
    );
}
