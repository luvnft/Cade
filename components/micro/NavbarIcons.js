import React from 'react'
import Image from 'next/image'
const NavbarIcons = () => {
  return (
    <>

      <div className='flex flex-row '>

        <h2 className='font-abc text-2xl text-white mt-2'>
          100
        </h2>
        <h2 className='font-abc text-2xl text-white mt-2 ml-2'>
          XP
        </h2>
      </div>

      
      <div className='flex flex-row '>

        <h2 className='font-abc text-2xl text-white mt-2'>
          100 000
        </h2>
        <img class="w-12 h-12 ml-2 rounded-full" src="https://7fxmftuovhqylofjio4jlm2rrwdcmfrkz5hpgxiz25ffjjhskcvq.arweave.net/-W7Czo6p4YW4qUO4lbNRjYYmFirPTvNdGddKVKTyUKs" alt="Rounded avatar"></img>
      </div>




      <h2 className='font-abc text-2xl text-white mt-2'>
        UserName
      </h2>
      <img class="w-10 h-10 ml-2 rounded-full" src="https://picsum.photos/200/300" alt="Rounded avatar"></img>


    </>
  )
}

export default NavbarIcons