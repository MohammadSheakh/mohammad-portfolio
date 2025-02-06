import React, { useEffect, useState } from "react";
import add from "../../assets/icons/projects/add.png";
/////////////////////////////////////////////////////////////////////
import { GrClose } from "react-icons/gr";
import CategoryCheckbox from "../common/checkbox/CategoryCheckbox";
import NormalCheckbox from "../common/checkbox/NormalCheckbox";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAddProjectMutation } from "../../features/projects/projectsApi";
import useAdminCheck from "../../hooks/useAdminCheck";
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

  const { user } = useSelector((state) => state.auth) || {}; //////////////////////////
  console.log("user  from projects.js 4️⃣ ", user?.user?._id);
  const isAdmin = useAdminCheck(); //😎😎😎😎 true ba false return korbe ..///////////////////

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
    e.target.value = !showHasMember;
    onChange(e);
    setShowHasMember(!showHasMember);
    if (showHasMember === false) {
      setFormData((prevState) => ({
        ...prevState,
        members: [],
      }));
    }
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
    /************************    jhamela korle Project Edit er shomoy fix kore dite hobe jinish ta */
    if (e.target.checked === true) {
      if (e.target.value !== " ") {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.checked === false) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: "",
      }));
    }
  };

  const handleTechnology = (e) => {
    if (e.target.checked === true) {
      if (e.target.value !== " ") {
        setFormData((prevState) => ({
          ...prevState,
          technology: [...technology, e.target.value],
        }));
      }
    } else if (e.target.checked === false) {
      let technologyCopy = formData.technology;
      let updatedTechnology = technologyCopy.filter(
        (tech) => tech !== e.target.value
      );
      setFormData((prevState) => ({
        ...prevState,
        technology: updatedTechnology,
      }));
    }
  };

  // jokhon form e change hobe ..
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, // ei ta xoss way to play with form data
    }));

    // console.log(
    //     "e.target.name : e.target.value",
    //     e.target.name,
    //     " : ",
    //     e.target.value,
    //     formData
    // );
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
    let membersInformation = [...formData.members];
    let value;

    // Handle file input
    if (e.target.files) {
      value = e.target.files[0]; // Get the first file selected by the user
      console.log("Selected file:", value);
    } else {
      value = e.target.value; // For other form fields (text inputs, etc.)
    }

    // Get the index of the member and the field name
    const memberIndex = e.target.id; // The member's index in the members array
    const memberField = e.target.name; // The field to be updated (e.g., "memberName", "memberLink", "memberImage")

    // Access the specific member object from the array
    const member = membersInformation[memberIndex];

    // Update the specific field of the member object
    member[memberField] = value;

    // Reassign the updated member back into the array
    membersInformation[memberIndex] = member;

    // Update the form data state with the new member information
    setFormData((prevState) => ({
      ...prevState,
      hasMembers: true, // Indicating that the project has members
      members: membersInformation,
    }));

    console.log("Updated value:", value);
  };

  // Dave Gray eta ke asynchronous function boltese ... ⏳ 28:08
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submission done !");

    setError("");
    const myFormData = new FormData();

    // Conditionally append each value if it exists
    if (formData.projectTitle)
      myFormData.append("projectTitle", formData.projectTitle);
    if (formData.githubLinkForFrontEnd)
      myFormData.append(
        "githubLinkForFrontEnd",
        formData.githubLinkForFrontEnd
      );
    if (formData.githubLinkForBackEnd)
      myFormData.append("githubLinkForBackEnd", formData.githubLinkForBackEnd);
    if (formData.liveDemoLink)
      myFormData.append("liveDemoLink", formData.liveDemoLink);
    if (formData.backEndServerLink)
      myFormData.append("backEndServerLink", formData.backEndServerLink);
    if (formData.hasInstructor)
      myFormData.append("hasInstructor", formData.hasInstructor);
    if (formData.hasMembers)
      myFormData.append("hasMembers", formData.hasMembers);
    if (formData.hasProjectBelong)
      myFormData.append("hasProjectBelong", formData.hasProjectBelong);
    if (formData.instructorName)
      myFormData.append("instructorName", formData.instructorName);
    if (formData.instructorProfileLink)
      myFormData.append(
        "instructorProfileLink",
        formData.instructorProfileLink
      );
    if (formData.projectBelongName)
      myFormData.append("projectBelongName", formData.projectBelongName);
    if (formData.projectBelongType)
      myFormData.append("projectBelongType", formData.projectBelongType);
    if (formData.projectDescription)
      myFormData.append("projectDescription", formData.projectDescription);
    if (formData.projectStatus)
      myFormData.append("projectStatus", formData.projectStatus);

    // Append image if available and exists
    if (formData.imageLink && formData.imageLink.length > 0) {
      formData.imageLink.forEach((image, index) => {
        if (image) myFormData.append(`imageLink[${index}]`, image);
      });
    }

    // Append members (handling file uploads), only if members exist
    if (formData.members && formData.members.length > 0) {
      formData.members.forEach((member, index) => {
        if (member.memberName)
          myFormData.append(`members[${index}][memberName]`, member.memberName);
        if (member.memberLink)
          myFormData.append(`members[${index}][memberLink]`, member.memberLink);
        if (member.memberImage)
          myFormData.append(
            `members[${index}][memberImage]`,
            member.memberImage
          );
      });
    }

    // Append stack (array) if it exists
    if (formData.stack && formData.stack.length > 0) {
      formData.stack.forEach((item, index) => {
        if (item) myFormData.append(`stack[${index}]`, item);
      });
    }

    // Append technology (array) if it exists
    if (formData.technology && formData.technology.length > 0) {
      formData.technology.forEach((item, index) => {
        if (item) myFormData.append(`technology[${index}]`, item);
      });
    }

    // Sending the data via addProject function
    await addProject(myFormData);
    console.log("sent successful");
  };

  const printSubmit = () => {
    console.log(formData);
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

        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box relative min-h-[365px] h-[600px]">
            <label
              htmlFor="my-modal-2"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-navbarColorGray hover:bg-PrimaryColorLight"
            >
              <GrClose />
            </label>
            {/* --------------------------------------- */}
            <h3 className="text-lg font-bold text-center">New Project Form</h3>

            {/* 😎 Rich Text Editor Niye kaj korte hobe shamne  */}

            <form
              class="form"
              method="post"
              onSubmit={handleSubmit}
              encType="multipart/form-data" // sumit vai
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
                require
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
                //require
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
                // require
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
                //require
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
                //require
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
                //require
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
                //require
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
                  <h5 className="mt-4">Project Belong Name</h5>
                  <input
                    type="text"
                    id="projectBelongName"
                    name="projectBelongName"
                    value={projectBelongName}
                    onChange={onChange}
                    class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type here..."
                    //require
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
                            <span>{updatedIndex}</span> Member Name
                          </h5>
                          <input
                            type="text"
                            id={index}
                            name="memberName"
                            value={member.memberName}
                            onChange={handleMemberChange}
                            class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type Member Name..."
                          />
                          <h5 className="mt-4">
                            <span>{updatedIndex}</span> Member Link
                          </h5>
                          <input
                            type="text"
                            id={index}
                            name="memberLink"
                            value={member.memberLink}
                            onChange={handleMemberChange}
                            class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type here..."
                          />

                          <h5 className="mt-4">
                            <span>{updatedIndex}</span> Member Image Upload
                          </h5>
                          <input
                            type="file"
                            fileName="memberImage"
                            id={index}
                            name="memberImage"
                            onChange={handleMemberChange}
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
                        formData.members.splice(index, 1);
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
                        setFormData((prevState) => ({
                          ...prevState,
                          members: [
                            ...members,
                            {
                              memberName: "",
                              memberImage: "",
                              memberLink: "",
                            },
                          ],
                        }));
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
                                        require
                                    />
                                    <h5 className="mt-4">2nd Member Link</h5>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        require
                                    />

                                    <h5 className="mt-4">
                                        2nd Member Image Upload
                                    </h5>
                                    <input
                                        type="file"
                                        id="simple-search"
                                        class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Type here..."
                                        require
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
                    //require
                  />
                  <h5 className="mt-4">Instructor Profile Link</h5>
                  <input
                    type="text"
                    id="instructorProfileLink"
                    name="instructorProfileLink"
                    value={instructorProfileLink}
                    onChange={onChange}
                    class=" p-2  mt-3  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type here..."
                    //require
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
              <div class=" py-1 mt-12 flex ">
                <h5>Stack</h5>
                {/* Serverless */}
                {/* <input
                                    type="radio"
                                    id="MERN"
                                    name="stack" // eita shob gula te same hoite hobe ...
                                    value="MERN"
                                    onChange={onChange}
                                    class="ml-24"
                                />
                                <label class="ml-3" for="Course">
                                    MERN
                                </label>
                                <input
                                    type="radio"
                                    id="PERN"
                                    name="stack"
                                    value="PERN"
                                    onChange={onChange}
                                    class="ml-3"
                                />

                                <label for="Team" class="ml-3">
                                    PERN
                                </label>
                                <input
                                    type="radio"
                                    id="React Native"
                                    name="stack"
                                    value="React Native"
                                    onChange={onChange}
                                    class="ml-3"
                                />

                                <label class="ml-3" for="Project">
                                    React Native
                                </label> */}

                <input
                  id="stack"
                  name="stack"
                  type="checkbox"
                  value="MERN"
                  onChange={handleStack}
                  class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
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

              <div class=" py-1 mt-8 flex flex-wrap">
                <h5>Technology</h5>

                <input
                  id="technology"
                  name="technology"
                  type="checkbox"
                  value="React Js"
                  onChange={handleTechnology}
                  class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  React Js
                </label>

                <input
                  id="technology"
                  name="technology"
                  type="checkbox"
                  value="Express Js"
                  onChange={handleTechnology}
                  class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Express Js
                </label>

                <input
                  id="technology"
                  name="technology"
                  type="checkbox"
                  value="Mongo DB"
                  onChange={handleTechnology}
                  class="ml-3 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Mongo DB
                </label>

                <input
                  id="technology"
                  name="technology"
                  type="checkbox"
                  value="React Native"
                  onChange={handleTechnology}
                  class="ml-24 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  React Native
                </label>

                <input
                  id="technology"
                  name="technology"
                  type="checkbox"
                  value="Postgre SQL"
                  onChange={handleTechnology}
                  class="ml-2 w-4 h-4 mt-2 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Postgre SQL
                </label>

                {/* <NormalCheckbox
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
                                /> */}
              </div>

              {isAdmin ? (
                <>
                  <button
                    class="btn w-auto h-[25px] ml-[400px] mt-3 box-content"
                    // htmlFor="my-modal-2"
                  >
                    {/* <label htmlFor="my-modal-2"> */}
                    post
                    {/* </label> */}
                  </button>
                </>
              ) : (
                <>
                  <button
                    disabled
                    class=" btn w-auto h-[25px] ml-[400px] mt-3 box-content"
                    // htmlFor="my-modal-2"
                  >
                    {/* <label htmlFor="my-modal-2"> */}
                    post
                    {/* </label> */}
                  </button>
                  <button>
                    <h1 class="text-center bg-yellow-200 text-gray-800 mt-2 rounded-sm">
                      You need to be admin to post this
                    </h1>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
