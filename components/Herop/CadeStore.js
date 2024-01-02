import React from 'react'
import { CadeStoreData } from '../Data/data';
const CadeStore = () => {
    return (
        <>
            <h1 className="text-white text-5xl font-abc ml-8 mt-5 font-bold">
                Cade Store🔥
            </h1>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {CadeStoreData.map((item) => {
                    return (
                        <div className="border-2 border-gray-700  bg-gray-950 p-6 rounded-lg" key={item.name}>

                            <div className='flex justify-center'>
                                <img
                                    className="h-64 w-64 rounded object-cover object-center mb-6"
                                    src={item.img}
                                    alt="content"
                                />
                            </div>
                            <h2 className="text-white text-4xl font-abc font-bold mb-4">
                                {item.name}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-400 font-abc text-3xl">{item.desc}</p>
                            {/* needs onClick execute function  */}
                            <button
                                // onClick={() => finalNewTransfer()}
                                className="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl"
                            >
                                Buy for {item.price} Tickets
                            </button>


                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default CadeStore