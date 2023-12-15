import React from 'react'
import CadeInput from '../CadeInput/CadeInput';
const CadeSocial = () => {
    const Data = [
        {
            name: "Space Invaders",
            img: "fourinline.png",
            link: "/Games/SpaceInvaders",
            desc: "ddReady to race against the best in this high-speed car game!",
            no: "1"
        },
        {
            name: "Chess",
            img: "/chess.avif",
            link: "/Games/Chess",
            desc: "Ready to race against the best in this high-speed car game! ",
            no: "2"
        },
        {
            name: "FourInLine Game",
            img: "/fourinline.png",
            link: "/Games/FourInLine",
            desc: "Ready to race against the best in this high-speed car game!",
            no: "3"
        },
        {
            name: "Car Race",
            img: "/carnew.jpg",
            link: "/Games/Carrace",
            desc: "Ready to race against the best in this high-speed car game!",
            no: "4"
        },
    ];
    return (
        <>
            <section class="text-gray-600 body-font mx-5">
                <div className="flex justify-start">

                </div>
                <div className="container  ">
                    <div class="flex justify-start mt-1 flex-wrap -m-5  sm:px-2 ">
                        <>
                            <div class="mt-2 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow p-8 dark:bg-gray-950 dark:border-gray-700">
                                <div class="flex items-center justify-between mb-4">
                                    <h5 class="font-abc sm:text-5xl text-6xl font-bold leading-none text-gray-900 dark:text-white">Cade Feed🤝</h5>

                                </div>
                                <div class="flow-root">
                                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                        {Data.map((item) => {

                                            return (
                                                <>
                                                    <li class="py-3 sm:py-4">
                                                        <div class="flex items-center space-x-4">
                                                            <div class="flex-shrink-0">
                                                                <img class="w-12 h-12 rounded-full" src={`https://picsum.photos/20${item.no}`} alt="Neil image" />
                                                            </div>
                                                            <div class="flex-1 min-w-0">
                                                                <p class="font-abc text-2xl font-medium text-black truncate dark:text-white">
                                                                    Username
                                                                </p>
                                                                <p class="font-abc text-lg text-gray-500 truncate dark:text-gray-400">
                                                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                                                </p>

                                                            </div>

                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })}

                                    </ul>
                                </div>
                            <a href="#" class="text-2xl font-abc mt-5 mb-5 inline-flex items-center text-yellow-300 hover:underline">
                                View More
                                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                            <CadeInput/>

                            </div>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CadeSocial