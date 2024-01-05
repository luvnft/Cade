import React from 'react'

const PlayMore = () => {
    const Data = [
        {
            name: "Space Invaders",
            img: "/spacenew.webp",
            link: "/Games/SpaceInvaders",
        },
        {
            name: "Chess",
            img: "/chess.avif",
            link: "/Games/Chess",
        },
        {
            name: "FourInLine Game",
            img: "/fourinline.png",
            link: "/Games/FourInLine",
        },
        {
            name: "Car Race",
            img: "/car.jpg",
            link: "/Games/Carrace",
            desc: "Ready to race against the best in this high-speed car game!",
        },
        {
            name: "Tower Defence",
            img: "/tower.jpg",
            link: "/Games/TowerDefence",
        },
        {
            name: "Coin Flip",
            img: "/coinflip.jpg",
            link: "/Games/CoinFlip",
        },
    ];
    return (
        <>
            <div className="p-5  bg-gray-950 rounded-2xl flex flex-col w-max md:py-8 mt-8 md:mt-0 border border-gray-700">
                <h1 className="text-white font-abc text-4xl font-bold mt-5 ml-5">
                    Play More
                </h1>
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-col">
                        <div className="p-2">
                            <div className="flex flex-col">
                                {Data.map((item) => {
                                    return (
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