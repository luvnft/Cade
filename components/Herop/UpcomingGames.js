import React from 'react'

const UpcomingGames = () => {
    const Data = [
        {
          name: "Space Invaders",
          img: "/spacenew.webp",
          link: "/Games/SpaceInvaders",
          desc : "Control a spaceship and defend Earth from waves of alien." 
        },
        {
          name: "Chess",
          img: "/chess.avif",
          link: "/Games/Chess",
          desc : "Checkmate your way to victory in this classic chess game!"
        },
        
        
        {
          name: "Car Race",
          img: "/car.jpg",
          link: "/Games/Carrace",
          desc : "Ready to race against the best in this high-speed car game!"
        },
      ];
  return (
    <>
          <h1 className="flex justify-center text-6xl font-abc text-white ml-10 m-4 font-bold">
        Upcoming Games🤘
      </h1>

      <div>
        <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {Data.map((item) => {
            return (
              <div className="flex flex-col" key={item.name}>
                <div>
                  <a
                    href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h- md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={item.img}
                      alt="Gamne Image"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-4xl font-abc font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </div>
                  </a>
                </div>
                <div className="mt-5">
                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-950 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="font-normal text-3xl font-abc text-gray-700 dark:text-gray-400">
                     {item.desc}
                    </p>
                    <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                      <a href={item.link}>Play Now</a>
                    </button>
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