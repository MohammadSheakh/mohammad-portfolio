import React, { useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import { GrCode, GrStatusInfo } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { BsChatLeftTextFill } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";

import { MdUnfoldMore } from "react-icons/md";
import ProjectCardCarrousel from "./ProjectCardCarrousel";
import mohammadPictureLogo from "../../../assets/icons/mohammadPictureLogo.jpg";
import rumiVai from "../../../assets/images/projects/Medi-Care Documentation/teammates/rumiVai.png";
import CompanyAndTeamInfo from "./CompanyAndTeamInfo";
import CardOption from "./ProjectCardOption/CardOption";

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
    useEffect(() => {
        // load carosel content ... picture
    }, [showFullDetails]);

    return (
        <div class=" border-2 h-[500px]  w-[500px]  bg-cardBG text-cardTextColor p-1 rounded-xl mb-10">
            <div>
                {/* // carousal div */}
                <ProjectCardCarrousel
                    carrouselPhoto1={carrouselPhoto1}
                    carrouselPhoto2={carrouselPhoto2}
                    carrouselPhoto3={carrouselPhoto3}
                />
            </div>
            {/* // title and button */}
            <div class="p-2">
                <div class="flex justify-between ">
                    <div class="min-h-[73px] max-h-auto ">
                        <h3 class="text-2xl font-bold p-1">{projectTitle}</h3>
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
                        {/* for github code */}
                        <button class="group absolute top-[42px] right-[120px] bg-PrimaryColorLight hover:bg-tooltip p-1 rounded-md">
                            <i>
                                <GrCode />
                            </i>
                            <div class="hidden absolute group-hover:inline-flex w-[30px] h-auto w-[100px]  top-[-25px] rounded-sm bg-navbarColorGray ">
                                Source Code
                            </div>
                        </button>
                        {/* project status -> on going , finish  */}

                        <div class="group absolute top-[42px] right-[90px] w-auto p-1 h-auto bg-PrimaryColorLight hover:bg-tooltip  rounded-md">
                            <GrStatusInfo />
                            <div class="hidden absolute group-hover:inline-flex w-[30px] h-auto w-[100px]  top-[-30px] rounded-sm bg-navbarColorGray ">
                                On Going
                            </div>
                        </div>

                        <div class="group absolute top-[42px] right-[60px] w-auto p-1 h-auto bg-PrimaryColorLight hover:bg-tooltip  rounded-md">
                            <BsGlobe color="DarkBlue" />

                            {/* BsGlobe
                            FcGlobe */}
                            <div class="hidden absolute group-hover:inline-flex w-[30px] h-auto w-[100px]  top-[-45px] rounded-sm bg-navbarColorGray ">
                                {/*😎 eita ekta customized button  */}
                                {/* ami jeta chai .. shei title dibo .. ar iccha moto link dibo */}
                                Live Demo Link
                                {/* CgWebsite */}
                            </div>
                        </div>

                        <div class="group absolute top-[42px] right-[30px] w-auto p-1 h-auto bg-PrimaryColorLight hover:bg-tooltip  rounded-md">
                            <AiOutlineAlignLeft color="DarkBlue" size="16px" />

                            {/* BsGlobe
                            FcGlobe */}
                            <div class="hidden absolute group-hover:inline-flex w-[30px] h-auto w-[100px]  top-[-45px] rounded-sm bg-navbarColorGray ">
                                {/*😎 eita ekta customized button  */}
                                {/* ami jeta chai .. shei title dibo .. ar iccha moto link dibo */}
                                Project Details
                                {/* CgWebsite */}
                            </div>
                        </div>

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
                    <h5>{projectDescription}</h5>
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
                        {authority} : {authorityName}
                    </h3>
                    <h3>Members : </h3>

                    <CompanyAndTeamInfo
                        teamMemberProfileLink="https://www.linkedin.com/in/mohammad-sheakh/"
                        teamMemberImage={mohammadPictureLogo}
                        teamMemberName="Mohammad Sheakh"
                    />
                    <CompanyAndTeamInfo
                        teamMemberProfileLink={teamMember1ProfileLink}
                        teamMemberImage={teamMember1Image}
                        teamMemberName={teamMember1Name}
                    />
                    <CompanyAndTeamInfo
                        teamMemberProfileLink={teamMember2ProfileLink}
                        teamMemberImage={teamMember2Image}
                        teamMemberName={teamMember2Name}
                    />
                </div>
                <div class="flex justify-between">
                    <a href={instructorProfileLink} target="_blank">
                        <h3 class="mb-1 ">
                            Instructor :{" "}
                            <span class="mb-1 hover:bg-tooltip hover:text-gray-900 px-1 rounded-md">
                                {" "}
                                {instructorName}
                            </span>
                        </h3>
                    </a>
                    <div>
                        {/* 😎 dynamically value ashbe  */}
                        <h1>Technology : MERN Stack</h1>
                    </div>
                </div>

                <div class="relative ">
                    {/* // love react ,comment , see documentation button */}
                    <div class="flex w-[480px]  left-[-3px] absolute  bg-PrimaryColorDarkHover rounded-b-lg">
                        <button class="btn bg-PrimaryColorDarkHover w-24 flex-3 border-none">
                            <i class="flex ">
                                <FaHeart class="mr-2" /> 32
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
}
