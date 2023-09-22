import React from 'react'
import FriendsList from '../components/micro/FriendsList'
import MicroLeaderBoard from '../components/LeaderBoard/MicroLeaderBoard'
const LeaderBoard = () => {
    return (
        <>



            <section class="text-gray-400 body-font bg-[url('/kn.jpg')]">
                <div className='flex justify-center py-10'>
                    <h1 className='font-abc text-6xl text-white'>LeaderBoard</h1>
                </div>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                        <div className='flex justify-center'>
                            <img height={200} width={200} src='/l1.png' alt='gggg' />
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="font-abc text-white text-6xl title-font font-medium mb-2">User1</h2>
                            <h2 class="font-abc text-white text-4xl title-font font-medium mb-2">Matched Played : 187</h2>
                            <h2 class="font-abc text-white text-4xl title-font font-medium mb-2">Win Ratio : 92%</h2>
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="font-abc text-white text-6xl title-font font-medium mb-2">User2</h2>
                            <h2 class="font-abc text-white text-4xl title-font font-medium mb-2">Matched Played : 107</h2>
                            <h2 class="font-abc text-white text-4xl title-font font-medium mb-2">Win Ratio : 62%</h2>

                        </div>
                        <div className='flex justify-center'>
                            <img height={200} width={200} src='/l2.png' alt='gggg' />
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div className='flex justify-center'>
                            <img height={200} width={200} src='/l3.png' alt='gggg' />
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="font-abc text-white text-6xl title-font font-medium mb-2">User3</h2>
                            <h2 class="font-abc text-white text-4xl title-font font-medium mb-2">Matched Played : 92</h2>
                            <h2 class="font-abc text-white text-4xl title-font font-medium mb-2">Win Ratio : 42%</h2>
                        </div>
                    </div>

                </div>

                <div>
                    <MicroLeaderBoard />
                </div>

            </section>

        </>
    )
}

export default LeaderBoard