import React from "react";
import ProjectCardCarrousel from "./ProjectCardCarrousel";

export default function ProjectCard() {
    return (
        <>
            <div class="border-2 h-96 w-[500px]">
                <div>
                    {/* // carousal div */}
                    <ProjectCardCarrousel />
                </div>
                <div>{/* // title and button */}</div>
                <div>{/* // description */}</div>
                <div>{/* // team name, member , Instructor name  */}</div>
                <div>
                    {/* // love react ,comment , see documentation button */}
                </div>
            </div>
        </>
    );
}
