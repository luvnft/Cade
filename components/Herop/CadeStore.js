import React from 'react'
import { CadeStoreData } from '../Data/data';
const CadeStore = () => {
    return (
        <>
            <h1 className="text-white text-6xl font-abc ml-8 mt-5">
                Cade Store🔥
            </h1>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {CadeStoreData.map((item) => {
                    return (
                        <div className="border-2 border-gray-700  bg-gray-950 p-6 rounded-lg" key={item.name}>
                            <img
                                height={100}
                                width={100}
                                className="h-60 rounded w-full object-cover object-center mb-6"
                                src={item.img}
                                alt="content"
                            />
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                CADE STORE
                            </h3>
                            <h2 className="text-white text-3xl font-abc title-font mb-4">
                                {item.name}
                            </h2>
                            <p className="text-white font-abc text-2xl">{item.desc}</p>
                            {/* needs onClick execute function  */}
                            <button
                                // onClick={() => finalNewTransfer()}
                                className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                            >
                                Buy for {item.price} Tickets
                            </button>

                            <a href="#" class="text-2xl font-abc mt-10 inline-flex items-center text-yellow-300 hover:underline">
                                View More
                                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>

                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default CadeStore