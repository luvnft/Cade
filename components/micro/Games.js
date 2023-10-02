import React from 'react'
import Image from 'next/image'
const Games = () => {

  const Data = [
    {
      name: "Space Invaders",
      img: "/spacenew.webp",
      link: "/Games/SpaceInvaders"
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip"
    },
    {
      name: "Four In Line Game",
      img: "/fourinline.png",
      link: "/Games/FourInLine"
    },
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence"
    }
  ]
  return (
    <>
      <h1 className='text-6xl font-abc text-white mt-10 ml-10 font-bold'>
        Top Games
      </h1>

      <div>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">

          {Data.map((item) => {
            return (
              <>
                <div className='flex flex-col'>
                  <div>
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <img class="object-cover w-full rounded-t-lg h- md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.img} alt="" />
                      <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-4xl font-abc font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>

                      </div>
                    </a>
                  </div>
                  <div className='mt-5'>

                    <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p class="font-normal text-4xl font-abc text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology.</p>
                      <button class="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                        <a href={item.link}>PLay</a>
                      </button>
                    </div>


                  </div>
                </div>
              </>
            )
          })}



        </div>
      </div>

    </>
  )
}

export default Games