import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi";
const GameDetails = () => {
    return (
        <>
            <section className="text-gray-400 bg-gray-950 body-font rounded-xl border border-gray-700">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="font-abc title-font font-medium sm:text-4xl text-3xl text-white">
                                {/* {slug} */}GameName
                            </h2>
                            <p className="text-white font-abc text-3xl">Game</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <div className="flex">
                                <a className="inline-flex items-center">
                                    <BiSolidUpArrow className="text-green-500 text-3xl" />
                                    <span className="flex-grow flex flex-col pl-3">
                                        <span className="text-4xl font-abc text-white">
                                            +10 XP
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <div className="flex">
                                <a className="inline-flex items-center">
                                    <img
                                        src="/cade.png"
                                        height={50}
                                        width={50}
                                        alt="cade"
                                    />
                                    <span className="flex-grow flex flex-col pl-3">
                                        <span className="text-4xl font-abc text-white">
                                            Cade +0.1
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="font-abc sm:text-4xl text-3xl text-white">
                                500+
                            </h2>
                            <p className="text-white font-abc text-3xl">
                                Times Played
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GameDetails