import React, { useState } from "react";
import add from "../../assets/icons/projects/add.png";
/////////////////////////////////////////////////////////////////////
import { GrClose } from "react-icons/gr";
import CategoryCheckbox from "../common/checkbox/CategoryCheckbox";
import NormalCheckbox from "../common/checkbox/NormalCheckbox";
////////////////////////////////////////////////////////////////////

export default function AddProjectForm() {
    const [showProjectBelong, setShowProjectBelong] = useState(false);
    const [showHasMember, setShowHasMember] = useState(false);
    const [showHasInstructor, setShowHasInstructor] = useState(false);
    // 🚧🚦🚧
    const [formData, setFormData] = useState({
        imageLink: [],
        projectTitle: "",

        githubLinkForFrontEnd: "",
        githubLinkForBackEnd: "",
        liveDemoLink: "",
        backEndServerLink: "",
        projectStatus: "",
        projectDescription: "",
        hasProjectBelong: false,
        projectBelongType: "",
        projectBelongName: "",
        hasMembers: false,
        members: [
            {
                memberName: "",
                memberImage: "",
                memberLink: "",
            },
        ],
        hasInstructor: false,
        instructorName: "",
        instructorProfileLink: "",
        technology: [],
        stack: "",
    });
    return (
        <>
            <div>
                <button class="h-36 w-36 relative border-2 border-rose-500 rounded-xl ">
                    <label htmlFor="my-modal-2" className=" ">
                        <img
                            src={add}
                            htmlFor="my-modal-2"
                            class="h-32 w-32 absolute top-[6px] left-[5px] "
                            alt=""
                        />
                    </label>
                </button>

                <input
                    type="checkbox"
                    id="my-modal-2"
                    className="modal-toggle"
                />
                <div className="modal ">
                    <div className="modal-box relative min-h-[365px] h-[600px]">
                        <label
                            htmlFor="my-modal-2"
                            className="btn btn-sm btn-circle absolute right-2 top-2 bg-navbarColorGray hover:bg-PrimaryColorLight"
                        >
                            <GrClose />
                        </label>
                        {/* --------------------------------------- */}
                        <h3 className="text-lg font-bold text-center">
                            New Project Form
                        </h3>

                        {/* 😎 Rich Text Editor Niye kaj korte hobe shamne  */}

                        <form action="">
                            <h5 className="mt-4">Project Title</h5>
                            <input
                                type="text"
                                id="simple-search"
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            <h5 className="mt-4">Project Description</h5>
                            <textarea
                                type="text"
                                id="simple-search"
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            <h5 className="mt-4">
                                Multiple Picture Upload For Carousel By Multer
                            </h5>
                            <input
                                type="file"
                                id="simple-search"
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            <h5 className="mt-4">Github Link For Front-End</h5>
                            <input
                                type="text"
                                id="simple-search"
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            <h5 className="mt-4">Github Link For Back-End</h5>
                            <input
                                type="text"
                                id="simple-search"
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            <h5 className="mt-4">Live Demo Link</h5>
                            <input
                                type="text"
                                id="simple-search"
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            <h5 className="mt-4">Back-End Server Link</h5>
                            <input
                                type="text"
                                id="simple-search"
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            {/* /////////////////////////////////////// */}
                            <div class="flex mt-4 gap-x-3">
                                <h5>Project Status : </h5>
                                <input
                                    type="radio"
                                    id="html"
                                    name="projectStatus" //  eita shob gula te same hoite hobe ...
                                    value="On Going"
                                />
                                <label for="html">On Going</label>
                                <input
                                    type="radio"
                                    id="css"
                                    name="projectStatus"
                                    value="Finish"
                                />

                                <label for="css">Finish</label>
                                <input
                                    type="radio"
                                    id="Sold"
                                    name="projectStatus"
                                    value="Sold"
                                />

                                <label for="Sold">Sold</label>
                            </div>
                            <input
                                type="radio"
                                id="Archive"
                                name="projectStatus"
                                value="Archive"
                                class="ml-[115px]"
                            />
                            <label for="Archive" class="ml-4">
                                Archive
                            </label>
                            {/* ////////////////////////////////// */}
                            <div class="flex mt-4 gap-x-3 ml-[284px]">
                                <h5>Has Project Belong </h5>
                                <input
                                    id="default-checkbox1"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={() =>
                                        setShowProjectBelong(!showProjectBelong)
                                    }
                                />
                            </div>
                            {/* ////////////////////////////////// */}
                            {showProjectBelong ? (
                                <>
                                    <div class="flex mt-4 gap-x-3">
                                        <h5>Project Belong Type : </h5>
                                        <input
                                            type="radio"
                                            id="Course"
                                            name="projectBelongType" // eita shob gula te same hoite hobe ...
                                            value="Course"
                                        />
                                        <label for="Course">Course</label>
                                        <input
                                            type="radio"
                                            id="Team"
                                            name="projectBelongType"
                                            value="Team"
                                        />

                                        <label for="Team">Team</label>
                                        <input
                                            type="radio"
                                            id="Project"
                                            name="projectBelongType"
                                            value="Project"
                                        />

                                        <label for="Project">Project</label>
                                    </div>

                                    {/* ////////////////////////////////// */}
                                    <h5 className="mt-4">
                                        Project Belong Name
                                    </h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />
                                </>
                            ) : (
                                <></>
                            )}
                            {/* ////////////////////////////////// */}
                            <div class="flex mt-4 ml-80 gap-x-3">
                                <h5>Has Members </h5>
                                <input
                                    id="default-checkbox1"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={() =>
                                        setShowHasMember(!showHasMember)
                                    }
                                />
                            </div>
                            {showHasMember ? (
                                <>
                                    <h5 className="mt-4">1st Member Name</h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />
                                    <h5 className="mt-4">1st Member Link</h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />

                                    <h5 className="mt-4">
                                        1st Member Image Upload
                                    </h5>
                                    <input
                                        type="file"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />
                                    {/* //////////////////////////////// */}
                                    <h5 className="mt-4">2nd Member Name</h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />
                                    <h5 className="mt-4">2nd Member Link</h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />

                                    <h5 className="mt-4">
                                        2nd Member Image Upload
                                    </h5>
                                    <input
                                        type="file"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />
                                </>
                            ) : (
                                <></>
                            )}

                            <div class="flex mt-4 gap-x-3 ml-80">
                                <h5>Has Instructor </h5>
                                <input
                                    id="default-checkbox1"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={() =>
                                        setShowHasInstructor(!showHasInstructor)
                                    }
                                />
                            </div>

                            {showHasInstructor ? (
                                <>
                                    <h5 className="mt-4">Instructor Name</h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />
                                    <h5 className="mt-4">
                                        Instructor Profile Link
                                    </h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        required
                                    />
                                </>
                            ) : (
                                <></>
                            )}
                            {/* ////////////////////////////////////////////////////////////////////////////////// */}
                            {/* <br />
                            <br /> 
                            <br />*/}

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
                                htmlFor="my-modal-2"
                                class="btn w-auto h-[25px] ml-[400px] mt-3 box-content"
                            >
                                post
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
