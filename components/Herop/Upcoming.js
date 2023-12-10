import React from 'react'
import { MdUpcoming } from "react-icons/md";
const Upcoming = () => {
    return (
        <>
            <div className='mt-10 gap-2 flex flex-row justify-center'>
                <h1 className='text-5xl font-abc text-white'>Upcomings</h1>
                <MdUpcoming className='mt-2 text-yellow-300 text-4xl' />
            </div>
            <div className='flex justify-center mt-5 '>

                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cade Alpha vserions coming out soon 😉</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

            </div>
        </>
    )
}

export default Upcoming