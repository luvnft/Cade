import React from 'react'
import { IoNotifications } from "react-icons/io5";
const Announcement = () => {
    return (
        <>

            <div className='mt-10 gap-2 flex flex-row justify-center'>
                <h1 className='sm:text-5xl text-6xl font-abc text-white'>Accountments</h1>
                <IoNotifications className='mt-3 text-yellow-300 text-4xl' />
            </div>

            <div class="p-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700">

                <a href="#">
                    <img class="rounded-t-lg" src="/discord.jpg" alt="" />
                </a>
                <div class="p-2">
                    <a href="#">
                        <h5 class="mb-2 text-4xl font-abc tracking-tight text-gray-900 dark:text-white">Cade Discord Release</h5>
                    </a>
                    <p class="text-xl mb-3 font-abc text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <button type="button" class="mt-5 font-abc text-2xl bg-gray-950 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-3 py-3 me-2 mb-2 ">More Details</button>
                </div>
            </div>

            <div class="p-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="/phantom.jpg" alt="" />
                </a>
                <div class="p-2">
                    <a href="#">
                        <h5 class="mb-2 text-4xl font-abc tracking-tight text-gray-900 dark:text-white">Cade x Phantom</h5>
                    </a>
                    <p class="text-xl mb-3 font-abc text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <button type="button" class="mt-5 font-abc text-2xl bg-gray-950 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-3 py-3 me-2 mb-2 ">More Details</button>
                </div>
            </div>

            <div class="p-2 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700">

                <div class="p-2">
                    <a href="#">
                        <h5 class="mb-2 text-4xl font-abc tracking-tight text-gray-900 dark:text-white">Cade Devnet faucet Release🔥</h5>
                    </a>

                    <button type="button" class="mt-5 font-abc text-2xl bg-gray-950 text-white border-2 border-yellow-400 focus:outline-none rounded-lg px-3 py-3 me-2 mb-2 "><a href='/Cadefaucet'>More Details</a></button>
                </div>
            </div>
        </>
    )
}

export default Announcement