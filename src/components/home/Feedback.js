import React, { useState } from "react";
import CategoryCheckbox from "../common/checkbox/CategoryCheckbox";

export default function Feedback() {
    const [showInputBox, setShowInputBox] = useState(false);

    return (
        <div class="min-h-screen max-h-auto flex w-full bg-PrimaryColorDark">
            <div class="h-auto w-auto mx-auto mt-[30px] ">
                <h1 class="text-center p-5 font-bold text-xl">
                    Share Your thoughts and creative idea with me
                </h1>

                <form class="form">
                    <div
                        className={` w-[200px] ml-[40%] mb-5  w-auto text-center  mt-[6px] p-1 px-2 rounded-md   bg-PrimaryColorDark hover:bg-PrimaryColorDarkHover hover:border-2  `}
                    >
                        {/* ml-[425px] */}
                        <label
                            for="default-checkbox3"
                            class=" mr-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            act as anonymous
                        </label>
                        <input
                            id="default-checkbox2"
                            type="checkbox"
                            value=""
                            class="  w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => {
                                setShowInputBox(!showInputBox);
                                console.log("showInputBox", showInputBox);
                            }}
                        />
                    </div>
                    <div class="flex flex-col gap-y-6 border-2  rounded-xl p-4  ml-9 min-w-[200px] max-w-[500px]">
                        {!showInputBox ? (
                            <>
                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                        Your Name :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        placeholder="Type your name here..."
                                        class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                        Facebook ID :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        placeholder="Paste facebook id link here... "
                                        class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                        Phone Number :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        placeholder="Give Country code correctly.. "
                                        class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px] mb-2 mt-1 w-auto px-3">
                                        Email :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        placeholder="Type Email ID here... "
                                        class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                        Present Address :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        placeholder="Present Address... "
                                        class="p-2  h-10 w-[450px]  resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                        Permanent Address :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        placeholder="Permanent Address... "
                                        class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px] mb-2 mt-1 w-auto px-3">
                                        Reference :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        placeholder="How do i know you..."
                                        class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    {/* class="ml-[180px]" */}
                                    {/* // feedback box------------------- */}

                                    <textarea
                                        type="text"
                                        id="simple-search"
                                        placeholder="Write feedback here... "
                                        class="p-2 mb-14 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                    <button
                                        htmlFor="my-modal-3"
                                        className="text-center p-2 rounded-md w-14  absolute mt-[-35px] ml-[390px] bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite "
                                    >
                                        Post
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    {/* class="ml-[180px]" */}
                                    {/* // feedback box------------------- */}

                                    <textarea
                                        type="text"
                                        id="simple-search"
                                        placeholder="Write feedback here... "
                                        class="p-2 mb-14 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                    <button
                                        htmlFor="my-modal-3"
                                        className="text-center p-2 rounded-md w-14  absolute mt-[-35px] ml-[390px] bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite "
                                    >
                                        Post
                                    </button>
                                </div>
                            </>
                        )}
                        {/* // act as anonymous checkBox button */}
                    </div>
                </form>
            </div>
        </div>
    );
}
