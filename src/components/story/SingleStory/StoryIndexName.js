import React from "react";
import { FiEdit } from "react-icons/fi";

export default function StoryIndexName({ pageName, style }) {
    const editButtonClick = () => {
        console.log("edit button clicked");
    };
    const viewPageContent = () => {
        console.log("View Page Content!");
    };
    return (
        <div
            class={`${style} group flex bg-PrimaryColorDark hover:bg-PrimaryColorDarkHover  justify-evenly`}
        >
            <button
                class=" h-[35px] w-[90px]  "
                onClick={() => viewPageContent()}
            >
                <span class="group-hover:pt-1">{pageName}</span>
            </button>
            <button
                class="w-[20px] h-[20px] mt-2 "
                onClick={() => editButtonClick()}
            >
                <i class="hidden group-hover:block">
                    {/*  */}
                    <FiEdit />
                </i>
            </button>
        </div>
    );
}
