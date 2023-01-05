import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    feedbacksApi,
    useGetAFeedbackQuery,
} from "../../../features/feedbacks/feedbacksApi";

export default function FeedbackSearch() {
    const [searchData, setSearchData] = useState({
        name: "",
        email: "",
        phoneNumber: 0,
        reference: "",
        facebookId: "",
    });
    let { name, email, phoneNumber, reference, facebookId } = searchData; // destructure kore nilam
    const [formData, setFormData] = useState({ search: "" });
    const { search } = formData;
    const navigate = useNavigate(); // home page e navigate korbo form submiit er pore
    const dispatch = useDispatch(); // form submit e addFeedback Action dispatch korte hobe

    const [error, setError] = useState("");

    // API call er hook call korte hobe ..

    const { data, isLoading, isError, isSuccess } = useGetAFeedbackQuery();

    //console.log("data from FeedbackSearch.js 📓 1️⃣😂😂😂", data);

    // useEffect er moddhe hoy new page e navigate korte hobe .. othoba kono .. error hoile .. sheta dekhaite
    // hobe
    useEffect(() => {
        // er moddhe amra chaile form focus korar o kaj korte pari .. userRef er maddhome..
        if (isError?.data) {
            console.log("Response Error found .. from login.js ");
            setError(isError.data);
        }
        if (data?.name) {
            //🔴🔵 && data?.user
            navigate("/dashboard");
        }
    }, [data, isError, navigate]);

    // jokhon form e change hobe ..
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, // ei ta xoss way to play with form data
        }));
        //😎
        // tokhon e search shuru hoye jabe .. mane API call hobe
        // form er data regex diye analysis korte hobe ..
        // phone number hoile .. phone number variable er moddhe rekhe
        // process korte hobe ..
        /// email hoile email hishebe process korte hobe ..
        /// onno data hoile .. shevabe process korte hobe ...
        console.log(e.target.value);
    };

    // Dave Gray eta ke asynchronous function boltese ... ⏳ 28:08
    const handleSubmit = (e) => {
        e.preventDefault();
        //🔺
        console.log("Handle Submit Button clicked of Login.js", search);

        setError("");

        // console.log(
        //     "from FeedbackSearch.js => before ",
        //     name,
        //     email,
        //     phoneNumber,
        //     reference,
        //     facebookId
        // );

        //////////////////////////////😎aro better way te korte hobe .. setSearchData()  er maddhome korar try korte hobe
        name = search;
        email = search;
        //////////////////////////////////😎 search er value jodi number hoy .. tailei shudhu matro phoneNumber e assign hobe
        phoneNumber = 0;
        reference = search;
        facebookId = search;

        console.log(
            "from FeedbackSearch.js => after 🤗",
            name,
            email,
            phoneNumber,
            reference,
            facebookId
        );

        // manual request pathanor format ta ..
        dispatch(
            feedbacksApi.endpoints.getAFeedback.initiate({
                name,
                email,
                phoneNumber,
                reference,
                facebookId,
            })
        );

        // clear it up after search
        formData.search = "";

        // searchData.name = "";
        // searchData.email = "";
        // searchData.phoneNumber = 0;
        // searchData.reference = "";
        // searchData.facebookId = "";
    };

    return (
        <>
            <form
                class="flex items-center mt-[40px] form"
                method="post"
                onSubmit={handleSubmit}
            >
                <label for="simple-search" class="sr-only">
                    Search
                </label>
                <div class="relative w-[250px]">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        value={search}
                        class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                        onChange={onChange}
                    />
                </div>
                <button
                    type="submit"
                    class="p-2.5   ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>
        </>
    );
}
