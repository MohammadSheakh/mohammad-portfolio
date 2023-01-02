import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit, FiSave } from "react-icons/fi";

export default function StoryIndexName({ pageName, style }) {
    const [showTextBoxForEdit, setShowTextBoxForEdit] = useState(false);
    //const [showTextBoxForEdit, setShowTextBoxForEdit] = useState(false);

    const editButtonClick = () => {
        console.log("edit button clicked");
        setShowTextBoxForEdit(true);
    };

    const saveButtonClick = () => {
        console.log("save button clicked");
        setShowTextBoxForEdit(true);
    };
    const viewPageContent = () => {
        console.log("View Page Content!");
    };
    useEffect(() => {}, [showTextBoxForEdit]);
    return (
        <>
            {showTextBoxForEdit ? (
                <>
                    {/* text box shown here ..  */}
                    <div
                        class={`${style} group flex  bg-PrimaryColorDark hover:bg-PrimaryColorDarkHover  `}
                        // justify-evenly
                    >
                        {/* textbox for edit */}
                        <input type="text" class="w-36"></input>
                        {/* save button  */}
                        <button
                            class="w-[20px] h-[20px] mt-2 "
                            onClick={() => saveButtonClick()}
                        >
                            <i class="hidden group-hover:block">
                                {/*  */}
                                <FiSave />
                            </i>
                        </button>
                    </div>
                </>
            ) : (
                <>
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
                </>
            )}
        </>
    );
}
