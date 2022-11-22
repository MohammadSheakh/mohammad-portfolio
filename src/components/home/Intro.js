import React from "react";
import Typewriter from "typewriter-effect";
import mohammad from "../../assets/images/home/mohammad.jpg";
import Links from "./Links";

export default function Intro() {
    return (
        <>
            <div class=" min-h-[70vh] max-h-auto pb-[40px] w-full flex flex-row xs:flex-col flex-wrap bg-PrimaryColorDark dark:bg-PrimaryColorDark ">
                <div class="relative w-auto  flex-1">
                    {/* bg-PureWhite columns-6 w-full place-items-center*/}
                    <div
                        class="absolute font-normal text-3xl sm:font-semibold sm:text-3xl   md:font-bold md:text-2xl lg:font-medium lg:text-4xl xl:font-bold xl:text-3xl 2xl:font-extrabold 2xl:text-5xl       border-2 rounded-lg mt-44 2xl:mx-[7%] 2xl:px-[2%] xl:mx-[9%] xl:px-[2%] lg:mx-[9%] lg:px-[2%] md:mx-[8%] md:px-[2%] sm:ml-[2%] sm:mr-[20%] sm:px-[2%] 
                        "

                        //     2xl:font-[7%] 2xl:text-[2%] xl:font-[9%] xl:text-[2%] lg:font-[9%] lg:text-[2%] md:font-[8%] md:text-[2%]
                        // sm:font-[8%] sm:text-[2%]
                    >
                        {/* mr-4  ml-14 p-3  2xl:px-[2%]  */}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Assalamu Alaikum ! ")
                                    // .callFunction(() => {
                                    //     // console.log("String typed out!");
                                    // })
                                    .pauseFor(700) // 2500
                                    .deleteAll()
                                    .typeString(
                                        "I'm Mohammad Bin Ab. Jalil Sheakh. "
                                    )
                                    .pauseFor(700)
                                    .typeString(
                                        "Front-end and Back-end Developer... "
                                    )

                                    .pauseFor(700)
                                    .deleteChars(3)
                                    .typeString(
                                        " Currently working on MERN Stack"
                                    )
                                    .start();
                            }}
                        />
                    </div>
                    <div class="mt-[450px]">
                        <Links />
                    </div>
                </div>
                <div class="relative flex-1 ">
                    {/* 2xl:px-[30%] 2xl:mx-[30%] xl:px-[25%] xl:mx-[25%]
                    lg:px-[20%] lg:mx-[20%] md:px-[10%] md:mx-[10%] sm:px-[1%]
                    sm:mx-[1%] */}

                    {/*
                    2xl:mx-[7%] 2xl:px-[2%] xl:mx-[9%] xl:px-[2%] lg:mx-[9%] lg:px-[2%] md:mx-[8%] md:px-[2%]
                    sm:mx-[8%] sm:px-[2%]
                    */}

                    {/* // 2xl:px-[30%] -> normal -> 100%
                        // xl:px-[25%] -> 120% - 150%
                        // lg:px-[20%] ->  160px - 180% - 230%
                        // md:px-[10%]
                        // sm:px-[1%] -> */}
                    <img
                        // h-[540px] w-[251px] .. ei value gula mohammadImageSize er moddhe define kora ase ..
                        // class="lg:ml-[320px] md:ml-[340px]  md:ml-[270px] sm:ml-[10%] "
                        class="mohammadImageSize mt-[120px] lg:ml-[320px] md:mx-[270px] rounded-xl  "
                        src={mohammad}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
