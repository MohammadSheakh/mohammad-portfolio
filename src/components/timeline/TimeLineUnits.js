import React from "react";
import SearchResult from "./SearchResults";
import TimeLineUnit from "./TimeLineUnit";
import UpdateTimeLineModal from "./UpdateTimeLineModal";
import YearSearch from "./YearSearch";

export default function TimeLineUnits() {
    return (
        <>
            <div>
                <UpdateTimeLineModal />{" "}
            </div>

            <div class="w-full mt-10">
                <ol class="relative border-l border-gray-200 dark:border-gray-700 w-3/4  mx-auto mt-3">
                    <TimeLineUnit
                        imageLink="https://live.staticflickr.com/4902/46677505604_40eaa38ea5_b.jpg"
                        imageAltText="car drag"
                        time="just now"
                        timelineText="Car is moving so fast ... "
                        timelineLink="fsdsds"
                        link="https://twitter.com/"
                        linkTargetValue="_blank"
                    />
                    <TimeLineUnit
                        imageLink="https://live.staticflickr.com/4902/46677505604_40eaa38ea5_b.jpg"
                        imageAltText="car drag"
                        time="2 hours ago"
                        timelineText="Hi ya'll! I wanted to share a webinar zeroheight is
                having regarding how to best measure "
                        timelineDetailsText="Hi ya'll! I wanted to share a webinar zeroheight is
                having regarding how to best measure your design
                system! This is the second session of our new
                webinar series on #DesignSystems discussions where
                we'll be speaking about Measurement."
                        timelineLink="fsdsds"
                        details="true"
                        link="https://twitter.com/"
                        linkTargetValue="_blank"
                    />
                    <TimeLineUnit
                        imageLink="https://live.staticflickr.com/4902/46677505604_40eaa38ea5_b.jpg"
                        imageAltText="car drag"
                        time="3 hours ago"
                        timelineText="Car is moving so fast ... "
                        timelineLink="fsdsds"
                        link="https://twitter.com/"
                        linkTargetValue="_blank"
                    />
                </ol>
            </div>
        </>
    );
}
