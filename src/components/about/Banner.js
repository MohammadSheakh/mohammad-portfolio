import React from "react";
import { FaGraduationCap, FaLaptopCode, FaUniversity } from "react-icons/fa";
import sheakh from "../../assets/images/about/sheakh.png";
import sheakh1 from "../../assets/images/about/sheakh1.jpg";

export default function Banner() {
    return (
        <>
            <div>
                <div class="w-auto min-h-[400px] max-h-auto bg-PrimaryColorDarkHover">
                    <div class="flex flex-wrap w-auto min-h-[250px]">
                        {/* profile picture section */}
                        <div class=" mt-[75px]">
                            <img
                                src={sheakh1}
                                alt=""
                                class=" w-[190px]  mt-7 ml-20 sm:ml-[90%] md:ml-[160%] lg:ml-[100%] rounded-xl"
                            />
                        </div>
                        {/* Text Section  */}
                        <div class="ml-[2%] mt-[30px] sm:mt-[40px] md:mt-[40px] lg:mt-[140px] xl:ml-[14%] md:ml-[20%]  xs-[1px]">
                            <h1 class="text-4xl ">
                                Mohammad Bin Ab. Jalil Sheakh
                            </h1>
                            <div class="flex gap-x-2 mt-3">
                                <i>
                                    <FaGraduationCap class="text-2xl mt-1" />
                                </i>{" "}
                                <h1 class="text-2xl">
                                    {" "}
                                    Studies BSc in CSE at{" "}
                                    <a
                                        href="https://www.aiub.edu/"
                                        target="_blank"
                                        class="text-blue-500"
                                    >
                                        American International University of
                                        Bangladesh{" "}
                                    </a>{" "}
                                </h1>
                            </div>
                            <div class="flex gap-x-2 mt-3 mb-[10%]">
                                <i>
                                    <FaLaptopCode class="text-2xl mt-1" />
                                </i>{" "}
                                <h1 class="text-2xl"> Web Developer </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
