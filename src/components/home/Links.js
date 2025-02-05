import React from "react";
import { FaGithub } from "react-icons/fa"; // Use this if the icon is from Font Awesome

import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook, AiOutlineCloudDownload } from "react-icons/ai";

import { FcDocument } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

export default function Links() {
  return (
    <>
      <div className="ml-16">
        <div class="h-1 w-[700px]  bg-PrimaryColorLight dark:bg-PrimaryColorLight"></div>
        <div>
          {/* flex flex-row flex-wrap */}
          <a href="https://github.com/MohammadSheakh" target="_blank">
            <button className="btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
              <i>
                <FaGithub class="mr-2" />{" "}
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
          {/* href="tel:015184198001" */}
          <a href="mail-to:mohammad.sheakh@gmail.com" target="_blank">
            <button className="ml-2 btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
              <i>
                <MdEmail class="mr-2" />{" "}
              </i>
              Email
            </button>
          </a>
          <a href="https://www.facebook.com/mohammadsheakh101/" target="_blank">
            <button className="ml-2 btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
              <i>
                <AiFillFacebook class="mr-2" />{" "}
              </i>
              Facebook
            </button>
          </a>
        </div>
      </div>
      <div class="ml-[55%] mt-6">
        <a href="https://flowcv.com/resume/sm0eusv71i" target="_blank">
          <button className="ml-2 btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
            <i>
              <AiOutlineCloudDownload class="mr-2 " />{" "}
            </i>
            Download My CV
          </button>
        </a>

        <a href="https://flowcv.com/resume/sm0eusv71i" target="_blank">
          <button className="ml-2 btn mt-4 bg-PrimaryColorDark hover:bg-PrimaryColorLight hover:text-orange border-homeColor hover:border-PureWhite ">
            <i>
              <FcDocument class="mr-2" />{" "}
            </i>
            Check My CV
          </button>
        </a>
      </div>
      <h5 class="ml-[500px] mt-10">This Site is Under Development</h5>
    </>
  );
}
