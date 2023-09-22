import React from 'react'
import Image from 'next/image'
const NavbarIcons = () => {
  return (

    <div className='flex flex-row '>

      <h2 className='font-abc text-2xl text-white mt-2'>
        UserName
      </h2>
      <img class="w-10 h-10 ml-5 rounded-full" src="https://picsum.photos/200/300" alt="Rounded avatar"></img>
    </div>


  )
}

export default NavbarIcons