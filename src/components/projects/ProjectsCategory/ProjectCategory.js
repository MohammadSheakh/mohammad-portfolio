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
                    <ProjectCard
                        projectTitle="Medi-Care Web Application Documentation"
                        projectDescription="A hospital cabin, Diagnostic center booking and doctor appointment
                        taking web application . Moderns days healthcare facilities get so many improvements.
                        But in our county, many people can’t take proper treatment for their health problems, 
                        especially in rural areas, people don’t know how to get treatment from hospitals and 
                        don’t know which would take better health care in their nearby hospital. Sometimes 
                        they get financial problems after the appointment at the hospital without properly 
                        knowing the total cost. Many people don’t know the diagnostic cost and where would 
                        be best for their nearest area. Sometimes they don’t know which doctor would be best 
                        for them and their prover appointment time and doctor’s fee in their nearest area. 
                        Using our software, they will know which hospital is better at curing diseases they 
                        will know the cost and the number of cabins available, and also, they know the 
                        location of the hospital. They will get the best Doctor and Diagnostic Centres 
                        in their nearby area. "
                        authority="Subject"
                        authorityName="Software Engineering Course"
                    />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </>
    );
}
