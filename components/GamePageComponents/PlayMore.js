import React from 'react'
import Link from 'next/link';

const PlayMore = () => {
    const Data = [
        {
            name: "Tower Defence",
            img: "/tower.jpg",
            link: "/Games/TowerDefence",
            desc: "Games where the goal is to defend your base by enemy.",
            arcadeMachineImage: "/a6.png"
        },
        {
            name: "Mole Smash",
            img: "/molegame.jpeg",
            link: "/Games/MoleSmash",
            desc: "Control a spaceship and defend Earth from waves of alien.",
            arcadeMachineImage: "/a2.png"
        },
        {
            name: "Skyline Skaddle",
            img: "/skygame.jpg",
            link: "/Games/SkylineSkaddle",
            desc: "Ready to race against the best in this high-speed car game!",
            arcadeMachineImage: "/a3.png"
        },
        {
            name: "Four In Line",
            img: "/fourinline.png",
            link: "/Games/FourInLine",
            desc: "A classic strategy game of aligning four tokens in a row.",
            arcadeMachineImage: "/a4.png"
        },
        {
            name: "Tile Survive",
            img: "/tile.jpg",
            link: "/Games/TileSurvive",
            desc: "Checkmate your way to victory in this classic chess game!",
            arcadeMachineImage: "/a5.png"
        },
        {
            name: "Coin Flip",
            img: "/coinflip.jpg",
            link: "/Games/CoinFlip",
            desc: "A retro coin flip game of digital twist on a classic 50/50 chance.",
            arcadeMachineImage: "/a8.png"
        },
    ];
    return (
        <>
            <div className="px-10 bg-gray-950 rounded-2xl flex flex-col w-max md:py-8 mt-8 md:mt-0 border border-gray-700">
                <h1 className="text-white font-abc text-4xl font-bold mt-5 ml-5">
                    Play More
                </h1>
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-col">
                        <div className="p-2">
                            <div className="flex flex-col">
                                {Data.map((item) => {
                                    return (
                                        <>
                                            <Link href={item.link}>
                                                <div className="mt-10" key={item.name}>
                                                    <div
                                                        href="#"
                                                        className="flex flex-col items-center bg-gray-950 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-700"
                                                    >
                                                        <img
                                                            className="object-cover rounded-t-lg h-36 w-36 md:rounded-none md:rounded-l-lg"
                                                            src={item.img}
                                                            alt="d"
                                                        />
                                                        <div className="flex flex-col justify-between p-4 leading-normal overflow-x-auto overflow-y-hidden">
                                                            <h5 className="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                {item.name}
                                                            </h5>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayMore