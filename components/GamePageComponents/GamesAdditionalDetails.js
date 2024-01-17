import React from 'react'

const GamesAdditionalDetails = () => {
    return (
        <div className="bg-gray-950 p-6 flex flex-col rounded-xl mt-5 h-max border border-gray-700">

            <div className="flex flex-row">
                <div className="flex justify-center w-3/4">
                    <h1 className="text-3xl font-abc text-white">Game ScreenShots</h1>
                </div>
                <div className="flex justify-center w-1/4">
                    <h1 className="text-3xl font-abc text-white ml-2">Played By</h1>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="w-3/4 overflow-x-auto overflow-y-hidden">
                    <div className="flex flex-row">
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/200" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/201" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/202" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/203" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/208" alt="" />
                    </div>
                </div>
                <div className="ml-5 flex flex-row items-center w-1/4 overflow-x-auto overflow-y-hidden">
                    <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />
                    <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/201" alt="Bordered avatar" />
                    <img class="flex ml-2 justify-center w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/202" alt="Bordered avatar" />
                </div>
            </div>
        </div>

    )
}

export default GamesAdditionalDetails