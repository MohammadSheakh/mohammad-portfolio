import React from "react";

export default function NavLink({ children }) {
    return (
        <div class="group w-auto ml-2 h-7 leading-5 rounded-md p-1 bg-white hover:shadow hover:shadow-slate-300">
            {children}
            <span>
                {" "}
                <div class="w-0 h-0.5 absolute bottom-1 rounded-xl group-hover:w-10 bg-white hover:invisible  group-hover:visible transition-all duration-1000 hover:duration-75 delay-0"></div>
            </span>
        </div>
    );
}
