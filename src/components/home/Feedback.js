import React from "react";

export default function Feedback() {
    return (
        <>
            <div class="h-screen w-full">
                <div>
                    <h1>Share Your thoughts and creative idea with me</h1>
                    <div class="flex flex-row border-2 p-4 justify-center  ">
                        <h1 class="h-[200px] mt-1 w-auto px-3">Your Name : </h1>
                        <input
                            type="text"
                            id="simple-search"
                            placeholder="Type your name here..."
                            class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />

                        <h1 class="h-[200px] mt-1 w-auto px-3">
                            Facebook ID :{" "}
                        </h1>
                        <input
                            type="text"
                            id="simple-search"
                            placeholder="Paste facebook id link here... "
                            class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />

                        <h1 class="h-[200px] mt-1 w-auto px-3">
                            Phone Number :{" "}
                        </h1>
                        <input
                            type="text"
                            id="simple-search"
                            placeholder="Paste facebook id link here... "
                            class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />

                        <h1 class="h-[200px] mt-1 w-auto px-3">Email : </h1>
                        <input
                            type="text"
                            id="simple-search"
                            placeholder="Paste facebook id link here... "
                            class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />

                        <h1 class="h-[200px] mt-1 w-auto px-3">Address : </h1>
                        <input
                            type="text"
                            id="simple-search"
                            placeholder="Paste facebook id link here... "
                            class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                // act as anonymous checkBox button
                <h1 class="h-[200px] mt-1 w-auto px-3">Reference : </h1>
                <input
                    type="text"
                    id="simple-search"
                    placeholder="How do i know me..."
                    class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                {/* // feedback box------------------- */}
                <textarea
                    type="text"
                    id="simple-search"
                    placeholder="Write feedback here... "
                    class="p-2  h-10 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
        </>
    );
}
