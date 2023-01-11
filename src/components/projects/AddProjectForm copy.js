import React, { useEffect, useState } from "react";
import add from "../../assets/icons/projects/add.png";
/////////////////////////////////////////////////////////////////////
import { GrClose } from "react-icons/gr";
import CategoryCheckbox from "../common/checkbox/CategoryCheckbox";
import NormalCheckbox from "../common/checkbox/NormalCheckbox";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAddProjectMutation } from "../../features/projects/projectsApi";
////////////////////////////////////////////////////////////////////

export default function AddProjectForm() {
    const [showProjectBelong, setShowProjectBelong] = useState(false);
    const [showHasMember, setShowHasMember] = useState(false);
    const [showHasInstructor, setShowHasInstructor] = useState(false);
    // const [stackValue, setStackValue] = useState({
    //     MERN: "MERN",
    //     PERN: "PERN",
    //     Serverless: "Serverless",
    //     ReactNative: "ReactNative",
    //     Empty: "Empty",
    // });
    const [stackValue, setStackValue] = useState({
        MERN: "MERN",
        PERN: "PERN",
        Serverless: "Serverless",
        ReactNative: "ReactNative",
        Empty: "Empty",
    });
    // 🚧🚦🚧
    const [formData, setFormData] = useState({
        imageLink: [],
        projectTitle: "",
        githubLinkForFrontEnd: "",
        githubLinkForBackEnd: "",
        liveDemoLink: "",
        backEndServerLink: "",
        projectStatus: "On Going",
        projectDescription: "",
        hasProjectBelong: false,
        projectBelongType: "Course",
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
    const {
        imageLink,
        projectTitle,
        githubLinkForFrontEnd,
        githubLinkForBackEnd,
        liveDemoLink,
        backEndServerLink,
        projectStatus,
        projectDescription,
        hasProjectBelong,
        projectBelongType,
        projectBelongName,
        hasMembers,
        members,

        hasInstructor,
        instructorName,
        instructorProfileLink,
        technology,
        stack,
    } = formData;

    const navigate = useNavigate(); // home page e navigate korbo form submiit er pore
    const dispatch = useDispatch(); // form submit e addFeedback Action dispatch korte hobe

    const [error, setError] = useState("");

    const [addProject, { data, isLoading, isError, isSuccess }] =
        useAddProjectMutation();

    // console.log(
    //     "data from AddProjectForm.js after form Submission 📓 1️⃣😂😂😂",
    //     data
    // );

    // useEffect er moddhe hoy new page e navigate korte hobe .. othoba kono .. error hoile .. sheta dekhaite
    // hobe

    const handleHasProjectBelong = (e) => {
        // if (showProjectBelong) {
        //     setShowProjectBelong(!showProjectBelong);
        // }
        setShowProjectBelong(!showProjectBelong);
        // console.log("event of handleHasProjectBelong ", e);
        // console.log("showProjectBelong", showProjectBelong);
        e.target.value = !showProjectBelong;
        onChange(e);
    };
    const handleHasMember = (e) => {
        setShowHasMember(!showHasMember);

        e.target.value = !showHasMember;
        onChange(e);
    };
    const handleHasInstructor = (e) => {
        setShowHasInstructor(!showHasInstructor);

        e.target.value = !showHasInstructor;
        onChange(e);
    };
    // const [stackValue, setStackValue] = useState({
    //     MERN: "MERN",
    //     PERN: "PERN",
    //     Serverless: "Serverless",
    //     ReactNative: "ReactNative",
    //     Empty : "Empty",
    // });

    useEffect(() => {
        // console.log("data from login.js 📓 7️⃣", data);
        console.log(
            "showProjectBelong from AddProject Form.js 📓 7️⃣",
            showProjectBelong
        );

        // er moddhe amra chaile form focus korar o kaj korte pari .. userRef er maddhome..
        if (isError?.data) {
            console.log("Response Error found .. from login.js ");
            setError(isError.data);
        }
        if (data?.name) {
            //🔴🔵 && data?.user
            navigate("/");
        }
    }, [data, isError, navigate]);

    const handleStack = (e) => {
        console.log(e.target.checked);
        let updatedStack = "";
        if (e.target.checked === true) {
            updatedStack = e.target.value;
        } else {
            updatedStack = "";
        }
        console.log("updated stack : ", updatedStack);
        setFormData((prevState) => ({
            ...prevState,
            [stack]: updatedStack, // ei ta xoss way to play with form data
        }));
        console.log("---------------------");
        console.log(formData);
        console.log("---------------------");
    };

    // jokhon form e change hobe ..
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, // ei ta xoss way to play with form data
        }));

        console.log(
            "e.target.name : e.target.value",
            e.target.name,
            " : ",
            e.target.value
        );
    };

    /**
     *  handle member change ke onChange er moddhe korte chaile .. evabe korte hobe ..
     * if(["name", "email"].includes(e.target.name)) {
     *  // blah blah blah i mean
     * let membersInformation = [...formData.members];
        membersInformation[e.target.id][e.target.name] = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            members: membersInformation,
        }));
     * }else{
     * setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, // ei ta xoss way to play with form data
        }));
     * }
     *
     */

    const handleMemberChange = (e) => {
        console.log("handleMember Change else block");
        let membersInformation = [...formData.members];
        let value = undefined;
        if (e.target.files) {
            console.log("handleMember Change if block");
            console.log("called😆😆😆😆😆😆", e.target.value, e.target.files);
            value = e.target.files[0]; //  e.target.file[0] hobe 😎
        }
        value = e.target.value;
        membersInformation[e.target.id][e.target.name] = value; // e.target.value

        setFormData((prevState) => ({
            ...prevState,
            members: membersInformation,
        }));
        console.log("value : ", value);
    };

    // Dave Gray eta ke asynchronous function boltese ... ⏳ 28:08
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submission done !");

        //🔺
        console.log(
            "HandleSubmission button clicked of AddProject Form.js",
            imageLink,
            projectTitle,
            githubLinkForFrontEnd,
            githubLinkForBackEnd,
            liveDemoLink,
            backEndServerLink,
            projectStatus,
            projectDescription,
            hasProjectBelong,
            projectBelongType,
            projectBelongName,
            hasMembers,
            members,

            hasInstructor,
            instructorName,
            instructorProfileLink,
            technology,
            stack
        );
        setError("");
        addProject({
            imageLink,
            projectTitle,
            githubLinkForFrontEnd,
            githubLinkForBackEnd,
            liveDemoLink,
            backEndServerLink,
            projectStatus,
            projectDescription,
            hasProjectBelong,
            projectBelongType,
            projectBelongName,
            hasMembers,
            members,

            hasInstructor,
            instructorName,
            instructorProfileLink,
            technology,
            stack,
        });

        formData.imageLink = "";
        formData.projectTitle = "";
        formData.githubLinkForFrontEnd = "";
        formData.githubLinkForBackEnd = "";
        formData.liveDemoLink = "";
        formData.backEndServerLink = "";
        formData.projectStatus = "";
        formData.projectDescription = "";
        formData.hasProjectBelong = false;
        formData.projectBelongType = "";
        formData.projectBelongName = "";
        formData.hasMembers = false;

        //formData.members = "";
        formData.hasInstructor = false;
        formData.instructorName = "";
        formData.instructorProfileLink = "";
        formData.technology = "";
        formData.stack = "";
    };

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

                        <form
                            class="form"
                            method="post"
                            onSubmit={handleSubmit}
                        >
                            <h5 className="mt-4">Project Title</h5>
                            <input
                                type="text"
                                id="projectTitle"
                                name="projectTitle"
                                value={projectTitle}
                                onChange={onChange}
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                required
                            />
                            <h5 className="mt-4">Project Description</h5>
                            <textarea
                                type="text"
                                id="projectDescription"
                                name="projectDescription"
                                value={projectDescription}
                                onChange={onChange}
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                //required
                            />
                            <h5 className="mt-4">
                                Multiple Picture Upload For Carousel By Multer
                            </h5>
                            <input
                                type="file"
                                id="imageLink"
                                name="imageLink"
                                value={imageLink}
                                //onChange={onChange}
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                // required
                            />
                            <h5 className="mt-4">Github Link For Front-End</h5>
                            <input
                                type="text"
                                id="githubLinkForFrontEnd"
                                name="githubLinkForFrontEnd"
                                value={githubLinkForFrontEnd}
                                onChange={onChange}
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                //required
                            />
                            <h5 className="mt-4">Github Link For Back-End</h5>
                            <input
                                type="text"
                                id="githubLinkForBackEnd"
                                name="githubLinkForBackEnd"
                                value={githubLinkForBackEnd}
                                onChange={onChange}
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                //required
                            />
                            <h5 className="mt-4">Live Demo Link</h5>
                            <input
                                type="text"
                                id="liveDemoLink"
                                name="liveDemoLink"
                                value={liveDemoLink}
                                onChange={onChange}
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                //required
                            />
                            <h5 className="mt-4">Back-End Server Link</h5>
                            <input
                                type="text"
                                id="backEndServerLink"
                                name="backEndServerLink"
                                value={backEndServerLink}
                                onChange={onChange}
                                class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type here..."
                                //required
                            />
                            {/* /////////////////////////////////////// */}
                            <div class="flex mt-4 gap-x-3">
                                <h5>Project Status : </h5>
                                <input
                                    /////////// id="backEndServerLink"
                                    /////////// name="backEndServerLink"
                                    //////////// value={backEndServerLink}
                                    onChange={onChange}
                                    type="radio"
                                    id="projectStatus"
                                    name="projectStatus" //  eita shob gula te same hoite hobe ...
                                    value="On Going"
                                />
                                <label for="html">On Going</label>
                                <input
                                    type="radio"
                                    id="projectStatus"
                                    name="projectStatus"
                                    value="Finish"
                                    onChange={onChange}
                                />

                                <label for="css">Finish</label>
                                <input
                                    type="radio"
                                    id="Sold"
                                    name="projectStatus"
                                    value="Sold"
                                    onChange={onChange}
                                />

                                <label for="Sold">Sold</label>
                            </div>
                            <input
                                type="radio"
                                id="Archive"
                                name="projectStatus"
                                value="Archive"
                                onChange={onChange}
                                class="ml-[115px]"
                            />
                            <label for="Archive" class="ml-4">
                                Archive
                            </label>
                            {/* ////////////////////////////////// 🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗*/}

                            <div class="flex mt-4 gap-x-3 ml-[284px]">
                                <h5>Has Project Belong </h5>
                                <input
                                    id="hasProjectBelong"
                                    name="hasProjectBelong"
                                    type="checkbox"
                                    checked={showProjectBelong}
                                    onChange={handleHasProjectBelong}
                                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    // onChange={() =>
                                    //     setShowProjectBelong(!showProjectBelong)
                                    // }
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
                                            onChange={onChange}
                                        />
                                        <label for="Course">Course</label>
                                        <input
                                            type="radio"
                                            id="Team"
                                            name="projectBelongType"
                                            value="Team"
                                            onChange={onChange}
                                        />

                                        <label for="Team">Team</label>
                                        <input
                                            type="radio"
                                            id="Project"
                                            name="projectBelongType"
                                            value="Project"
                                            onChange={onChange}
                                        />

                                        <label for="Project">Project</label>
                                    </div>

                                    {/* ////////////////////////////////// */}
                                    <h5 className="mt-4">
                                        Project Belong Name
                                    </h5>
                                    <input
                                        type="text"
                                        id="projectBelongName"
                                        name="projectBelongName"
                                        value={projectBelongName}
                                        onChange={onChange}
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        //required
                                    />
                                </>
                            ) : (
                                <></>
                            )}
                            {/* ////////////////////////////////// */}
                            <div class="flex mt-4 ml-80 gap-x-3">
                                <h5>Has Members </h5>
                                <input
                                    id="hasMembers"
                                    name="hasMembers"
                                    type="checkbox"
                                    checked={showHasMember}
                                    onChange={handleHasMember}
                                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    // onChange={() =>
                                    //     setShowHasMember(!showHasMember)
                                    // }
                                />
                            </div>
                            {showHasMember ? (
                                <>
                                    {formData?.members?.map((member, index) => {
                                        let updatedIndex = "";
                                        if (index === 0) {
                                            updatedIndex = "1st";
                                        } else if (index === 1) {
                                            updatedIndex = "2nd";
                                        } else if (index === 2) {
                                            updatedIndex = "3rd";
                                        }
                                        return (
                                            <>
                                                <div key={index}>
                                                    <h5 className="mt-4">
                                                        <span>
                                                            {updatedIndex}
                                                        </span>{" "}
                                                        Member Name
                                                    </h5>
                                                    <input
                                                        type="text"
                                                        id={index}
                                                        name="memberName"
                                                        value={
                                                            member.memberName
                                                        }
                                                        onChange={
                                                            handleMemberChange
                                                        }
                                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Type Member Name..."
                                                    />
                                                    <h5 className="mt-4">
                                                        <span>
                                                            {updatedIndex}
                                                        </span>{" "}
                                                        Member Link
                                                    </h5>
                                                    <input
                                                        type="text"
                                                        id={index}
                                                        name="memberLink"
                                                        value={
                                                            member.memberLink
                                                        }
                                                        onChange={
                                                            handleMemberChange
                                                        }
                                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Type here..."
                                                    />

                                                    <h5 className="mt-4">
                                                        <span>
                                                            {updatedIndex}
                                                        </span>{" "}
                                                        Member Image Upload
                                                    </h5>
                                                    <input
                                                        type="file"
                                                        id={index}
                                                        name="memberImage"
                                                        value={
                                                            member.memberImage
                                                        }
                                                        onChange={
                                                            handleMemberChange
                                                        }
                                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Type here..."
                                                    />
                                                </div>
                                            </>
                                        );
                                    })}

                                    {/* members: [
            {
                memberName: "",
                memberImage: "",
                memberLink: "",
            },
        ], */}
                                    <div class="flex gap-x-3 ml-40">
                                        <button
                                            onClick={(e, index) => {
                                                e.preventDefault();
                                                formData.members.splice(
                                                    index,
                                                    1
                                                );
                                                setFormData({
                                                    members: [...members],
                                                });
                                            }}
                                            class=" bg-PrimaryColorDark p-1 my-2 rounded-md"
                                            // ml-72
                                        >
                                            Remove Member
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setFormData({
                                                    members: [
                                                        ...members,
                                                        {
                                                            memberName: "",
                                                            memberImage: "",
                                                            memberLink: "",
                                                        },
                                                    ],
                                                });
                                            }}
                                            class=" bg-PrimaryColorDark p-1 my-2 rounded-md"
                                            // ml-72
                                        >
                                            Add New Member
                                        </button>
                                    </div>

                                    <br />
                                    <hr />
                                    <br />
                                    {/* //////////////////////////////// */}
                                    {/* <h5 className="mt-4">2nd Member Name</h5>
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
                                    /> */}
                                </>
                            ) : (
                                <></>
                            )}

                            <div class="flex mt-4 gap-x-3 ml-80">
                                <h5>Has Instructor </h5>
                                <input
                                    id="hasInstructor"
                                    name="hasInstructor"
                                    type="checkbox"
                                    checked={showHasInstructor}
                                    onChange={handleHasInstructor}
                                    class="w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    // onChange={() =>
                                    //     setShowHasInstructor(!showHasInstructor)
                                    // }
                                />
                            </div>

                            {showHasInstructor ? (
                                <>
                                    <h5 className="mt-4">Instructor Name</h5>
                                    <input
                                        type="text"
                                        id="instructorName"
                                        name="instructorName"
                                        value={instructorName}
                                        onChange={onChange}
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        //required
                                    />
                                    <h5 className="mt-4">
                                        Instructor Profile Link
                                    </h5>
                                    <input
                                        type="text"
                                        id="instructorProfileLink"
                                        name="instructorProfileLink"
                                        value={instructorProfileLink}
                                        onChange={onChange}
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        //required
                                    />
                                </>
                            ) : (
                                <></>
                            )}
                            {/* ////////////////////////////////////////////////////////////////////////////////// */}
                            {/* <br />
                            <br /> 
                            <br />*/}

                            {/* 😎 MERN PERN React Node .. ei gula may be database theke ashbe  */}
                            <div class=" py-1 mt-12 flex">
                                <h5>Stack</h5>
                                <input
                                    id="stack"
                                    name="stack"
                                    type="checkbox"
                                    value="MERN"
                                    //checked={}
                                    onChange={handleStack}
                                    // style="ml-[130px]"
                                    class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                    // light -> text-gray-900
                                >
                                    MERN
                                </label>
                                <input
                                    id="stack"
                                    name="stack"
                                    type="checkbox"
                                    value="PERN"
                                    onChange={handleStack}
                                    class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                    PERN
                                </label>
                                <input
                                    id="stack"
                                    name="stack"
                                    type="checkbox"
                                    value="Serverless"
                                    onChange={handleStack}
                                    class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                    Serverless
                                </label>
                                <input
                                    id="stack"
                                    name="stack"
                                    type="checkbox"
                                    value="React Native"
                                    onChange={handleStack}
                                    class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                                >
                                    React Native
                                </label>
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

                            <button
                                class="btn w-auto h-[25px] ml-[400px] mt-3 box-content"
                                // htmlFor="my-modal-2"
                            >
                                {/* <label htmlFor="my-modal-2"> */}
                                post
                                {/* </label> */}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
