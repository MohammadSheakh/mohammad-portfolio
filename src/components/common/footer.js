import React from "react";
import FooterList from "./FooterList";

export default function Footer() {
    return (
        <>
            <div class="h-[300px] w-full bg-footerColor text-gray-200 dark:text-gray-300  flex flex-wrap gap-x-10 justify-center pt-20">
                <div>
                    <ul>
                        <FooterList listTitle="Mohammad Sheakh Profile" />
                        <FooterList listTitle="Policies" />
                        <FooterList listTitle="FAQ" />
                        <FooterList
                            listTitle="Join My Discord Server"
                            listLink="https://discord.gg/SZhdBb4AhN"
                        />
                    </ul>
                </div>
                <div class="divider-horizontal bg-PrimaryColorDark w-[2px] h-[120px] rounded-md"></div>
                <div>
                    <ul>
                        <FooterList listTitle="My Clients " />
                        <FooterList listTitle="Contact me " />
                        <FooterList listTitle="Jobs" />
                        <FooterList listTitle="Join My Discord Community" />
                    </ul>
                </div>
                <div class="divider-horizontal bg-PrimaryColorDark w-[2px] h-[120px] rounded-md"></div>
                <div>
                    <ul>
                        <FooterList listTitle="Web Application Development" />
                        <FooterList listTitle="App Development" />
                    </ul>
                </div>
                <div class="divider-horizontal bg-PrimaryColorDark w-[2px] h-[120px] rounded-md"></div>
                <div>
                    <ul>
                        <FooterList listTitle="Follow Me on Facebook !" />
                    </ul>
                </div>
            </div>
            <div class="h-[27px] w-full  bg-PrimaryColorDarkHover text-gray-200 dark:text-gray-300  flex flex-wrap gap-x-10 justify-center">
                <h1>
                    <a
                        href="https://www.facebook.com/mohammadsheakh101/"
                        target="_blank"
                        class="text-blue-400"
                    >
                        Mohammad Sheakh
                    </a>{" "}
                    @ 2022-2023 All Rights Reserved{" "}
                </h1>
            </div>
        </>
    );
}
