import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { FcDocument } from "react-icons/fc";

export default function Links() {
    return (
        <>
            <div className="ml-16">
                <div class="h-1 w-[700px] bg-white"></div>
                <div>
                    <a href="https://github.com/MohammadSheakh" target="_blank">
                        <button className="btn mt-4 bg-homePageColor hover:bg-secondaryColor hover:text-orange border-homeColor hover:border-white ">
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
                        <button className="ml-2 btn mt-4 bg-homePageColor hover:bg-secondaryColor hover:text-orange border-homeColor hover:border-white ">
                            <i>
                                <BsLinkedin class="mr-2" />{" "}
                            </i>
                            Linked In
                        </button>
                    </a>
                </div>
            </div>
            <div class="ml-[55%]">
                <button className="ml-2 btn mt-4 bg-homePageColor hover:bg-secondaryColor hover:text-orange border-homeColor hover:border-white ">
                    <i>
                        <AiOutlineCloudDownload class="mr-2 " />{" "}
                    </i>
                    Download My CV
                </button>
                <button className="ml-2 btn mt-4 bg-homePageColor hover:bg-secondaryColor hover:text-orange border-homeColor hover:border-white ">
                    <i>
                        <FcDocument class="mr-2" />{" "}
                    </i>
                    Check My CV
                </button>
            </div>
        </>
    );
}
