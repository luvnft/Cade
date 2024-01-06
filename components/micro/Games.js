import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArcadeBoard from "../Herop/ArcadeBoard";
const Games = () => {
  const Data = [
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence",
      desc: "Games where the goal is to defend your base by enemy.",
      arcadeMachineImage : "/a6.png"
    },
    {
      name: "Mole Smash",
      img: "/molegame.jpeg",
      link: "/Games/MoleSmash",
      desc: "Control a spaceship and defend Earth from waves of alien.",
      arcadeMachineImage : "/a2.png"
    },
    {
      name: "Skyline Skaddle",
      img: "/skygame.jpg",
      link: "/Games/SkylineSkaddle",
      desc: "Ready to race against the best in this high-speed car game!",
      arcadeMachineImage : "/a3.png"
    },
    {
      name: "Four In Line",
      img: "/fourinline.png",
      link: "/Games/FourInLine",
      desc: "A classic strategy game of aligning four tokens in a row.",
      arcadeMachineImage : "/a4.png"
    },
    {
      name: "Tile Survive",
      img: "/tile.jpg",
      link: "/Games/TileSurvive",
      desc: "Checkmate your way to victory in this classic chess game!",
      arcadeMachineImage : "/a5.png"
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip",
      desc: "A retro coin flip game of digital twist on a classic 50/50 chance.",
      arcadeMachineImage : "/a8.png"
    },
  ];
  return (
    <>
      <h1 className="flex justify-center text-5xl font-abc text-white font-bold ml-10 mt-12 m-4 ">
        All Games🔥
      </h1>

      <div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {Data.map((item) => {
            
            return (
              <>
              
              <div className="relative ">
              <div className="flex justify-center">
              <div className="relative h-28 w-72 mb-3 bg-transparent flex items-center justify-center">
                {/* Rectangle */}
                <div className="mt-3 flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
                    <div className='h-max flex justify-center items-center'>
                        <h1 className='text-5xl font-abc text-yellow-300'>{item.name} </h1>
                    </div>
                

                {/* Blinking lights at corners */}
                <div className="rounded-full absolute top-0 left-0 w-4 h-4 bg-red-500 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-1/4 w-4 h-4 bg-purple-500 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-2/4 w-4 h-4 bg-cyan-400 animate-blink"></div>
                <div className="rounded-full absolute top-0 left-3/4 w-4 h-4 bg-yellow-300 animate-blink"></div>

                <div className="rounded-full absolute top-0 right-0 w-4 h-4 bg-teal-400 animate-blink"></div>
                <div className="rounded-full absolute top-1/2 right-0 w-4 h-4 bg-orange-400 animate-blink"></div>
                <div className="rounded-full absolute top-1/4 right-0 w-4 h-4 bg-blue-500 animate-blink"></div>
                {/* <div className="rounded-full absolute bottom-1 right-0 w-4 h-4 bg-blue-500 animate-blink"></div> */}

                <div className="rounded-full absolute top-1/4 left-0 w-4 h-4 bg-fuchsia-500 animate-blink"></div>
                <div className="rounded-full absolute top-2/4 left-0 w-4 h-4 bg-pink-600 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 left-0 w-4 h-4 bg-green-500 animate-blink"></div>
                {/* <div className="rounded-full absolute top-3/4 left-0 w-4 h-4 bg-green-500 animate-blink"></div> */}


                <div className="rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-red-800 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-1/2 transform translate-x-1/2 w-4 h-4 bg-green-400 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-1/4 transform translate-x-1/2 w-4 h-4 bg-yellow-200 animate-blink"></div>
                <div className="rounded-full absolute bottom-0 right-0 w-4 h-4 bg-yellow-500 animate-blink"></div>
            </div>
            </div>
            </div>
            <div>
            <Link href={item.link}>
                    <div className='flex justify-center'>

                        <img
                            src={item.arcadeMachineImage}
                            alt="Image 1"
                            className="w-50 h-50 object-cover"
                        />
                    </div>
                    <div className=''>
                        {/* <img
                            src="/display.png"
                            alt="Image 3"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-32 object-cover z-30"
                        /> */}
                        <img
                            src={item.img}
                            alt="Image 2"
                            className="mt-32 lg:mt-12  rounded-2xl absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-24 lg:w-24 lg:h-24 -translate-y-1/2 object-cover z-20"
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
                </>
             
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Games;
