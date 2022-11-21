import React from "react";

export default function FeedbackStatus() {
    return (
        <div class=" p-1 ">
            <div class="flex border-2 rounded-md pr-2">
                <h1 class="mx-1">status </h1>
                <label
                    for="default-checkbox3"
                    class=" mr-2 ml-2 my-1 text-sm font-medium text-gray-300 dark:text-gray-300 "
                    // light -> text-gray-900
                >
                    General
                </label>
                <input
                    id="default-checkbox2"
                    type="checkbox"
                    value=""
                    class="  w-3 h-3 mt-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => {}}
                />
                {/* ///////////////////////// */}

                <label
                    for="default-checkbox3"
                    class=" mr-2 ml-2 my-1 text-sm font-medium text-gray-300 dark:text-gray-300 "
                >
                    Wish
                </label>
                <input
                    id="default-checkbox2"
                    type="checkbox"
                    value=""
                    class="  w-3 h-3 mt-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => {}}
                />

                {/* ///////////////////////// */}

                <label
                    for="default-checkbox3"
                    class=" mr-2 ml-2 my-1 text-sm font-medium text-gray-300 dark:text-gray-300 "
                >
                    Important
                </label>
                <input
                    id="default-checkbox2"
                    type="checkbox"
                    value=""
                    class="  w-3 h-3 mt-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => {}}
                />
                {/* ///////////////////////// */}

                <label
                    for="default-checkbox3"
                    class=" mr-2 ml-2 my-1 text-sm font-medium text-gray-300 dark:text-gray-300 "
                >
                    Suggestion
                </label>
                <input
                    id="default-checkbox2"
                    type="checkbox"
                    value=""
                    class="  w-3 h-3 mt-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => {}}
                />
            </div>
        </div>
    );
}
