import React from "react";
import SearchResults from "../components/timeline/SearchResults";
import TimeLineUnits from "../components/timeline/TimeLineUnits";

import YearSearch from "../components/timeline/YearSearch";

export default function Timeline() {
    return (
        <>
            <div class="h-screen w-full flex">
                <div class="flex-2 mt-8">
                    <TimeLineUnits />
                </div>

                <div class="flex-1 place-content-center mt-10 mr-10">
                    <YearSearch />
                    <SearchResults />
                </div>
            </div>
        </>
    );
}
