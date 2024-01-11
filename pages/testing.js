import React from 'react'

const testing = () => {
    return (
        <>
         <div className="flex justify-center items-center mt-96">
                  <div className="relative h-32 w-96 mb-3 bg-transparent flex items-center justify-center">
                    {/* Rectangle */}
                    <div className="mt-3 flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
                      <div className='h-max flex justify-center item-center'>
                        <h1 className='flex justify-center item-center text-7xl font-abc text-orange-500'>@gg_cade</h1>
                      </div>


                      {/* Blinking lights at corners */}
                      <div className="rounded-full absolute top-0 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-0 left-1/4 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-0 left-2/4 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-0 left-3/4 w-4 h-4 bg-orange-500 animate-blink"></div>

                      <div className="rounded-full absolute top-0 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-1/2 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-1/4 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      {/* <div className="rounded-full absolute bottom-1 right-0 w-4 h-4 bg-blue-500 animate-blink"></div> */}

                      <div className="rounded-full absolute top-1/4 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute top-2/4 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 left-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                      {/* <div className="rounded-full absolute top-3/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div> */}


                      <div className="rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 right-1/2 transform translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 right-1/4 transform translate-x-1/2 w-4 h-4 bg-orange-500 animate-blink"></div>
                      <div className="rounded-full absolute bottom-0 right-0 w-4 h-4 bg-orange-500 animate-blink"></div>
                    </div>
                  </div>
                </div>
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
            {/* <div className="w-64 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 border-4 border-white opacity-50"></div>
                <div className="absolute inset-0 animate-squareTravel">
                    <div className="absolute w-8 h-8 bg-white border-2 border-blue-500"></div>
                </div>
            </div> */}
        </>
    )
}

export default testing