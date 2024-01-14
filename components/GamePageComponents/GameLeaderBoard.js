import React from 'react'
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
const GameLeaderBoard = () => {
    return (
        <>


            <div class="mt-3 w-full max-w-lg rounded-lg shadow lg:p-12 p-5 bg-gray-950 border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-4xl font-abc font-bold leading-none text-white">GameLeaderBoard</h5>

                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/gmedal.png" alt="Neil image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc truncate text-white">
                                        Neil Sims
                                    </p>

                                </div>
                               
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/smedal.png" alt="Bonnie image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc text-white">
                                        Bonnie Green
                                    </p>

                                </div>
                               
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/bmedal.png" alt="Michael image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc text-white">
                                        Michael Gough
                                    </p>

                                </div>
                              
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default GameLeaderBoard