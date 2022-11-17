import React from "react";

export default function TimePicker() {
    return (
        <div class="container mx-auto mt-5 bg-gray-100">
            <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
                Time :
                <select
                    name=""
                    id=""
                    class="px-2 outline-none appearance-none bg-transparent hover:bg-PrimaryColorDark"
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
