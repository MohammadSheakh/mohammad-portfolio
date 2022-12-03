import React, { useEffect, useState } from "react";
import mohammadPictureLogo from "../../assets/icons/mohammadPictureLogo.jpg";
import Nav from "./Nav";
import loginIcon from "../../assets/icons/loginIcon.png";
import dayIcon from "../../assets/icons/dayIcon.png";
import nightIcon from "../../assets/icons/nightIcon.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    // const [theme, setTheme] = useState("dark");
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        // to check prefered theme
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // jokhon e theme er value change hobe .. tokhon e eita ghotbe ..
    }, [theme]);

    const handleThemeSwitch = () => {
        console.log(
            "-------------------------------------------------- btn clicked "
        );
        setTheme(theme === "dark" ? "Light" : "dark");
    };

    return (
        <>
            <div class="  h-14 w-full bg-navbarColorGray grid grid-cols-12 fixed z-50">
                {/* bg-slate-600 */}
                <div class="col-span-4 w-[210px] h-14 rounded-full group flex">
                    <Link to="/">
                        <img
                            class=" h-12 w-10 rounded-full ml-4 mt-1   hover:ring-4 hover:ring-PrimaryColorDark"
                            //  //ring color change here

                            src={mohammadPictureLogo}
                            alt="Logo"
                        />
                    </Link>

                    <div class="block h-8 w-[0px] rounded-md ml-2 mt-3 pl-2 pr-2 pt-1 pb-1 invisible group-hover:w-36 group-hover:visible transition-all duration-1000 hover:duration-0 delay-0 bg-PrimaryColorLight  ">
                        <h2 class=" text-orange leading-3 text-sm w-36 invisible group-hover:visible transition-all duration-1000 hover:delay-400 ">
                            Mohammad Sheakh BSc in CSE
                        </h2>
                    </div>
                </div>
                <div class="col-span-6 w-full flex ml-56 mt-3 h-10 relative">
                    <Nav path="/" styleProps="group-hover:w-10 text-PureWhite">
                        Home
                    </Nav>
                    <Nav
                        path="/about"
                        styleProps="group-hover:w-[71px] text-PureWhite"
                    >
                        About
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
                    <Nav path="/achievements" styleProps="group-hover:w-24">
                        Achievements
                    </Nav>
                    <Nav path="/dashboard" styleProps="group-hover:w-20">
                        DashBoard
                    </Nav>
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
                        <Link
                            to="/login"
                            class=" bg-slate-800 h-10 w-10 rounded-full"
                        >
                            {/* bg-slate-800 */}
                            <img src={loginIcon} class=" h-10 w-auto " />
                        </Link>
                        <span class="relative h-10 w-0 top-1  p-1 rounded-md invisible group-hover:w-36 group-hover:visible bg-tooltip group-hover:text-PureWhite">
                            Author Sign in
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
