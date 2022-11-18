import React from "react";

export default function TimePicker() {
    return (
        // <input
        //                             type="text"
        //                             id="simple-search"
        //                             class="p-2 mt-2 w-[450px] resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        //                             placeholder="Paste link here..."
        //                             required
        //                         />
        <div class="">
            {/* container mt-5 bg-gray-100 */}
            <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
                Time :
                <select
                    name=""
                    id=""
                    class="px-2 w-auto outline-none appearance-none bg-transparent hover:bg-PrimaryColorDark bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="02">03</option>
                    <option value="02">04</option>
                    <option value="02">05</option>
                    <option value="02">06</option>
                    <option value="02">07</option>
                    <option value="02">08</option>
                    <option value="02">09</option>
                    <option value="02">10</option>
                    <option value="02">11</option>
                    <option value="02">12</option>
                </select>
                <span class="px-2">:</span>
                <select
                    name=""
                    id=""
                    class="px-2 outline-none appearance-none bg-transparent hover:bg-PrimaryColorDark"
                >
                    <option value="00">00</option>
                    <option value="01">05</option>
                    <option value="00">15</option>
                    <option value="00">20</option>
                    <option value="00">25</option>
                    <option value="00">30</option>
                    <option value="00">35</option>
                    <option value="00">40</option>
                    <option value="00">45</option>
                    <option value="00">50</option>
                    <option value="00">55</option>
                    <option value="00">60</option>
                </select>
                <select
                    name=""
                    id=""
                    class="px-2 outline-none appearance-none bg-transparent hover:bg-PrimaryColorDark"
                >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
        </div>
    );
}
