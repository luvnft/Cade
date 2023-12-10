import React from 'react'

const MiniLeaderBoard = () => {
    return (
        <>


            <div class="mt-5 w-full max-w-md  bg-white border border-gray-200 rounded-lg shadow lg:p-12 p-5 dark:bg-gray-950 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-5xl font-abc leading-none text-gray-900 dark:text-white">LeaderBoard</h5>
                    <a href="#" class="text-xl font-abc text-yellow-400 hover:underline dark:text-yellow-400">
                        View all
                    </a>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/gmedal.png" alt="Neil image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc  text-gray-900 truncate dark:text-white">
                                        Neil Sims
                                    </p>
                                    <p class="font-abc text-xl text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320 XP
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/smedal.png" alt="Bonnie image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc  text-gray-900 truncate dark:text-white">
                                        Bonnie Green
                                    </p>
                                    <p class="font-abc text-xl text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $3467 XP
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/bmedal.png" alt="Michael image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc  text-gray-900 truncate dark:text-white">
                                        Michael Gough
                                    </p>
                                    <p class="font-abc text-xl text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $67 XP
                                </div>
                            </div>
                        </li>

                        <li class="pt-3 pb-0 sm:pt-4">
                            <div class="flex items-center ">
                                <div class="flex-shrink-0">
                                    <img class="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" />
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-2xl font-abc  text-gray-900 truncate dark:text-white">
                                        Thomes Lean
                                    </p>
                                    <p class="font-abc text-xl text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $2367 XP
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default MiniLeaderBoard