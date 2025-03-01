import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

export default function ProjectCardCarrousel({
    carrouselPhoto1,
    carrouselPhoto2,
    carrouselPhoto3,
}) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper overflow-hidden rounded-lg lg:h-52 md:h-52 sm:h-52 xl:h-52 h-40 w-auto"
        >
            <SwiperSlide>
                <img src={carrouselPhoto1} class=" " alt="..." />
            </SwiperSlide>
            <SwiperSlide>
                <img src={carrouselPhoto2} class=" " alt="..." />
            </SwiperSlide>
            <SwiperSlide>
                <img src={carrouselPhoto3} class=" " alt="..." />
            </SwiperSlide>
        </Swiper>
    );
}

// <div id="default-carousel " class="relative" data-carousel="static">

//     <div class="relative h-52 overflow-hidden rounded-lg md:h-52   ">
//         hover:md:h-96
// <div
//     class="hidden duration-700 ease-in-out "
//     data-carousel-item
// >
//     <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
//         First Slide
//     </span>
// <img
//     src={carrouselPhoto1}
//     class=" absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//     alt="..."
// />
// </div>

//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             <img
//                 src={carrouselPhoto2}
//                 class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//             />
//         </div>

//         <div class="hidden duration-700 ease-in-out" data-carousel-item>
//             <img
//                 src={carrouselPhoto3}
//                 class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//             />
//         </div>
//     </div>

//     <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 ">
//         <button
//             type="button"
//             class="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 1"
//             data-carousel-slide-to="0"
//         ></button>
//         <button
//             type="button"
//             class="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 2"
//             data-carousel-slide-to="1"
//         ></button>
//         <button
//             type="button"
//             class="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 3"
//             data-carousel-slide-to="2"
//         ></button>
//     </div>

//     <button
//         type="button"
//         class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//     >
//         <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M15 19l-7-7 7-7"
//                 ></path>
//             </svg>
//             <span class="sr-only">Previous</span>
//         </span>
//     </button>
//     <button
//         type="button"
//         class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//     >
//         <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M9 5l7 7-7 7"
//                 ></path>
//             </svg>
//             <span class="sr-only">Next</span>
//         </span>
//     </button>
// </div>
