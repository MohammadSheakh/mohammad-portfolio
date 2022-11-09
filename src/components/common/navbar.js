import React from "react";
import mohammadPictureLogo from "../../assets/icons/mohammadPictureLogo.jpg";
import NavLink from "./navLink";
import login from "../../assets/icons/login.png";

export default function Navbar() {
    return (
        <>
            <div class="  h-14 w-full bg-slate-600 grid grid-cols-12">
                <div class="col-span-4 w-full h-14 rounded-full group flex">
                    <img
                        class=" h-12 w-10 rounded-lg ml-4 mt-1   "
                        src={mohammadPictureLogo}
                        alt="Logo"
                    />
                    <div class="block h-8 w-0 rounded-md ml-2 mt-3 pl-2 pr-2 pt-1 pb-1 invisible group-hover:w-36 group-hover:visible transition-all duration-1000 hover:duration-0 delay-0 bg-slate-100  ">
                        <h2 class=" leading-3 text-sm w-36 invisible group-hover:visible transition-all duration-1000 hover:delay-400 ">
                            Mohammad Sheakh BSc in CSE
                        </h2>
                    </div>
                </div>
                <div class="col-span-7 w-full flex ml-56 mt-3 h-10 relative">
                    <NavLink>Home</NavLink>
                    <NavLink>Projects</NavLink>
                    <NavLink>Timeline</NavLink>
                    <NavLink>Story</NavLink>
                    <NavLink>DashBoard</NavLink>
                </div>
                <div class="col-span-1 w-full flex mt-3 h-10">
                    <div class=" bg-slate-800 h-10 rounded-full w-auto">
                        <img src={login} class=" h-10 w-auto " />
                    </div>
                </div>
            </div>
        </>
    );
}
