import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectCategory() {
    return (
        <>
            <div class="flex justify-center">
                {/* gap-10 border-2 border-box w-auto py-5 */}
                {/*
                2xl:px-[30%] -> normal -> 100% 
                xl:px-[25%] -> 120% - 150% 
                lg:px-[20%] ->  160px - 180% - 230% 
                md:px-[10%]
                sm:px-[1%] -> */}
                <div class="flex flex-wrap justify-start sm:justify-center border-2 gap-10  border-box w-auto py-5 px-5 2xl:mx-20 ">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </>
    );
}
