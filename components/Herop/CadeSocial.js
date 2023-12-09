import React from 'react'
const CadeSocial = () => {
    const Data = [
        {
            name: "Space Invaders",
            img: "fourinline.png",
            link: "/Games/SpaceInvaders",
            desc: "ddReady to race against the best in this high-speed car game!",
            no : "1"
        },
        {
            name: "Chess",
            img: "/chess.avif",
            link: "/Games/Chess",
            desc: "Ready to race against the best in this high-speed car game! ",
            no : "2"
        },
        {
            name: "FourInLine Game",
            img: "/fourinline.png",
            link: "/Games/FourInLine",
            desc: "Ready to race against the best in this high-speed car game!",
            no : "3"
        },
        {
            name: "Car Race",
            img: "/carnew.jpg",
            link: "/Games/Carrace",
            desc: "Ready to race against the best in this high-speed car game!",
            no : "4"
        },
        {
            name: "Tower Defence",
            img: "/tower.jpg",
            link: "/Games/TowerDefence",
            desc: "Ready to race against the best in this high-speed car game!",
            no : "5"
        },
        {
            name: "Coin Flip",
            img: "/coinflip.jpg",
            link: "/Games/CoinFlip",
            desc: "Rdvdveady to race against the best in this high-speed car game!",
            no : "6"
        },
    ];
    return (
        <>
            <section class="text-gray-600 body-font mx-5">
                <div className="flex justify-center">

                </div>
                <div className="container  ">
                    <div class="flex justify-center mt-1 flex-wrap -m-5  sm:px-2 ">
                        <>
                            <div class="mt-2 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow p-8 dark:bg-gray-950 dark:border-gray-700">
                                <div class="flex items-center justify-between mb-4">
                                    <h5 class="font-abc text-3xl font-bold leading-none text-gray-900 dark:text-white">Cade Social Feed</h5>
                                    <a href="#" class="text-xl font-abc text-blue-600 hover:underline dark:text-blue-500">
                                        View all
                                    </a>
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
                            </div>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CadeSocial