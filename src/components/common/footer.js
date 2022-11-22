import React from "react";
import FooterList from "./FooterList";

export default function Footer() {
    return (
        <div class="h-[300px] w-full bg-footerColor flex gap-x-10 justify-center pt-20">
            <div>
                <ul>
                    <FooterList listTitle="Mohammad Sheakh Profile" />
                    <FooterList listTitle="Policies" />
                    <FooterList listTitle="FAQ" />
                    <FooterList listTitle="Join My Discord Server" />
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
    );
}
