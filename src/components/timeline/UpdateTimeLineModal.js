import React, { useEffect, useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import RichTextEditor from "./RichTextEditor/RichTextEditor";
import TextEditor from "./RichTextEditor/RichTextEditor";
import TimePicker from "./TimePicker";

export default function UpdateTimeLineModal({ checked }) {
    const [timelineDetailsvisible, setTimelineDetailsVisible] = useState(false);
    const [linkOpenInNewPage, setLinkOpenInNewPage] = useState(false);
    const [richTextEditor, setRichTextEditor] = useState(false);

    // useEffect(() => {
    //     setLinkOpenInNewPage(true);
    // }, [linkOpenInNewPage]);

    console.log("linkOpenInNewPage", linkOpenInNewPage);
    return (
        <div>
            <label
                htmlFor="my-modal-3"
                className="ml-64 h-[55px] w-[190px] btn mt-4 p-2 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite "
            >
                Update Your Timeline
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative min-h-[375px] h-[540px]">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-navbarColorGray hover:bg-PrimaryColorLight"
                    >
                        {/* ✕ */}
                        <GrClose />
                    </label>
                    {/* --------------------------------------- */}
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user! Update
                    </h3>
                    {/* button for rich text editor open and close */}
                    <div class="absolute top-14 left-[320px]">
                        <input
                            id="default-checkbox3"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => setRichTextEditor(!richTextEditor)}
                        />
                        <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Open Rich Text Editor
                        </label>
                    </div>
                    {richTextEditor ? (
                        <>
                            <RichTextEditor />
                            <label
                                htmlFor="my-modal-3"
                                className="text-center p-2 rounded-md mt-4 w-14  absolute  ml-[390px] bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite "
                            >
                                Post
                            </label>
                        </>
                    ) : (
                        <>
                            <form action="">
                                <h5 className="py-4">Timeline Heading</h5>
                                <textarea
                                    type="text"
                                    placeholder="Type short informative heading..."
                                    class="p-2 w-[450px] resize-y"
                                />
                                {/* a checkbox to show details form */}
                                <div class="absolute top-48 left-80">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={() =>
                                            setTimelineDetailsVisible(
                                                !timelineDetailsvisible
                                            )
                                        }
                                    />
                                    <label
                                        for="default-checkbox"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Show details form
                                    </label>
                                </div>
                                {timelineDetailsvisible && (
                                    <>
                                        <h5 className="py-4">
                                            Timeline Details
                                        </h5>
                                        <textarea class=" resize-y rounded-md w-[450px]"></textarea>
                                    </>
                                )}

                                <h5 className="py-4">Link Title</h5>
                                <input
                                    type="text"
                                    placeholder="Give Link Title"
                                    class="p-2 w-[450px] "
                                />
                                <input
                                    type="text"
                                    placeholder="Paste link here..."
                                    class="p-2 w-[450px] mt-3 "
                                />
                                {/* open link in new page  */}
                                <div class="absolute top-[330px] left-80">
                                    <input
                                        id="default-checkbox1"
                                        type="checkbox"
                                        value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={() =>
                                            setLinkOpenInNewPage(
                                                !linkOpenInNewPage
                                            )
                                        }
                                    />
                                    <label
                                        for="default-checkbox1"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Open link in new tab
                                    </label>
                                </div>
                            </form>

                            {/* time - automatic / set by user / scheduled
                             */}

                            <TimePicker />

                            {/* <p className="py-4 mt-1">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p> */}

                            <label
                                htmlFor="my-modal-3"
                                className="text-center p-2 rounded-md mt-4 w-14  absolute mt-[-30px] ml-[390px] bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite "
                            >
                                Post
                            </label>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
