import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi"
import { BsMagic } from "react-icons/bs"
const Season = () => {
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font overflow-hidden mt-10 ml-4">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-12">
                        <div class="p-12 md:w-1/2 flex flex-col items-start">
                            <span class="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CADE</span>
                            <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                            <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn.</p>

                            <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  text-indigo-400 flex-shrink-0">
                                    <img className='rounded-full' src='https://firebasestorage.googleapis.com/v0/b/orbit-4ea31.appspot.com/o/hehe.png?alt=media&token=c9b80a22-1a52-4b01-9181-0348f8e84caf' alt='/>'></img>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-white text-xl title-font font-medium mb-3">Rank</h2>
                                    <h2 class="text-white text-5xl title-font font-medium mb-3">#94</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    <button class="bg-transparent mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        LeaderBoard
                                    </button>

                                </div>
                                <div className='flex flex-col'>
                                    <BiSolidUpArrow className='text-green-400 text-3xl' />
                                    <h3 className='text-3xl'>33</h3>
                                </div>


                            </div>


                        </div>
                        <div class="p-12 md:w-1/2 flex flex-col items-start">
                            <span class="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CADE</span>
                            <h2 class="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
                            <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn.</p>
                            <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  text-indigo-400 flex-shrink-0">
                                    <BsMagic className='text-4xl text-white' />
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-white text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>


                                    <label for="minmax-range" class="block mt-5 mb-2 font-medium text-gray-900 dark:text-white">Min-max range</label>
                                    <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                                    <h1>33/100</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Season