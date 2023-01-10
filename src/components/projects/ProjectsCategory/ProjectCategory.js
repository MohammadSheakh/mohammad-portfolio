import React, { useState } from "react";
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
import { Link } from "react-router-dom";

import { BsGlobe } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { GrCode, GrStatusInfo } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";

import { MdUnfoldMore } from "react-icons/md";
/////////////////////////////////////////////////////////////////////////////// For Admin
import { useSelector } from "react-redux";
import useAdminCheck from "../../../hooks/useAdminCheck";
////////////////////////////////////////////////////////////////////////////// For Redux Toolkit query
import { useGetAllProjectsQuery } from "../../../features/projects/projectsApi";
import AddProjectForm from "../AddProjectForm";
import CardOption from "./ProjectCardOption/CardOption";
import CompanyAndTeamInfo from "./CompanyAndTeamInfo";

export default function ProjectCategory() {
    const { user } = useSelector((state) => state.auth) || {};
    console.log("user  from projects.js 4️⃣ ", user?.user?._id);
    const isAdmin = useAdminCheck(); // true ba false return korbe ..

    const { data, isLoading, isError, error } = useGetAllProjectsQuery();
    // console.log("data from components-> projects -> projectsCategory 😶", data);

    console.log();

    const [showFullDetails, setShowFullDetails] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

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
                    {/* {user?.user?.id} */}
                    {isAdmin ? (
                        <>
                            {/* 😎 add Product API create korte hobe .. endpoint
                            banate hobe front-end e */}

                            <AddProjectForm />
                        </>
                    ) : (
                        <></>
                    )}

                    {/* <ProjectCard
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
                    /> */}

                    <ProjectCard />
                </div>
            </div>
        </>
    );
}
