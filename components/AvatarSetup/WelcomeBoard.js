import React from 'react'

const WelcomeBoard = ({ message , width }) => {
    return (
        <>
            <div className={`border-4 border-gray-300 relative h-36 w-${width} mb-3 bg-gray-950 flex items-center justify-center`}>
                {/* Rectangle */}
                <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
                    <div className='h-max flex justify-center items-center'>
                        <h1 className='text-5xl font-abc text-yellow-300'>{message}</h1>
                    </div>


                    {/* Blinking lights at corners */}
                    <div className="m-1 rounded-full absolute top-0 left-0 w-4 h-4 bg-red-500 animate-blink"></div>
                    <div className="m-1 rounded-full absolute top-0 left-1/4 w-4 h-4 bg-purple-500 animate-blink"></div>
                    <div className="m-1 rounded-full absolute top-0 left-2/4 w-4 h-4 bg-cyan-400 animate-blink"></div>
                    <div className="m-1 rounded-full absolute top-0 left-3/4 w-4 h-4 bg-yellow-300 animate-blink"></div>

                    <div className="m-1 rounded-full absolute top-0 right-0 w-4 h-4 bg-teal-400 animate-blink"></div>
                    <div className="m-1 rounded-full absolute top-1/2 right-0 w-4 h-4 bg-orange-400 animate-blink"></div>
                    <div className="m-1 rounded-full absolute top-1/4 right-0 w-4 h-4 bg-blue-500 animate-blink"></div>
                    {/* <div className="m-1 rounded-full absolute bottom-1 right-0 w-4 h-4 bg-blue-500 animate-blink"></div> */}

                    <div className="m-1 rounded-full absolute top-1/4 left-0 w-4 h-4 bg-fuchsia-500 animate-blink"></div>
                    <div className="m-1 rounded-full absolute top-2/4 left-0 w-4 h-4 bg-pink-600 animate-blink"></div>
                    <div className="m-1 rounded-full absolute bottom-0 left-0 w-4 h-4 bg-green-500 animate-blink"></div>
                    {/* <div className="m-1 rounded-full absolute top-3/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div> */}


                    <div className="m-1 rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-red-800 animate-blink"></div>
                    <div className="m-1 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 animate-blink"></div>
                    {/* <div className="m-1 rounded-full absolute bottom-0 right-1/2 transform translate-x-1/2 w-4 h-4 bg-green-400 animate-blink"></div> */}
                    <div className="m-1 rounded-full absolute bottom-0 right-1/4 transform translate-x-1/2 w-4 h-4 bg-yellow-200 animate-blink"></div>
                    <div className="m-1 rounded-full absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 animate-blink"></div>
                </div>
            </div>
        </>
    )
}

export default WelcomeBoard