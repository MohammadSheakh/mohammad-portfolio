import React from "react";
import ProjectCard from "./ProjectCard";
import mohammadPictureLogo from "../../../assets/icons/mohammadPictureLogo.jpg";
import rumiVai from "../../../assets/images/projects/Medi-Care Documentation/teammates/rumiVai.png";
import SomelAhmed from "../../../assets/images/projects/ABC Hospital Management System/SomelAhmed.png";

import a from "../../../assets/images/projects/Medi-Care Documentation/a.png";
import b from "../../../assets/images/projects/Medi-Care Documentation/b.png";
import c from "../../../assets/images/projects/Medi-Care Documentation/c.png";

import hm1 from "../../../assets/images/projects/ABC Hospital Management System/hm1.png";
import hm2 from "../../../assets/images/projects/ABC Hospital Management System/hm2.png";
import hm3 from "../../../assets/images/projects/ABC Hospital Management System/hm3.png";

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

                <div class="flex flex-wrap justify-start sm:justify-center  gap-10  border-box w-auto py-5 px-5 2xl:mx-20 ">
                    {/* border-2 */}
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
                        teamMemberProfileLink="https://www.facebook.com/sarjataziz.rumi.7"
                        teamMemberImage={rumiVai}
                        teamMemberName="Sarjat Aziz"
                        instructorName="Dr. S.M. HASAN Mahmud"
                        carrouselPhoto1={a}
                        carrouselPhoto2={b}
                        carrouselPhoto3={c}
                    />
                    <ProjectCard
                        projectTitle="Hospital Management System"
                        projectDescription="A Hospital Management System desktop application is created to manage
                        its admin, doctor, patient, employee and pharmacy sector. We tried to implement every
                        feature a typical hospital has. We, as a team did this project with Windows Forms. 
                        Which is a free and open-source graphical (GUI) class library included as a part of
                        Microsoft .NET. This project aims to manage & serve all the features expected."
                        authority="Subject"
                        authorityName="C# course"
                        teamMemberProfileLink="https://www.linkedin.com/in/somel-ahmed-a078a9219/"
                        teamMemberImage={SomelAhmed}
                        teamMemberName="Somel Ahmed"
                        instructorName="MD. ISMAIL HOSSEN"
                        carrouselPhoto1={hm1}
                        carrouselPhoto2={hm2}
                        carrouselPhoto3={hm3}
                    />
                </div>
            </div>
        </>
    );
}
