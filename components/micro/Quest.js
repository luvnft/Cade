import React from 'react'
import { BsMagic } from "react-icons/bs"
const Quest = () => {
    return (
        <>
            <div class="p-12 md:w-1/2 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-gray-800 text-yellow-300 text-opacity-75 text-lg font-abc font-medium tracking-widest">CADE</span>
                <h2 class="text-5xl font-abc title-font font-medium text-white mt-4 mb-4">Uncompleted Challenges</h2>
                <div class="flex border-2 rounded-lg border-white  p-8 sm:flex-row flex-col">
                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  text-indigo-400 flex-shrink-0">
                        <BsMagic className='text-4xl text-yellow-400' />
                    </div>
                    <div class="flex-grow">
                    <h2 class="text-white text-4xl font-abc title-font font-medium mb-3">Challenges</h2>
                        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                            <li class="flex items-center">
                                <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <h1 className='text-3xl font-abc text-white'>Play 4 Games and Win atlest 2</h1>
                                
                            </li>
                            <li class="flex items-center">
                                <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <h1 className='text-3xl font-abc text-white'>Open 3 Blind Chest and 1 Blind Bag</h1>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <h1 className='text-3xl font-abc text-white'>Login For 7 Continous Days and refer 2 Friends</h1>
                            </li>
                        </ul>

                        <label for="minmax-range" class="font-abc text-4xl block mt-5 mb-2 font-medium text-gray-900 dark:text-white">Completed</label>
                        <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-yellow-300" />

                        <h1 className='mt-2 text-white font-abc text-3xl'>2/3</h1>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Quest