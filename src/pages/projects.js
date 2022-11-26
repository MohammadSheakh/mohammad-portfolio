import React from "react";
import ProjectCategory from "../components/projects/ProjectsCategory/ProjectCategory";
import SearchProject from "../components/projects/SearchProject";

export default function Projects() {
    return (
        <>
            <div class="  h-auto w-full bg-PrimaryColorDark ">
                {/* mt-10 mr-10 */}
                {/*
                2xl:px-[30%] -> normal -> 100% 
                xl:px-[25%] -> 120% - 150% 
                lg:px-[20%] ->  160px - 180% - 230% 
                md:px-[10%]
                sm:px-[1%] -> */}
                <div class="lg:container  sm:px-[1%] md:px-[10%] lg:px-[20%] xl:px-[25%] 2xl:px-[30%] py-10">
                    <SearchProject />
                </div>
                <div class="w-auto ">
                    <ProjectCategory />
                </div>
            </div>
        </>
    );
}
