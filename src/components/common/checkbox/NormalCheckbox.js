import React from "react";

export default function NormalCheckbox({ style, checkBoxText }) {
    return (
        <div class={`absolute ${style}  mt-1`}>
            <input
                id="default-checkbox1"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                // light -> bg-gray-100
                // onChange={() =>
                //     setTimelineDetailsVisible(
                //         !timelineDetailsvisible
                //     )
                // }
            />
            <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                // light -> text-gray-900
            >
                {checkBoxText}
            </label>
        </div>
    );
}
