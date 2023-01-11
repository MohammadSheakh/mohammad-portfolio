import React from "react";
import Banner from "../components/about/Banner";
import InnerNavBar from "../components/about/InnerNavBar";

export default function About() {
    return (
        <>
            <div class="w-auto h-screen bg-PrimaryColorDark">
                <Banner />
                <InnerNavBar />
            </div>
        </>
    );
}
