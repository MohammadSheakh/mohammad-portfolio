import React, { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { GrCode, GrStatusInfo } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";

import { MdUnfoldMore } from "react-icons/md";
import ProjectCardCarrousel from "./ProjectCardCarrousel";
import mohammadPictureLogo from "../../../assets/icons/mohammadPictureLogo.jpg";
import rumiVai from "../../../assets/images/projects/Medi-Care Documentation/teammates/rumiVai.png";
import CompanyAndTeamInfo from "./CompanyAndTeamInfo";
import CardOption from "./ProjectCardOption/CardOption";
import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../../../features/projects/projectsApi";
import Spinner from "../../common/Skeleton/Spinner";

export default function ProjectCard({
    projectTitle,
    projectDescription,
    authority,
    authorityName,
    teamMember1ProfileLink,
    teamMember1Image,
    teamMember1Name,
    teamMember2ProfileLink,
    teamMember2Image,
    teamMember2Name,
    teamMember3ProfileLink,
    teamMember3Image,
    teamMember3Name,
    instructorName,
    instructorProfileLink,
    carrouselPhoto1,
    carrouselPhoto2,
    carrouselPhoto3,
}) {
    const [showFullDetails, setShowFullDetails] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const { data, isLoading, isError, error } = useGetAllProjectsQuery();
    // console.log("data from components-> projects -> projectsCategory 😶", data);

    useEffect(() => {
        // load carosel content ... picture
    }, [showFullDetails]);

    return (
        <>
            {isLoading ? (
                <>
                    <Spinner />{" "}
                    {/* 😎 Shamne ekhane Skeleton Show korte hobe Flow Bite er  */}
                </>
            ) : (
                <></>
            )}
            {data?.map((project) => {
                console.log("single project from ProjectCard 😁😁😁", project);
                return (
                    <div class=" border-2 min-h-[230px] max-h-[500px]  w-[500px]  bg-cardBG text-cardTextColor p-1 rounded-xl mb-10">
                        <div>
                            {/* // carousal div */}
                            {/* {data?.imageLink?.map((image) => { */}
                            {/* <ProjectCardCarrousel
                            // carrouselPhoto1={image}
                            carrouselPhoto1={carrouselPhoto1}
                            carrouselPhoto2={carrouselPhoto2}
                            carrouselPhoto3={carrouselPhoto3}
                        /> */}
                            {/* })} */}
                        </div>
                        {/* // title and button */}
                        <div class="p-2">
                            <div class="flex justify-between ">
                                <div class="min-h-[73px] max-h-auto ">
                                    <h3 class="text-2xl font-bold p-1">
                                        {project?.projectTitle}
                                    </h3>
                                </div>
                                {/* option button */}
                                <div class="relative">
                                    <button
                                        onClick={() => {
                                            setShowOptions(!showOptions);
                                        }}
                                    >
                                        <i>
                                            <SlOptions />
                                        </i>
                                    </button>
                                    {/* for github code front-end */}
                                    <a
                                        href={project?.githubLinkForFrontEnd}
                                        target="_blank"
                                    >
                                        <button class="group absolute top-[42px] right-[120px] w-auto p-1 h-auto bg-PrimaryColorLight hover:bg-tooltip  rounded-md">
                                            {/* absolute top-[42px] right-[120px] bg-PrimaryColorLight hover:bg-tooltip p-1 rounded-md */}
                                            <GrCode />
                                            <div class="hidden absolute group-hover:inline-flex w-[140px] h-auto top-[-30px] bg-tooltip ">
                                                <h1 class="text-lg text-center text-white">
                                                    Front-End Code
                                                </h1>
                                            </div>
                                        </button>
                                    </a>
                                    {/* for github code back-end */}
                                    <a
                                        href={project?.githubLinkForBackEnd}
                                        target="_blank"
                                    >
                                        <button class="group absolute top-[42px] right-[90px] w-auto p-1 h-auto bg-PrimaryColorLight hover:bg-tooltip  rounded-md">
                                            {/* absolute top-[42px] right-[120px] bg-PrimaryColorLight hover:bg-tooltip p-1 rounded-md */}
                                            <GrCode />
                                            <div class="hidden absolute group-hover:inline-flex w-[140px] h-auto top-[-30px] bg-tooltip ">
                                                <h1 class="text-lg text-center text-white">
                                                    Back-End Code
                                                </h1>
                                            </div>
                                        </button>
                                    </a>

                                    {/* for live link */}
                                    <a
                                        href={project?.liveDemoLink}
                                        target="_blank"
                                    >
                                        <button class="group absolute top-[42px] right-[60px] w-auto p-1 h-auto bg-PrimaryColorLight hover:bg-tooltip  rounded-md">
                                            {/*  bg-PrimaryColorLight  */}
                                            <BsGlobe color="black" />
                                            <div class="hidden absolute group-hover:inline-flex w-[140px] h-auto top-[-30px] bg-tooltip ">
                                                <h1 class="text-lg text-center text-white">
                                                    Live Demo Link
                                                </h1>
                                            </div>
                                        </button>
                                    </a>
                                    {/* backEndServerLink */}

                                    <button class="group absolute top-[42px] right-[30px] w-auto p-1 h-auto bg-PrimaryColorLight hover:bg-tooltip  rounded-md">
                                        <GrStatusInfo />
                                        <div class="hidden absolute group-hover:inline-flex w-[90px] h-auto top-[-30px] bg-tooltip ">
                                            <h1 class="text-lg text-center text-white">
                                                {project.projectStatus}
                                            </h1>
                                        </div>
                                    </button>
                                    <div class="absolute top-[30px] left-[29px]">
                                        <>
                                            {showOptions ? (
                                                <>
                                                    <CardOption />
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {/* // description */}
                            <div class="h-auto w-auto line-clamp-4 relative ">
                                {/* h-[100px] */}
                                <h5>{project?.projectDescription}</h5>
                                {/* icon button for see full discription in bigger div */}
                                <button
                                    onClick={() => {
                                        setShowFullDetails(!showFullDetails);
                                    }}
                                    class="h-4 w-auto absolute top-[80px] left-[456px] bg-white text-orange"
                                >
                                    <MdUnfoldMore />
                                    {/* <BiDetail /> */}
                                </button>
                            </div>

                            <div>
                                <hr />
                            </div>
                            {/* // team name, member , Instructor name  */}

                            <div class="flex gap-x-3 ">
                                <h3 class="bg-PrimaryColorDarkHover px-1 ">
                                    {project?.hasProjectBelong ? (
                                        <>
                                            {project?.projectBelongType} :{" "}
                                            {project?.projectBelongName}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </h3>

                                {project?.hasMembers ? (
                                    <>
                                        <h3>Members : </h3>
                                        {project.members.map((member) => (
                                            <CompanyAndTeamInfo
                                                teamMemberProfileLink={
                                                    member.memberLink
                                                }
                                                teamMemberImage={
                                                    member.memberImage
                                                }
                                                teamMemberName={
                                                    member.memberName
                                                }
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <></>
                                )}

                                {/* <CompanyAndTeamInfo
                                teamMemberProfileLink={teamMember1ProfileLink}
                                teamMemberImage={teamMember1Image}
                                teamMemberName={teamMember1Name}
                            />
                            <CompanyAndTeamInfo
                                teamMemberProfileLink={teamMember2ProfileLink}
                                teamMemberImage={teamMember2Image}
                                teamMemberName={teamMember2Name}
                            /> */}
                            </div>
                            <div class="flex justify-between mt-1">
                                <div>
                                    {project?.hasInstructor ? (
                                        <>
                                            <a
                                                href={
                                                    project?.instructorProfileLink
                                                }
                                                target="_blank"
                                            >
                                                <h3 class="mb-1 ">
                                                    Instructor :{" "}
                                                    <span class="mb-1 hover:bg-tooltip hover:text-gray-900 px-1 rounded-md">
                                                        {" "}
                                                        {
                                                            project?.instructorName
                                                        }
                                                    </span>
                                                </h3>
                                            </a>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div>
                                    {project?.stack ? (
                                        <>
                                            <h3>
                                                Stack :
                                                <Link class="bg-tooltip text-gray-900 px-1 rounded-md ml-1">
                                                    {project?.stack}
                                                </Link>
                                            </h3>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>

                            <div class="relative ">
                                {/* // love react ,comment , see documentation button */}
                                <div class="flex w-[480px]  left-[-3px] absolute  bg-PrimaryColorDarkHover rounded-b-lg">
                                    <button class="btn bg-PrimaryColorDarkHover w-24 flex-3 border-none">
                                        <i class="flex ">
                                            <FaHeart class="mr-2" />{" "}
                                            {project.loveReactNumber}
                                        </i>
                                    </button>
                                    <button class="btn bg-PrimaryColorDarkHover w-24 flex-1 border-none">
                                        <i class="flex ">
                                            <BsChatLeftTextFill class="mr-2" />
                                            Comments
                                        </i>
                                    </button>
                                    <button class="btn bg-PrimaryColorDarkHover w-24 flex-1 border-none">
                                        <i class="flex ">
                                            <AiOutlineFileText class="mr-2" />
                                            Documentation
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
