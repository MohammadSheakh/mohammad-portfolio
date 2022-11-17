import React from "react";
import SearchResult from "./SearchResult";

export default function SearchResults() {
    return (
        <>
            <div class="z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                {/* hidden  id="dropdownHelper"*/}
                <ul
                    class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHelperButton"
                >
                    <SearchResult year="2022" description="Let's Start..." />
                    <SearchResult year="2021" description="Initialization" />
                    <SearchResult year="2020" description="Corona Time" />
                </ul>
            </div>
        </>
    );
}
