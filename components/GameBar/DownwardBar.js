import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi"
export const DownwardBar = ({ slug , playerOne , secondPlayer , thirdPlayer , description }) => {
    return (
        <>
            <>

                <div className='font-abc text-6xl ml-16 text-white'>
                    <h1>Top Players of {slug}</h1>
                </div>
                <section class="text-gray-40 body-font overflow-hidden">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="-my-8 divide-y-2 divide-gray-800">
                            <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <div className='flex justify-center'>
                                        <img height={85} width={85} src='/l1.png' alt='gggg' />
                                    </div>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="font-abc text-5xl font-medium text-white title-font mb-2">{playerOne}</h2>

                                </div>
                            </div>
                            <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <div className='flex justify-center'>
                                        <img height={85} width={85} src='/l2.png' alt='gggg' />
                                    </div>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="font-abc text-5xl font-medium text-white title-font mb-2">{secondPlayer}</h2>

                                </div>
                            </div>
                            <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <div className='flex justify-center'>
                                        <img height={85} width={85} src='/l3.png' alt='gggg' />
                                    </div>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="font-abc text-5xl font-medium text-white title-font mb-2">{thirdPlayer}</h2>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </>

        </>
    )
}
