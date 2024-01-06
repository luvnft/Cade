import React from 'react'

const testing = () => {
    return (
        <>
            <div className="relative h-32 w-96 bg-gray-950 flex items-center justify-center">
                {/* Rectangle */}
                <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 border-4 border-gray-950">
                    <div className='h-max flex justify-center items-center'>
                        <h1 className='text-5xl font-abc text-yellow-300'>Four In Line Game</h1>
                    </div>
                

                {/* Blinking lights at corners */}
                <div className="rounded-full absolute top-0 left-0 w-4 h-4 bg-red-500 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-1/4 w-4 h-4 bg-red-500 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-2/4 w-4 h-4 bg-red-500 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-3/4 w-4 h-4 bg-red-500 animate-blink"></div>

                <div className="rounded-full absolute top-0 right-0 w-4 h-4 bg-blue-500 animate-blink"></div>
                <div className="rounded-full absolute top-1/2 right-0 w-4 h-4 bg-blue-500 animate-blink"></div>
                <div className="rounded-full absolute top-1/4 right-0 w-4 h-4 bg-blue-500 animate-blink"></div>
                {/* <div className="rounded-full absolute bottom-1 right-0 w-4 h-4 bg-blue-500 animate-blink"></div> */}

                <div className="rounded-full absolute top-1/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div>
                <div className="rounded-full absolute top-2/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 left-0 w-4 h-4 bg-green-500 animate-blink"></div>
                {/* <div className="rounded-full absolute top-3/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div> */}


                <div className="rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-red-800 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-1/2 transform translate-x-1/2 w-4 h-4 bg-green-400 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-1/4 transform translate-x-1/2 w-4 h-4 bg-yellow-200 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 animate-blink"></div>
            </div>
            </div>
        </>
    )
}

export default testing