import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ children, styleProps, path }) {
    return (
        <div
            as={Link}
            to={path}
            class="text-orange group w-auto ml-3 h-7 leading-6 rounded-md pl-2 pr-2 bg-white hover:shadow hover:shadow-homeColor"
        >
            {/* slate-300 */}
            {children}
            <span>
                {" "}
                <div
                    class={` w-0 h-0.5 absolute bottom-1 rounded-xl ${styleProps}  bg-white hover:invisible  group-hover:visible transition-all duration-1000 hover:duration-75 delay-0`}
                ></div>
            </span>
        </div>
    );
}
