import React from 'react'

const CardFotter = () => {
    return (
        <>
        <div>
            <div className='ml-5 mt-5 flex flex-row'>
               <div className='w-3/4'>
               <h1 className='text-2xl text-white font-abc'>
                Card Type
               </h1>
               </div>
               <div className='w-1/4'> 
               <h1 className='text-2xl text-white font-abc'>
                Premium
               </h1>
               </div>
            </div>
            <div class="mt-2 border-t-2 border-gray-700"></div>
            <div className='ml-5 mt-5 flex flex-row'>
               <div className='w-3/5'>
               <h1 className='text-2xl text-white font-abc'>
                Preloaded Cade
               </h1>
               </div>
               <div className='w-2/5'> 
               <div className='flex flex-row'>
               <h1 className='m-2 text-2xl text-white font-abc'>
                500
               </h1>
               <button type="button" class="focus:outline-none text-black font-abc bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-1 me-2 mb-2 dark:focus:ring-yellow-900">Claim</button>

               </div>
               </div>
            </div>
           
            </div>
        </>
    )
}

export default CardFotter