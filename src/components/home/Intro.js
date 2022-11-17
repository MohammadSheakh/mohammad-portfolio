import React from "react";
import Typewriter from "typewriter-effect";
import mohammad from "../../assets/images/home/mohammad.jpg";
import Links from "./Links";

export default function Intro() {
    return (
        <>
            <div class="h-screen w-full flex  bg-homeColor dark:bg-PrimaryColorDark ">
                <div class="relative w-full  flex-1">
                    {/* bg-PureWhite columns-6*/}
                    <div class="absolute font-extrabold text-5xl  border-2 rounded-lg mr-4 p-3 mt-44 ml-14 ">
                        {/* mt-44 ml-14 */}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Assalamu Alaikum ! ")
                                    .callFunction(() => {
                                        console.log("String typed out!");
                                    })
                                    .pauseFor(700) // 2500
                                    .deleteAll()
                                    .typeString(
                                        "I'm Mohammad Bin Ab. Jalil Sheakh. "
                                    )
                                    .pauseFor(700)
                                    .typeString(
                                        "Front-end and Back-end Developer... "
                                    )
                                    .callFunction(() => {
                                        console.log("All strings were deleted");
                                    })
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
                <div class="relative flex-1">
                    {/* columns-6 */}
                    <img
                        class="absolute mohammadImageSize mt-[120px] h-[540px] w-auto ml-[320px] rounded-xl"
                        src={mohammad}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
