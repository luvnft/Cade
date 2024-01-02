import React, { useEffect, useState } from 'react'
import { truncateWalletAddress } from '../../hooks/Truncate'
import {
    useWallet
} from "@solana/wallet-adapter-react";
const CadeCard = () => {
    const { publicKey } = useWallet();
    const [userpublicKey, setUserPublicKey] = useState("")

    useEffect(() => {
        if (publicKey) {
            setUserPublicKey(publicKey.toBase58().toString())
        }
    
    })

    return (
        <>
            <div class="border-2 border-gray-200 relative bg-center bg-[url('/ig.png')] object-center bg-no-repeat lg:h-1/2 p-6 mt-5 from-gray-300 to-purple-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


                <div className='flex flex-row'>
                    <div className='w-4/5'>
                        <img class="w-12 h-12 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />
                    </div>
                    <div className='w-2/5'>
                        <h1 className='text-white text-2xl font-abc'>{truncateWalletAddress(userpublicKey)}</h1>
                    </div>
                </div>
                <p class="invisible mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                <p class="invisible mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                <div class="m-3 absolute bottom-0 left-0">
                    <h1 className='text-3xl font-abc text-white'>
                        Ben zonak <span className='text-2xl'>(member since : 12/24)</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default CadeCard