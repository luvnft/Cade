import React from 'react'

const testing = () => {
    return (
        <>
            {/* <div className="relative ">
                <div className='flex justify-center'>

                    <img
                        src="/a1.png"
                        alt="Image 1"
                        className="w-50 h-50 object-cover"
                    />
                </div>
                <div className=''>
                    <img
                        src="/molegame.jpeg"
                        alt="Image 2"
                        className="mt-12 lg:mt-20  rounded-2xl absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-24 lg:w-32 lg:h-32 -translate-y-1/2 object-cover z-20"
                    />

                </div>
            </div> */}
            <div className="w-64 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 border-4 border-white opacity-50"></div>
                <div className="absolute inset-0 animate-squareTravel">
                    <div className="absolute w-8 h-8 bg-white border-2 border-blue-500"></div>
                </div>
            </div>
        </>
    )
}

export default testing