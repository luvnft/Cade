import React from "react";
import Image from "next/image";
import Link from "next/link";
const Games = () => {
  const Data = [
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence",
      desc: "Games where the goal is to defend your base by obstructing enemy.",
    },
    {
      name: "Mole Smash",
      img: "/molegame.jpeg",
      link: "/Games/MoleSmash",
      desc: "Control a spaceship and defend Earth from waves of alien.",
    },
    {
      name: "Skyline Skaddle",
      img: "/skygame.jpg",
      link: "/Games/SkylineSkaddle",
      desc: "Ready to race against the best in this high-speed car game!",
    },
    {
      name: "Four In Line",
      img: "/fourinline.png",
      link: "/Games/FourInLine",
      desc: "A classic strategy game of aligning four tokens in a row.",
    },
    {
      name: "Tile Survive",
      img: "/sample4.jpg",
      link: "/Games/TileSurvive",
      desc: "Checkmate your way to victory in this classic chess game!",
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip",
      desc: "A retro coin flip game of digital twist on a classic 50/50 chance.",
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
              <div className="flex flex-col justify-center" key={item.name}>
                <div>
                  <Link
                    href={item.link}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover w-64 h-6w-64 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
                      src={item.img}
                      alt="Gamne Image"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-4xl font-abc font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </div>
                  </Link>
                </div>
                <div className="hidden lg:block mt-5">
                  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-950 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="font-normal text-3xl font-abc text-gray-700 dark:text-gray-400">
                      {item.desc}
                    </p>
                    
                    <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                      <Link href={item.link}>
                        PLay Now
                      </Link>
                    </button>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Games;
