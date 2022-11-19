import React from "react";

export default function CompanyAndTeamInfo({
    authority,
    authorityName,
    teamMemberProfileLink,
    teamMemberImage,
    teamMemberName,
}) {
    return (
        <div class="flex gap-x-3 ">
            <div class="group  h-6 w-6">
                <a href={teamMemberProfileLink} target="_blank">
                    <img
                        class="rounded-full h-6 w-6 mt-1 "
                        src={teamMemberImage}
                        alt=""
                    />
                </a>
                {/*🤐 design thik korte hobe inline block related othoba display block */}
                {/*🤐 team member er information deowa thakle px-1 class add korbo .. naile korbo na  */}
                <span class="h-2 w-auto   relative  top-1 right-6 px-1 rounded-md invisible  group-hover:text-PureWhite group-hover:visible bg-PrimaryColorDarkHover ">
                    {teamMemberName}
                </span>
            </div>
        </div>
    );
}
