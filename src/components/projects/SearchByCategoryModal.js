import React, { useEffect, useState } from "react";
import { BsUiChecksGrid } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import CategoryCheckbox from "../common/checkbox/CategoryCheckbox";
import NormalCheckbox from "../common/checkbox/NormalCheckbox";

export default function SearchByCategoryModal() {
    return (
        <div>
            <label
                htmlFor="my-modal-3"
                className="ml-64 h-[45px] w-[150px] btn mt-4 p-1 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite "
            >
                Search By Category
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative min-h-[365px] h-[600px]">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-navbarColorGray hover:bg-PrimaryColorLight"
                    >
                        {/* ✕ */}
                        <GrClose />
                    </label>
                    {/* --------------------------------------- */}
                    <h3 className="text-lg font-bold">
                        Congratulations random Internet user! Search
                    </h3>
                    {/* button for rich text editor open and close */}
                    {/* <div class="absolute top-14 left-[320px]">
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
                    </div> */}

                    <form action="">
                        <h5 className="mt-4">Project Title</h5>
                        {/* <input
                            type="text"
                            placeholder="Type here..."
                            class="p-2 w-[450px] mt-3 "
                        /> */}

                        <input
                            type="text"
                            id="simple-search"
                            class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            //
                            // p-2 mt-2 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                            placeholder="Type here..."
                            required
                        />

                        <h5 className="py-3">Project Category</h5>
                        <div class="absolute top-40 left-40">
                            <input
                                id="default-checkbox1"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                // light -> bg-gray-100
                                // onChange={() =>
                                //     setTimelineDetailsVisible(
                                //         !timelineDetailsvisible
                                //     )
                                // }
                            />
                            <label
                                for="default-checkbox"
                                class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                // light -> text-gray-900
                            >
                                Small
                            </label>
                        </div>
                        <div class="absolute top-40 left-[230px]">
                            <input
                                id="default-checkbox2"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                // onChange={() =>
                                //     setTimelineDetailsVisible(
                                //         !timelineDetailsvisible
                                //     )
                                // }
                            />
                            <label
                                for="default-checkbox3"
                                class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                            >
                                Medium
                            </label>
                        </div>
                        <div class="absolute top-40 left-[320px]">
                            <input
                                id="default-checkbox2"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                // onChange={() =>
                                //     setTimelineDetailsVisible(
                                //         !timelineDetailsvisible
                                //     )
                                // }
                            />
                            <label
                                for="default-checkbox3"
                                class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                            >
                                Large
                            </label>
                        </div>
                        <div class="relative">
                            <h5 className="py-1">Project Category</h5>
                            <div className="h-[30px] w-32 ml-[130px] text-center p-1 rounded-md mt-4   absolute mt-[-30px]  bg-PrimaryColorDark  hover:bg-PrimaryColorDarkHover hover:border-2  box-border ">
                                {/* <label className="label cursor-pointer">
                                <span className="label-text">Remember me</span>
                                <input
                                    type="checkbox"
                                    //checked
                                    className="checkbox"
                                />
                            </label> */}
                                <label
                                    for="default-checkbox3"
                                    class="mr-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                    E Commerce
                                </label>
                                <input
                                    id="default-checkbox2"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    // onChange={() =>
                                    //     setTimelineDetailsVisible(
                                    //         !timelineDetailsvisible
                                    //     )
                                    // }
                                />
                            </div>
                            <div className="h-[30px] w-32 ml-[270px] text-center p-1 rounded-md mt-4   absolute mt-[-30px]  bg-PrimaryColorDark  hover:bg-PrimaryColorDarkHover hover:border-2  box-border ">
                                <label
                                    for="default-checkbox3"
                                    class="mr-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                    Management
                                </label>
                                <input
                                    id="default-checkbox2"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    // onChange={() =>
                                    //     setTimelineDetailsVisible(
                                    //         !timelineDetailsvisible
                                    //     )
                                    // }
                                />
                            </div>

                            <div className="h-[30px] w-auto ml-[270px] text-center p-1 rounded-md  mt-[6px]  bg-PrimaryColorDark   hover:bg-PrimaryColorDarkHover hover:border-2  box-border ">
                                <label
                                    for="default-checkbox3"
                                    class="mr-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                    Hospital Management
                                </label>
                                <input
                                    id="default-checkbox2"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    // onChange={() =>
                                    //     setTimelineDetailsVisible(
                                    //         !timelineDetailsvisible
                                    //     )
                                    // }
                                />
                            </div>

                            <div className="h-[30px] w-[205px] ml-[270px] text-center p-1 rounded-md  mt-[6px]  bg-PrimaryColorDark   hover:bg-PrimaryColorDarkHover hover:border-2  box-border">
                                <label
                                    for="default-checkbox3"
                                    class="mr-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                    Apartment Management
                                </label>
                                <input
                                    id="default-checkbox2"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    // onChange={() =>
                                    //     setTimelineDetailsVisible(
                                    //         !timelineDetailsvisible
                                    //     )
                                    // }
                                />
                            </div>
                            {/* <CategoryCheckbox
                                checkboxTitle="Apartment Management"
                                style="h-[30px] top-[32px]  ml-[270px]  box-border"
                            /> */}

                            <CategoryCheckbox
                                checkboxTitle="Society Management"
                                style="h-[30px] top-[32px]  ml-[270px]  box-border"
                            />

                            <CategoryCheckbox
                                checkboxTitle="Hotel Management"
                                style="h-[30px] top-[32px]  ml-[270px]  box-border"
                            />

                            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                            <CategoryCheckbox
                                checkboxTitle="Nonprofit Website"
                                style=" absolute top-[32px]  ml-[113px] box-content"
                            />

                            <CategoryCheckbox
                                checkboxTitle="Event Website"
                                style="  absolute top-[68px]  ml-[113px] box-content"
                            />
                            <CategoryCheckbox
                                checkboxTitle="Online Portal"
                                style="  absolute top-[104px]  ml-[113px] box-content"
                            />

                            <CategoryCheckbox
                                checkboxTitle="Personal website"
                                style="  absolute top-[140px]  ml-[113px] box-content"
                            />
                            <CategoryCheckbox
                                checkboxTitle="Government website"
                                style="  absolute top-[180px]  ml-[150px] box-content"
                            />
                        </div>
                    </form>

                    {/* <p className="py-4 mt-10">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p> */}
                    {/* <div class="mt-10 flex relative">
                        <h5 className="py-1 mt-3">Price Range</h5>
                        <div class=" flex relative">
                            <input
                                type="text"
                                placeholder="0.."
                                class="p-2 w-[90px] mt-3  ml-3"
                            />
                            <h1 class="mx-3 mt-4">-</h1>
                            <input
                                type="text"
                                placeholder="4 lakhs"
                                class="p-2 w-[90px] mt-3 "
                            />
                        </div>
                    </div> */}
                    <div class=" py-1 mt-12 flex">
                        <h5>Stack</h5>
                        <NormalCheckbox
                            style="ml-[130px]"
                            checkBoxText="MERN"
                        />
                        <NormalCheckbox
                            style="ml-[220px]"
                            checkBoxText="PERN"
                        />
                        <NormalCheckbox
                            style="ml-[300px]"
                            checkBoxText="Serverless"
                        />
                        <NormalCheckbox
                            style="ml-[130px] mt-7"
                            checkBoxText="React Native"
                        />
                    </div>

                    <div class=" py-1 mt-8 flex">
                        <h5>Technology</h5>
                        <NormalCheckbox
                            style="ml-[130px]"
                            checkBoxText="React Js"
                        />
                        <NormalCheckbox
                            style="ml-[220px]"
                            checkBoxText="Express Js"
                        />
                        <NormalCheckbox
                            style="ml-[320px]"
                            checkBoxText="Mongo DB"
                        />
                        <NormalCheckbox
                            style="ml-[130px] mt-7"
                            checkBoxText="React Native"
                        />

                        <NormalCheckbox
                            style="ml-[250px] mt-7"
                            checkBoxText="Postgre SQL"
                        />
                    </div>

                    <label
                        htmlFor="my-modal-3"
                        class="btn w-auto h-[25px] ml-[400px] mt-3 box-content"
                    >
                        {" "}
                        post
                    </label>
                </div>
            </div>
        </div>
    );
}
