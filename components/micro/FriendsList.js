import React from 'react'
import { MdExplore } from 'react-icons/md'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import styles from '../../styles/Popover.module.css'
import {AiOutlineSend} from 'react-icons/ai'
const FriendsList = () => {
    const Data = [
        {
            img: "https://picsum.photos/202",
            name: "User1"
        },
        {
            img: "https://picsum.photos/202",
            name: "User2"
        },
        {
            img: "https://picsum.photos/203",
            name: "User3"
        },
        {
            img: "https://picsum.photos/204",
            name: "User4"
        },
        {
            img: "https://picsum.photos/205",
            name: "User5"
        }
    ]
 
    return (
        <>
            <div className="flex flex-col mt-20">
                <div>
                    <MdExplore className='text-4xl' />
                </div>

                {Data.map((item) => {
                    return (
                        <>
                            <div className={styles.container}>
                                <img class="w-24 h-8 mt-5 rounded-full" src={item.img} alt="Rounded avatar"></img>
                                <div className={styles.content}>
                                    <div className={styles.arrow}></div>
                                    <div class="bg-black flex flex-col ml-5 mt-5">
                                        <div className='flex justify-between'>
                                            <img class="w-16  h-16 rounded-full" src={item.img} alt="Rounded avatar"></img>
                                            <button class="text-white font-abc bg-inherit border-2 border-white px-2 focus:outline-none rounded text-2xl mr-5">Following</button>
                                        </div>
                                        <h1 class="font-abc text-white text-3xl mt-2">{item.name}</h1>
                                        <h1 className='font-abc text-2xl text-white'>A proff. of retro games</h1>

                                        <div class="flex flex-row mt-5">
                                            <h1 class="font-abc text-2xl text-white">79 Following</h1>
                                            <h1 class="font-abc text-2xl text-white ml-5">10 Followers</h1>
                                        </div>
                                        <div>
                                            <h1 class="mt-5 font-abc text-3xl ">Chats</h1>
                                            <div class="text-white font-abc text-2xl mr-2 ml-2 mt-5 rounded-2xl w-30">
                                                <h1 class="w-1/2 bg-green-500 p-2 m-2  rounded-xl">My Message</h1>
                                               
                                            
                                            </div>

                                            <div class="flex justify-between mr-3 mt-5">
                                                <input value="fdf" class="bg-gray-900 p-2 rounded-2xl w-30" />
                                               <AiOutlineSend className='text-xl mt-3 ml-2'/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}





                {/* <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/201" alt="Rounded avatar"></img>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/202" alt="Rounded avatar"></img>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/203" alt="Rounded avatar"></img>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/204" alt="Rounded avatar"></img> */}
                <div>
                    <AiOutlineUsergroupAdd className='text-4xl mt-5' />
                </div>
            </div>
        </>
    )
}

export default FriendsList