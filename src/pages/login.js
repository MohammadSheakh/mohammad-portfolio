//rfce
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApi";
import { userLoggedIn } from "../features/auth/authSlice.js"; // action creator niye ashlam ..
// userLoggedIn 🔴 etar to kono kaj nai .. shumit vai eta niye kono kaj kore nai
// Link ta o niye ashte hobe .. // ekta Error page design korte hobe .. shetao niye ashte hobe ..

function Login() {
    // component load hoile jeno user field e focus kore .. shejonno amra useRef use korte pari ..
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const { email, password } = formData; // form data theke destructure kore nilam

    const navigate = useNavigate(); // home page e navigate kore dite hobe .. login er pore ..
    const dispatch = useDispatch(); // form submit e login action dispatch korte hobe ..

    // API call er hook call korte hobe .. othoba useState theke data niye eshe dekhate hobe ..
    // endpoints ta return kore amader ke ..
    const [login, { data, isLoading, error: responseError }] =
        useLoginMutation();
    // 🔺
    console.log("data from login.js 📓 1️⃣", data);

    // useEffect er moddhe hoy new page e navigate korte hobe .. othoba kono .. error hoile .. sheta dekhaite
    // hobe
    useEffect(() => {
        console.log("data from login.js 📓 7️⃣", data);
        // er moddhe amra chaile form focus korar o kaj korte pari .. userRef er maddhome..
        if (responseError?.data) {
            console.log("Response Error found .. from login.js ");
            setError(responseError.data);
            navigate("/"); //😎 error handle kora hoy nai password vul hoile .. login er por
        }
        if (data?.accessToken && data) {
            //🔴🔵 && data?.user
            navigate("/projects");
        }
    }, [data, responseError, navigate]);

    // jokhon form e change hobe ..
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, // ei ta xoss way to play with form data
        }));
    };

    // Dave Gray eta ke asynchronous function boltese ... ⏳ 28:08
    const handleSubmit = (e) => {
        //🔺 console.log(
        //     "Handle Submit Button clicked of Login.js",
        //     email,
        //     password
        // );
        e.preventDefault();

        setError("");

        login({
            email,
            password,
        });
    };

    return (
        <>
            <div class="w-auto h-[700px] flex justify-center ">
                <div class="h-[450px] w-[400px] sm:w-[500px]  xl-w-auto box-border border-2 rounded-xl bg-cardBG mt-[150px] flex justify-center">
                    <form
                        method="post"
                        class=" h-auto w-auto my-auto"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="py-4 text-2xl text-center ">
                            Login Form For Mohammad Bin Ab. Jalil Sheakh
                        </h1>
                        {/* <textarea
                            type="text"
                            placeholder=""
                            class="p-2 w-[450px] resize-y"
                        /> */}
                        <div className="ml-14">
                            <h1 className="py-2 text-lg  mt-11 text-left ">
                                Email :
                            </h1>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                class=" block  p-2.5   w-[365px]   bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                // resize-y
                                placeholder="Type email here..."
                                required
                                onChange={onChange}
                            />

                            <h1 className="py-2 text-lg  mt-3 text-left ">
                                Password :
                            </h1>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                class=" block  p-2.5  w-[365px]  bg-gray-700 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                // resize-y
                                placeholder="Type password here..."
                                required
                                onChange={onChange}
                            />

                            <button
                                type="submit"
                                class="btn w-auto h-[25px] ml-[300px]  mt-3 box-content bg-footerColor hover:bg-PrimaryColorDarkHover"
                            >
                                {" "}
                                post
                            </button>
                            <p> {error}</p>
                        </div>

                        {/* a checkbox to show details form */}
                        {/* <div class="flex justify-end mt-2">
                            
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={() =>
                                    setTimelineDetailsVisible(
                                        !timelineDetailsvisible
                                    )
                                }
                            />
                            <label
                                for="default-checkbox"
                                class="ml-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                            >
                                Show details form
                            </label>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
