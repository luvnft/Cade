import React from 'react'
import Link from 'next/link';
const UpcomingGames = () => {
  const Data = [
    {
      name: "Space Invaders",
      img: "/ug1.png",
      link: "/Games/SpaceInvaders",
      desc: "Control a spaceship and defend Earth from waves of alien.",
    },
    {
      name: "Chess",
      img: "/ug2.png",
      link: "/Games/Chess",
      desc: "Checkmate your way to victory in this classic chess game!",
    },
    {
      name: "Car Race",
      img: "/ug3.png",
      link: "/Games/Carrace",
      desc: "Ready to race against the best in this high-speed car game!",

    },
  ];
  return (
    <>
      <h1 className="flex justify-center text-5xl font-abc text-white ml-10 m-4 font-bold">
        Upcoming Games🤘
      </h1>

      <div>
        <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {Data.map((item, key) => {
            return (
              <div className="relative " key={key}>
                <div className="flex justify-center">
                  <div className="relative h-28 w-72 mb-3 bg-transparent flex items-center justify-center">
                    {/* Rectangle */}
                    <div className="mt-3 flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
                      <div className='h-max flex justify-center items-center'>
                        <h1 className='text-5xl font-abc text-orange-500'>{item.name} </h1>
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
                <div>
                <Link href={item.link}>
                <div className='flex justify-center'>

                  <img
                    src={item.img}
                    alt="Image 1"
                    className="w-50 h-50 object-cover"
                  />
                </div>
                </Link>
                </div>
                <div className="hidden lg:block mt-5">
                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-950 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="text-3xl font-abc text-gray-700 dark:text-gray-400">
                      {item.desc}
                    </p>
                    <Link href={item.link}>
                    <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                      Play Now
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default UpcomingGames