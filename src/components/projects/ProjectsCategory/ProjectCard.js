import React, { useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { MdUnfoldMore } from "react-icons/md";
import ProjectCardCarrousel from "./ProjectCardCarrousel";
import mohammadPictureLogo from "../../../assets/icons/mohammadPictureLogo.jpg";
import rumiVai from "../../../assets/images/projects/Medi-Care Documentation/teammates/rumiVai.png";
import CompanyAndTeamInfo from "./CompanyAndTeamInfo";

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
    carrouselPhoto1,
    carrouselPhoto2,
    carrouselPhoto3,
}) {
    const [showFullDetails, setShowFullDetails] = useState(false);
    useEffect(() => {
        // load carosel content ... picture
    }, [showFullDetails]);

    return (
        <div class="border-2 h-[500px] w-[500px] bg-cardBG text-cardTextColor p-1 rounded-xl">
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
                <div>
                    <h3 class="text-2xl font-bold p-1">{projectTitle}</h3>
                    <div>
                        <hr />
                    </div>
                </div>
                {/* // description */}
                <div class="h-auto w-auto line-clamp-4 relative">
                    {/* h-[100px] */}
                    <h5>{projectDescription}</h5>
                    {/* icon button for see full discription in bigger div */}
                    <button
                        onClick={() => {
                            setShowFullDetails(!showFullDetails);
                            console.log(
                                "show full project description in project card"
                            );
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
                <h3>Instructor : {instructorName} </h3>

                <div>
                    {/* // love react ,comment , see documentation button */}
                </div>
            </div>
        </div>
    );
}
