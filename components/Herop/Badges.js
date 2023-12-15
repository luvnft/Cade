import React from 'react'

const Badges = () => {
    return (
        <>


            <div class="mt-5  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700">
                <h1 className='font-abc text-white text-5xl mt-5'>Your Trophies</h1>
                <div className='mt-2'>
                    <img src='/trophy 2.png' height={60} width={60} alt='badges' />
                </div>
                <h1 className='font-abc text-white text-5xl mt-5'>Upcoming Trophies</h1>
                <div className='flex flex-row gap-x-2 gap-y-2 mt-4'>
                <img src='/trophy.png' height={60} width={60} alt='badges' />
                <img src='/trophy 3.png' height={60} width={60} alt='badges' />
                <img src='/trophy 4.png' height={60} width={60} alt='badges' />
                </div>
                <a href="#" class="text-2xl font-abc mt-10 inline-flex items-center text-yellow-300 hover:underline">
                    View More 
                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </a>
            </div>

        </>
    )
}

export default Badges