import React, { useEffect, useState } from "react";

import StoryIndexName from "./StoryIndexName";

export default function SingleStory() {
    const [pages, setPages] = useState(["প্রথম পাতা", "দ্বিতীয় পাতা"]);
    // const pageNames = ["প্রথম পাতা", "দ্বিতীয় পাতা"];

    const addNewPage = () => {
        console.log("new page added !");
        //pageNames.push("Untitled page");
        setPages([...pages, "Untitled page"]); // prottekta page er shathe ekta id o thakbe ..
        //console.log(pageNames);
    };
    let indexContent = [];
    useEffect(() => {
        indexContent = pages.map((pageNam) => (
            <StoryIndexName style="rounded-tl-xl" pageName={pageNam} />
        ));
        console.log("index content  : ", indexContent);
    }, [addNewPage, pages, indexContent]);
    return (
        <>
            <div class="w-full h-[600px] mt-[85px]  flex justify-center rounded-tl-xl">
                <div class="flex flex-row justify-start mx-auto h-[90%] w-[90%]  bg-homeColor rounded-xl ">
                    <div class=" bg-tooltip h-[100%] w-[15%] rounded-l-xl ">
                        {/* sidebar section */}
                        {/* <button
                            class="rounded-tl-xl h-[35px] w-full bg-PrimaryColorDark hover:bg-PrimaryColorDarkHover border-slate-50  "
                            onClick={() => addNewPage()}
                        >
                            <span>প্রথম পাতা</span>
                        </button> */}
                        {pages.map((pageNam) => (
                            <StoryIndexName
                                style="rounded-tl-xl"
                                pageName={pageNam}
                            />
                        ))}
                        {/* <StoryIndexName pageName="দ্বিতীয় পাতা" /> */}
                        {/* <StoryIndexName pageName="দ্বিতীয় পাতা" /> */}
                        <button
                            class="h-[35px] w-full bg-PrimaryColorDark hover:bg-PrimaryColorDarkHover border-slate-50  "
                            onClick={() => addNewPage()}
                        >
                            <span>Create New Page </span>
                        </button>
                    </div>
                    <div class=" p-3"></div>
                </div>
            </div>
        </>
    );
}
