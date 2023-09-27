import React from 'react'
import { MdExplore } from 'react-icons/md'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
const FriendsList = () => {
    return (
        <>
            <div className="flex flex-col mt-20">
                <div>
                    <MdExplore className='text-4xl' />
                </div>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/200" alt="Rounded avatar"></img>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/201" alt="Rounded avatar"></img>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/202" alt="Rounded avatar"></img>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/203" alt="Rounded avatar"></img>
                <img class="w-24 h-8 mt-5 rounded-full" src="https://picsum.photos/204" alt="Rounded avatar"></img>
                <div>
                    <AiOutlineUsergroupAdd className='text-4xl mt-5' />
                </div>
            </div>
        </>
    )
}

export default FriendsList