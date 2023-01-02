import React from "react";

export default function SkillSet() {
    return (
        <div class="min-h-screen max-h-auto mx-auto w-auto bg-footerColor ">
            {/* container */}
            <div class="flex justify-center text-gray-200 dark:text-gray-300 ">
                <h1 class="mt-24 text-3xl mb-6">
                    Language and framework I have been working on
                </h1>
            </div>

            <div class="flex justify-center">
                <div class="flex-col h-[600px] w-[750px] border-1">
                    {/* border-gray-200 border-2 */}
                    <div class="flex-initial w-auto  h-[50px] text-2xl text-white p-2 ">
                        {/* flex-none */}
                        <h1 class="ml-10">Language</h1>
                    </div>
                    <div class="flex-initial w-auto h-[100px] text-xl   relative flex">
                        <div class="flex-1 text-center">
                            {/* absolute mt-2 ml-6 */}
                            <h1 class="p-1">Front-end</h1>
                            <h1 class="p-1 mt-2">Back-end</h1>
                        </div>
                        <div class="flex-1">
                            {/* for front-end */}
                            <div class="flex gap-x-2">
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    HTML
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    Tailwind CSS
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    JavaScript
                                </h1>
                                {/* <h1 class="bg-PrimaryColorDarkHover p-1">
                                    TypeScript
                                </h1> */}
                            </div>

                            <div class="flex gap-x-2 mt-2">
                                {/* for back-end */}

                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    Node.js
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    PHP
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    Mongo DB
                                </h1>
                                {/* <h1 class="bg-PrimaryColorDarkHover p-1">
                                    TypeScript
                                </h1> */}
                            </div>
                        </div>
                    </div>
                    {/* ============================================================================= */}
                    <div class="flex-initial w-auto  h-[50px] text-2xl text-white p-2 ">
                        {/* flex-none */}
                        <h1 class="ml-10">Technologies</h1>
                    </div>
                    <div class="flex-initial w-auto h-[100px] text-xl   relative flex">
                        <div class="flex-1 text-center">
                            {/* absolute mt-2 ml-6 */}
                            <h1 class="p-1">UI Related</h1>
                            <h1 class="p-1 mt-2">FE Related</h1>
                        </div>
                        <div class="flex-1">
                            {/* for front-end */}
                            <div class="flex gap-x-2">
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    HTML
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    Tailwind CSS
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    JavaScript
                                </h1>
                                {/* <h1 class="bg-PrimaryColorDarkHover p-1">
                                    TypeScript
                                </h1> */}
                            </div>

                            <div class="flex gap-x-2 mt-2">
                                {/* for back-end */}

                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    Node.js
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    PHP
                                </h1>
                                <h1 class="bg-tooltip p-1 text-gray-900 rounded-lg">
                                    Mongo DB
                                </h1>
                                {/* <h1 class="bg-PrimaryColorDarkHover p-1">
                                    TypeScript
                                </h1> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
