import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { FcDocument } from "react-icons/fc";

export default function Links() {
    return (
        <>
            <div className="ml-16">
                <div class="h-1 w-[700px] bg-PrimaryColorDark dark:bg-PrimaryColorLight"></div>
                <div>
                    <a href="https://github.com/MohammadSheakh" target="_blank">
                        <button className="btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
                            <i>
                                <GoMarkGithub class="mr-2" />{" "}
                            </i>
                            github
                        </button>
                    </a>
                    {/* database 🙂 */}
                    <a
                        href="https://www.linkedin.com/in/mohammad-sheakh/"
                        target="_blank"
                    >
                        <button className="ml-2 btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
                            <i>
                                <BsLinkedin class="mr-2" />{" "}
                            </i>
                            Linked In
                        </button>
                    </a>
                </div>
            </div>
            <div class="ml-[55%]">
                <button className="ml-2 btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
                    <i>
                        <AiOutlineCloudDownload class="mr-2 " />{" "}
                    </i>
                    Download My CV
                </button>
                <button className="ml-2 btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
                    <i>
                        <FcDocument class="mr-2" />{" "}
                    </i>
                    Check My CV
                </button>
            </div>
        </>
    );
}
