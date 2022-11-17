import React from "react";

export default function SearchResult({ year, description }) {
    return (
        <li>
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div class="flex items-center h-5">
                    <input
                        id="helper-checkbox-1"
                        aria-describedby="helper-checkbox-text-1"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                </div>
                <div class="ml-2 text-sm">
                    <label
                        for="helper-checkbox-1"
                        class="font-medium text-gray-900 dark:text-gray-300"
                    >
                        <div>{year}</div>
                        <p
                            id="helper-checkbox-text-1"
                            class="text-xs font-normal text-gray-500 dark:text-gray-300"
                        >
                            {description}
                        </p>
                    </label>
                </div>
            </div>
        </li>
    );
}
