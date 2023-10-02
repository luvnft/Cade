import React, { useState } from 'react'
import {
  OpenChest
} from '../../components/Data/data'
const RedeemBlindChest = ({ name, img }) => {
  const [redeem , setRedeem] = useState(false)
  return (
    <>
      <div className='flex justify-center mt-10'>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={img} alt="hgh" />
          </a>
          <div class="flex flex-row p-5">
            <a href="#">
              <h5 class="mt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </a>
            <button
            onClick={()=> setRedeem(!redeem)}
              class="ml-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Redeem</button>
          </div>
        </div>



      </div>
      
      {redeem ? (
        <>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {OpenChest.map((item) => {
          return (
            <>
              <div class="bg-black p-6 rounded-lg">
                <img height={100} width={100} class="h-60 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">CADE STORE</h3>
                <h2 class="text-white text-3xl font-abc title-font mb-4">{item.name}</h2>
                <p class="text-white font-abc text-2xl">{item.desc}</p>
                {/* needs onClick execute function  */}
                <button
                  onClick={() => execute("https://wd76k5vv2aka7kcyewzori53k65knga2yncczccn2xxleyurucha.arweave.net/sP_ldrXQFA-oWCWy6KO7V7qmmBrDRCyITdXusmKRoI4")}
                  class="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Buy for {item.price} Cade</button>

              </div>
            </>
          )
        })}

      </div>
        </>
      ) : (
        <></>
      )}
      
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let name = "";
  let img = ""
  let isExist = false
  console.log(`slug is my ${slug}`);
  if (slug == 'BlindChest') {
    name = "Blind Chest x1",
      img = "/treasure.png"
    isExist = true
  }
  if (slug == 'BlindBag') {
    name = "BlindBag x1",
      img = "/bag.png",
      isExist = true
  }

  return {
    props: { slug, name, img, isExist },

  };
}

export default RedeemBlindChest