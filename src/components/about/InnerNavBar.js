import React from "react";
import { Link } from "react-router-dom";
import Nav from "../common/Nav";

export default function InnerNavBar() {
    return (
        <>
            <div class="w-auto h-[67px]  pb-2 sm:h-auto bg-footerColor flex justify-center">
                <Link to="/about">
                    <button class="relative  mt-2 text-orange group w-auto  ml-3 min-h-8 h-12 sm:h-auto leading-6 rounded-md pl-2 pr-2 bg-PureWhite hover:shadow hover:shadow-homeColor">
                        Professional Info
                        <span>
                            {" "}
                            <div
                                class={` group-hover:w-[108px] text-PureWhite    w-0 h-0.5 absolute bottom-[-8px] rounded-xl   bg-PureWhite hover:invisible  group-hover:visible transition-all duration-1000 hover:duration-75 delay-0`}
                            ></div>
                        </span>
                    </button>
                </Link>

                <Link to="/dashboard">
                    <button class="relative mt-2 text-orange group w-auto ml-3 min-h-8 h-12 sm:h-auto leading-6 rounded-md pl-2 pr-2 bg-PureWhite hover:shadow hover:shadow-homeColor">
                        Personal Info
                        <span>
                            {" "}
                            <div
                                class={` group-hover:w-[85px] text-PureWhite    w-0 h-0.5 absolute bottom-[-8px] rounded-xl   bg-PureWhite hover:invisible  group-hover:visible transition-all duration-1000 hover:duration-75 delay-0`}
                            ></div>
                        </span>
                    </button>
                </Link>

                <Link path="/about">
                    <button class="relative mt-2 text-orange group w-auto ml-3 min-h-8  h-12 sm:h-auto leading-6 rounded-md pl-2 pr-2 bg-PureWhite hover:shadow hover:shadow-homeColor">
                        Gallery
                        <span>
                            {" "}
                            <div
                                class={` group-hover:w-[50px] text-PureWhite    w-0 h-0.5 absolute bottom-[-8px] rounded-xl   bg-PureWhite hover:invisible  group-hover:visible transition-all duration-1000 hover:duration-75 delay-0`}
                            ></div>
                        </span>
                    </button>
                </Link>

                <Link path="/about">
                    <button class="relative mt-2 text-orange group w-auto ml-3 min-h-8 h-12 sm:h-auto leading-6 rounded-md pl-2 pr-2 bg-PureWhite hover:shadow hover:shadow-homeColor">
                        Appointment Time
                        <span>
                            {" "}
                            <div
                                class={` group-hover:w-[131px] text-PureWhite    w-0 h-0.5 absolute bottom-[-8px] rounded-xl   bg-PureWhite hover:invisible  group-hover:visible transition-all duration-1000 hover:duration-75 delay-0`}
                            ></div>
                        </span>
                    </button>
                </Link>
                {/* whitespace-nowrap items-center*/}
            </div>
        </>
    );
}
