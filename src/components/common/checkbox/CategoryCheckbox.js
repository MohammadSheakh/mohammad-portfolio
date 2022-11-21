import React from "react";

export default function CategoryCheckbox({ checkboxTitle, style }) {
    return (
        <div
            className={`${style}  w-auto text-center  mt-[6px] p-1 px-2 rounded-md   bg-PrimaryColorDark hover:bg-PrimaryColorDarkHover hover:border-2  `}
        >
            <label
                for="default-checkbox3"
                class=" mr-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                // light -> text-gray-900
            >
                {checkboxTitle}
            </label>
            <input
                id="default-checkbox2"
                type="checkbox"
                value=""
                class="  w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                // light -> bg-gray-100
                // onChange={() =>
                //     setTimelineDetailsVisible(
                //         !timelineDetailsvisible
                //     )
                // }
            />
        </div>
    );
}
