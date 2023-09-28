import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi"
export const DownwardBar = ({slug}) => {
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font rounded-xl">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="font-abc title-font font-medium sm:text-4xl text-3xl text-white">{slug}</h2>
                            <p class="text-white font-abc text-3xl">Game</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">

                            <div className='flex'>
                                <a class="inline-flex items-center">
                                    <BiSolidUpArrow className='text-green-500 text-3xl' />
                                    <span class="flex-grow flex flex-col pl-3">
                                        <span class="text-4xl font-abc text-white">100+ XP</span>
                                    </span>
                                </a>


                            </div>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">

                            <div className='flex'>
                                <a class="inline-flex items-center">
                                    <img src='/cade.png' height={50} width={50} alt='cade' />
                                    <span class="flex-grow flex flex-col pl-3">
                                        <span class="text-4xl font-abc text-white">Cade 0.1+</span>
                                    </span>
                                </a>


                            </div>

                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="font-abc sm:text-4xl text-3xl text-white">400+</h2>
                            <p class="text-white font-abc text-3xl">Times Played</p>
                        </div>
                        <div className='ml-16 '>
                            <button class="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl"
                                onClick={() => setshow(!show)}
                            >Play Now</button>
                        </div>
                        <div className='ml-16 '>
                            <button class="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl"
                                onClick={() => mintCade()}
                            >Claim XP and Cade</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
