import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi"
import {AiOutlineCaretDown} from 'react-icons/ai'
const GameHistory = () => {
    const Data = [
        {
            name: "Car Race",
            date : "15",
            status : "Win",
            color : "green-400",
            winningStatus : true
        },
        {
            name: "Coin Flip",
            date : "12",
            status : "Loss",
            color : "red-400",
            winningStatus : false
        },
        {
            name: "Dice Game",
            date : "22",
            status : "Win",
            color : "green-400",
            winningStatus : true
        },
        {
            name: "Car Race",
            date : "11",
            status : "Win",
            color : "green-400",
            winningStatus : true
        }
    ]
    return (
        <>
          <div>
          <h1 className='text-6xl font-abc ml-16 mt-16'>
            Game History
          </h1>
      
        <div class="lg:ml-28 p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {Data.map((item)=>{
            return(
                <>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -my-8">
                        <div class="py-8 px-2 lg:w-1/2 bg-black rounded-2xl">
                            <div class="h-full flex ">
                                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span class="font-abc text-2xl text-white pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                    <span class="font-abc text-2xl text-white title-font leading-none">{item.date}</span>
                                </div>
                                <div class="flex-grow pl-4">
                                    <h2 class={`tracking-widest font-abc text-3xl ${item.winningStatus ? "text-green-400" : "text-red-400"} mb-1 ml-10`}>{item.status}</h2>
                                    <h1 class="font-abc text-3xl text-white mb-3">{item.name}</h1>

                                    <a class="inline-flex items-center">
                                    {item.winningStatus ? (

                                        <BiSolidUpArrow className='text-green-500 text-2xl' />
                                    ):(
                                        <AiOutlineCaretDown className='text-red-500 text-4xl'/>
                                    )}
                                        <span class="flex-grow flex flex-col pl-3">
                                            <span class="text-3xl font-abc text-white">80+ Cade</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
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

export default GameHistory