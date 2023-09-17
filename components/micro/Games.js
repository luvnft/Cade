import React from 'react'
import Image from 'next/image'
const Games = () => {

  const Data = [
    {
      name: "Space Invaders",
      img: "/spaceinvaders.png"
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg"
    },
    {
      name: "Dice Game",
      img: "/dice.jpg"
    },
    {
      name: "Car Race",
      img: "/car.jpg"
    }
  ]
  return (
    <>
      <h1 className='text-3xl text-white mt-10 ml-10 font-bold'>
        Top Games
      </h1>

      <div>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">

          {Data.map((item) => {
            return (
              <>
                <div>
                  <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.img} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>

                    </div>
                  </a>
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