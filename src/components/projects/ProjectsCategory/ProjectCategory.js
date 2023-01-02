import React from "react";
import ProjectCard from "./ProjectCard";
import mohammadPictureLogo from "../../../assets/icons/mohammadPictureLogo.jpg";
import rumiVai from "../../../assets/images/projects/Medi-Care Documentation/teammates/rumiVai.png";
import SomelAhmed from "../../../assets/images/projects/ABC Hospital Management System/SomelAhmed.png";
import borhan from "../../../assets/images/projects/ABC Hospital Management System/borhan.png";

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
                        projectTitle="Mohammad Sheakh's Portfolio"
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
                        carrouselPhoto1="https://res.cloudinary.com/deg4frre7/image/upload/v1668921269/Mohammad%20Portfolio/projects/Medi-Care%20Web%20Application%20Documentation%20%28SE%29/c_n0wl9n.png"
                        carrouselPhoto2="https://res.cloudinary.com/deg4frre7/image/upload/v1668921269/Mohammad%20Portfolio/projects/Medi-Care%20Web%20Application%20Documentation%20%28SE%29/b_pxj6uz.png"
                        carrouselPhoto3="https://res.cloudinary.com/deg4frre7/image/upload/v1668921266/Mohammad%20Portfolio/projects/Medi-Care%20Web%20Application%20Documentation%20%28SE%29/a_tladul.png"
                    />

                    <ProjectCard
                        projectTitle="Medi-Care Web Application Documentation "
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
                        teamMember1ProfileLink="https://www.facebook.com/sarjataziz.rumi.7"
                        teamMember1Image={rumiVai}
                        teamMember1Name="Sarjat Aziz"
                        instructorName="Dr. S.M. HASAN Mahmud"
                        instructorProfileLink="https://www.linkedin.com/in/dr-s-m-hasan-mahmud-63450b53/"
                        carrouselPhoto1="https://res.cloudinary.com/deg4frre7/image/upload/v1668921269/Mohammad%20Portfolio/projects/Medi-Care%20Web%20Application%20Documentation%20%28SE%29/c_n0wl9n.png"
                        carrouselPhoto2="https://res.cloudinary.com/deg4frre7/image/upload/v1668921269/Mohammad%20Portfolio/projects/Medi-Care%20Web%20Application%20Documentation%20%28SE%29/b_pxj6uz.png"
                        carrouselPhoto3="https://res.cloudinary.com/deg4frre7/image/upload/v1668921266/Mohammad%20Portfolio/projects/Medi-Care%20Web%20Application%20Documentation%20%28SE%29/a_tladul.png"
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
                        teamMember1ProfileLink="https://www.linkedin.com/in/somel-ahmed-a078a9219/"
                        teamMember1Image={SomelAhmed}
                        teamMember1Name="Somel Ahmed"
                        teamMember2ProfileLink="https://www.facebook.com/borhan.711"
                        teamMember2Image={borhan}
                        teamMember2Name="Borhan Uddin"
                        instructorName="MD. ISMAIL HOSSEN"
                        instructorProfileLink="https://www.linkedin.com/in/md-ismail-hossen-a5b144ba/"
                        carrouselPhoto1="https://res.cloudinary.com/deg4frre7/image/upload/v1668921059/Mohammad%20Portfolio/projects/Hospital%20Management%20Software/hm3_sqcu7z.png"
                        carrouselPhoto2="https://res.cloudinary.com/deg4frre7/image/upload/v1668921059/Mohammad%20Portfolio/projects/Hospital%20Management%20Software/hm2_winrhb.png"
                        carrouselPhoto3="https://res.cloudinary.com/deg4frre7/image/upload/v1668921059/Mohammad%20Portfolio/projects/Hospital%20Management%20Software/hm1_uv3jip.png"
                    />
                </div>
            </div>
        </>
    );
}
