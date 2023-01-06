import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddFeedbackMutation } from "../../features/feedbacks/feedbacksApi";
import CategoryCheckbox from "../common/checkbox/CategoryCheckbox";
import FeedbackStatus from "./FeedbackStatus";

export default function Feedback() {
    const [showInputBox, setShowInputBox] = useState(false);
    const [showMoreForm, setShowMoreForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        feedback: "",
        status: "",
        facebookId: "",
        phoneNumber: "",
        email: "",
        presentAddress: "",
        permanentAddress: "",
        reference: "",
    });

    const {
        name,
        feedback,
        status,
        facebookId,
        phoneNumber,
        email,
        presentAddress,
        permanentAddress,
        reference,
    } = formData;

    const navigate = useNavigate(); // home page e navigate korbo form submiit er pore
    const dispatch = useDispatch(); // form submit e addFeedback Action dispatch korte hobe

    const [error, setError] = useState("");

    // API call er hook call korte hobe ..
    // error : responseError .. transform kore nise ..
    const [addFeedback, { data, isLoading, isError, isSuccess }] =
        useAddFeedbackMutation();

    console.log("data from Feedback.js 📓 1️⃣😂😂😂", data);

    // useEffect er moddhe hoy new page e navigate korte hobe .. othoba kono .. error hoile .. sheta dekhaite
    // hobe
    useEffect(() => {
        console.log("data from login.js 📓 7️⃣", data);
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

    // jokhon form e change hobe ..
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, // ei ta xoss way to play with form data
        }));
    };

    // Dave Gray eta ke asynchronous function boltese ... ⏳ 28:08
    const handleSubmit = (e) => {
        e.preventDefault();
        //🔺
        console.log(
            "Handle Submit Button clicked of Login.js",
            name,
            feedback,
            status,
            facebookId,
            phoneNumber,
            email,
            presentAddress,
            permanentAddress,
            reference
        );
        /************************************************************************************************
         *                                name , feedback ei duita field jodi baje kono text contain
         *          kore .. tahole amra take feedback post korte dibo na ..............
         *          like pornography related word / bad language / obscenities
         *
         *      egula filter kore felte hobe ...
         *
         *
         *  post successfull houar pore .. ekta confirmation dite hobe ..😎
         */

        setError("");

        addFeedback({
            // addFeedback mutation theke function ta ashbe .. mane endpoint
            name,
            feedback,
            status,
            facebookId,
            phoneNumber,
            email,
            presentAddress,
            permanentAddress,
            reference,
        });

        formData.name = "";
        formData.feedback = "";
        formData.status = "";
        formData.facebookId = "";
        formData.phoneNumber = "";
        formData.email = "";
        formData.presentAddress = "";
        formData.permanentAddress = "";
        formData.reference = "";
    };

    return (
        <div class="min-h-screen max-h-auto flex w-full bg-PrimaryColorDark">
            <div class="h-auto w-auto mx-auto mt-[30px] mb-16">
                <h1 class="text-gray-200 dark:text-gray-300 text-center p-5 font-bold text-xl">
                    Share Your thoughts and creative idea with me
                </h1>

                <form class="form" method="post" onSubmit={handleSubmit}>
                    <div
                        className={` w-[420px] flex ml-[40%] mb-5  w-auto text-center  mt-[6px]     bg-PrimaryColorDark   `}
                    >
                        {/* ml-[425px] */}
                        <div class="hover:bg-PrimaryColorDarkHover hover:border-2 rounded-md p-1 px-2">
                            <label
                                for="default-checkbox3"
                                class=" mr-2  text-sm font-medium text-gray-300 dark:text-gray-300 "
                            >
                                act as anonymous
                            </label>
                            <input
                                id="checkbox1"
                                type="checkbox"
                                value=""
                                class="  w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={() => {
                                    setShowInputBox(!showInputBox);
                                }}
                            />
                        </div>

                        <div class="hover:bg-PrimaryColorDarkHover hover:border-2 rounded-md p-1 px-2">
                            <label
                                for="default-checkbox3"
                                class=" mr-2 ml-3  text-sm font-medium text-gray-300 dark:text-gray-300"
                            >
                                give more information
                            </label>
                            <input
                                id="checkbox2"
                                type="checkbox"
                                value=""
                                class="  w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={() => {
                                    setShowMoreForm(!showMoreForm);
                                    if (showMoreForm && showInputBox) {
                                        //😪 mane hocche jodi act as anonymous checked / true thake .. and
                                        // tar por jodi give more information true kora hoy ..
                                        // taile act as anonymous false hoye jabe ..
                                        //setShowInputBox(false);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    {/* responsive 🖖📐 */}
                    <div class="flex flex-col gap-y-6 border-2  rounded-xl p-4  ml-9 min-w-[200px] max-w-[350px] sm:max-w-[600px] min-h-[320px]  lg:max-w-[600px] border-gray-200">
                        {!showInputBox ? (
                            <>
                                <div class="flex flex-wrap">
                                    <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3 text-gray-200 dark:text-gray-400 ">
                                        Your Name :{" "}
                                    </h1>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        placeholder="Type your name here..."
                                        class="p-2  h-10 w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        // bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                                {showMoreForm ? (
                                    <>
                                        <div class="flex flex-wrap">
                                            <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                                Facebook ID :{" "}
                                            </h1>
                                            <input
                                                type="text"
                                                id="facebookId"
                                                name="facebookId"
                                                value={facebookId}
                                                placeholder="Paste facebook id link here... "
                                                class="p-2  h-10 w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div class="flex flex-wrap">
                                            <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                                Phone Number :{" "}
                                            </h1>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={phoneNumber}
                                                placeholder="Give Country code correctly.. "
                                                class="p-2  h-10 w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div class="flex flex-wrap">
                                            <h1 class="h-[30px] w-[180px] mb-2 mt-1 w-auto px-3">
                                                Email :{" "}
                                            </h1>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                placeholder="Type Email ID here... "
                                                class="p-2  h-10 w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div class="flex flex-wrap">
                                            <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                                Present Address :{" "}
                                            </h1>
                                            <input
                                                type="text"
                                                id="presentAddress"
                                                name="presentAddress"
                                                value={presentAddress}
                                                placeholder="Present Address... "
                                                class="p-2  h-10 w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div class="flex flex-wrap">
                                            <h1 class="h-[30px] w-[180px]  mb-2 mt-1 w-auto px-3">
                                                Permanent Address :{" "}
                                            </h1>
                                            <input
                                                type="text"
                                                id="permanentAddress"
                                                name="permanentAddress"
                                                value={permanentAddress}
                                                placeholder="Permanent Address... "
                                                class="p-2  h-10 w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>

                                        <div class="flex flex-wrap">
                                            <h1 class="h-[30px] w-[180px] mb-2 mt-1 w-auto px-3">
                                                Reference :{" "}
                                            </h1>
                                            <input
                                                type="text"
                                                id="reference"
                                                name="reference"
                                                value={reference}
                                                placeholder="How do i know you..."
                                                class="p-2  h-10 w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                                onChange={onChange}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}

                                <div>
                                    {/* // feedback box------------------- */}

                                    <textarea
                                        type="text"
                                        id="feedback"
                                        name="feedback"
                                        value={feedback}
                                        placeholder="Write feedback here... "
                                        class="p-2 mb-0  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <textarea
                                        type="text"
                                        id="feedback"
                                        name="feedback"
                                        value={feedback}
                                        placeholder="Write feedback here... "
                                        class="p-2 mb-14  w-[450px] resize-y bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                            </>
                        )}

                        <div class="flex justify-between relative">
                            {/* flex justify-between */}
                            <div class="w-[75%]">
                                <FeedbackStatus />
                            </div>

                            <div class="ml-[85%] mt-[5px] absolute">
                                <button
                                    //htmlFor="my-modal-3"
                                    type="submit"
                                    className="text-white dark:text-white border-2  bg-cardBorder text-center p-2 rounded-md w-14  absolute  bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite "
                                    // mt-[-35px]
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
