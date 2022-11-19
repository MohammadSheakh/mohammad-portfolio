import React from "react";
import Feedback from "../components/home/Feedback";
import Intro from "../components/home/Intro";
import SkillSet from "../components/home/SkillSet";

export default function Home() {
    return (
        <>
            {/* <div class="bg-slate-400 dark:bg-slate-800">home</div> */}
            <Intro />
            <SkillSet />
            <Feedback />
        </>
    );
}
