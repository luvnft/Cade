import React from 'react'
import { BsMagic } from "react-icons/bs"
const Quest = () => {
    return (
        <>
            <div class="p-12 md:w-1/2 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-gray-800 text-yellow-300 text-opacity-75 text-xs font-medium tracking-widest">CADE</span>
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Uncompleted Quest</h2>
                <div class="flex border-2 rounded-lg border-white p-8 sm:flex-row flex-col">
                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  text-indigo-400 flex-shrink-0">
                        <BsMagic className='text-4xl text-yellow-400' />
                    </div>
                    <div class="flex-grow">
                        <h2 class="text-white text-lg title-font font-medium mb-3">Uncompleted Quest</h2>
                        
                        <label for="minmax-range" class="block mt-5 mb-2 font-medium text-gray-900 dark:text-white">Completed</label>
                        <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-yellow-300" />

                        <h1 className='mt-2 text-white'>33/100</h1>

                        <p className="leading-relaxed text-base mt-2">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Quest