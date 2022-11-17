import React, { useEffect, useState } from "react";
import mohammadPictureLogo from "../../assets/icons/mohammadPictureLogo.jpg";
import Nav from "./Nav";
import loginIcon from "../../assets/icons/loginIcon.png";
import dayIcon from "../../assets/icons/dayIcon.png";
import nightIcon from "../../assets/icons/nightIcon.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    console.log("boom3");
    const [theme, setTheme] = useState("light");
    // useEffect(() => {
    //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // }, []);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            console.log("added");
            console.log(
                "---------------------------------------------------------"
            );
        } else {
            document.documentElement.classList.remove("dark");
            console.log("removed");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        console.log("clicked");
        console.log(theme);
        setTheme(theme === "dark" ? "Light" : "dark");
    };

    return (
        <>
            <div class="  h-14 w-full bg-navbarColorGray grid grid-cols-12">
                {/* bg-slate-600 */}
                <div class="col-span-4 w-full h-14 rounded-full group flex">
                    <img
                        class=" h-12 w-10 rounded-full ml-4 mt-1   "
                        src={mohammadPictureLogo}
                        alt="Logo"
                    />
                    <div class="block h-8 w-0 rounded-md ml-2 mt-3 pl-2 pr-2 pt-1 pb-1 invisible group-hover:w-36 group-hover:visible transition-all duration-1000 hover:duration-0 delay-0 bg-PrimaryColorLight  ">
                        <h2 class=" text-orange leading-3 text-sm w-36 invisible group-hover:visible transition-all duration-1000 hover:delay-400 ">
                            Mohammad Sheakh BSc in CSE
                        </h2>
                    </div>
                </div>
                <div class="col-span-6 w-full flex ml-56 mt-3 h-10 relative">
                    {/* <Link to="/">
                        <button class="text-orange group w-auto ml-3 h-7 leading-6 rounded-md pl-2 pr-2 bg-PureWhite hover:shadow hover:shadow-homeColor">
                            Home
                            <span>
                                {" "}
                                <div class="w-0 h-0.5 absolute bottom-1 rounded-xl group-hover:w-10 text-PureWhite  bg-PureWhite hover:invisible  group-hover:visible transition-all duration-1000 hover:duration-75 delay-0"></div>
                            </span>
                        </button>
                    </Link> */}

                    {/* <Nav path="/" styleProps="group-hover:w-10 text-PureWhite">
                        Home
                    </Nav>

                    <Nav path="/projects" styleProps="group-hover:w-14">
                        Projects
                    </Nav>
                    <Nav path="/timeline" styleProps="group-hover:w-14">
                        Timeline
                    </Nav>
                    <Nav path="/story" styleProps="group-hover:w-10">
                        Story
                    </Nav>
                    <Nav path="/dashboard" styleProps="group-hover:w-20">
                        DashBoard
                    </Nav> */}
                    {/* <button as={Link} to="/about"></button> */}
                </div>
                <div class="col-span-2 w-full flex mt-2 h-10 ">
                    <div class="group h-10 w-auto  absolute ">
                        <button
                            class="bg-PrimaryColorLight h-10 w-10" // bg-slate-100
                            onClick={handleThemeSwitch}
                        >
                            <img src={nightIcon} class="  bg-navbarColorGray" />
                            {/* // bg-slate-600 */}
                        </button>
                        <span class=" relative  top-6 right-16  p-1 rounded-md invisible  group-hover:text-PureWhite group-hover:visible bg-tooltip ">
                            Night mode
                        </span>
                    </div>
                    <div class="group h-10 rounded-full w-auto ml-14 absolute ">
                        <div class=" bg-slate-800 h-10 w-10 rounded-full">
                            {/* bg-slate-800 */}
                            <img src={loginIcon} class=" h-10 w-auto " />
                        </div>
                        <span class="relative h-10 w-0 top-1  p-1 rounded-md invisible group-hover:w-36 group-hover:visible bg-tooltip group-hover:text-PureWhite">
                            Author Sign in
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
