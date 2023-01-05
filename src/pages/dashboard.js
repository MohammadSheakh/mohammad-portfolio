import React from "react";
import Feedback from "../components/dashboard/feedback/Feedback";

export default function Dashboard() {
    return (
        <>
            <div class="w-auto h-[700px] flex justify-center ">
                <div class="h-[500px] w-[900px] sm:w-[1500px]  xl-w-auto box-border border-2 rounded-xl bg-cardBG mt-[150px]">
                    <p class="text-gray-300 text-2xl text-center">Feedbacks</p>

                    {/* ekta form lagbe .. jei form er maddhome search kora jabe
                    show / hide select kore .. shei feedback gula dekha jabe */}

                    {/* apatoto shob gula feedback niye ashbo database theke and show korbo  */}

                    {/* taile ekta feedback Card component lagbe .. jeta render hobe ..  */}
                    <Feedback />
                </div>
            </div>
        </>
    );
}
