import React, { useEffect, useState } from 'react'
import { FaWifi } from "react-icons/fa6";
import { TiBatteryFull } from "react-icons/ti";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useUSDCPay } from "../../hooks/transfer";
import { FaCheck } from "react-icons/fa";
const CadeCardMachine = ({color}) => {

    useEffect(()=> {
        console.log(color)
    },[])
    const { createTransaction } = useUSDCPay();
    const { publicKey } = useWallet();
    const [margin, setMargin] = useState("60px")
    const [heading, setHeading] = useState("No Transaction")
    const [blinkingLightColor, setBlinkingLightColor] = useState("red-500")
    const insertCadeCard = () => {
        setTimeout(() => {
            setMargin("-200px")
            setBlinkingLightColor("green-400")
            setHeading("In Progress (-5CDX)")
        },200)
        setTimeout(() => {
            createTransaction(
                publicKey,
                new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
                5
            );
        }, 300)
    }

    const takeOutCard = () => {
        setMargin("60px")
        setBlinkingLightColor("red-500")
        setHeading("No Transaction")
    }

    return (
        <>
            <div className='flex flex-col h-max relative'>

                <div id='first' style={{ height: "30rem" }} className={`z-10 border-4  border-gray-200 relative flex flex-col justify-center items-center bg-${color} w-80 rounded-xl`}>
                    <div className='w-72 h-80 bg-transparent rounded-xl'>
                        <div className='rounded-2xl absolute top-0 w-64 m-4 mt-5 h-7 bg-black'>
                            <div className='flex flex-row justify-center gap-x-10 mt-2'>
                                <div className={`rounded-full w-3 h-3 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-3 h-3 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-3 h-3 bg-${blinkingLightColor} animate-blink`}></div>
                                <div className={`rounded-full w-3 h-3 bg-${blinkingLightColor} animate-blink`}></div>
                            </div>
                        </div>

                        <div style={{ height: "12rem" }} className='relative border-4 border-blue-950  rounded-xl  w-72 bg-blue-800'>

                            <div className='flex flex-row'>
                                <div className='w-3/4 flex justify-center'>
                                    <h1 className='font-abc text-2xl text-white'>
                                        Cade Card Machine
                                    </h1>
                                </div>
                                <div className='gap-x-4 mt-2 flex flex-row w-1/4'>
                                    <FaWifi className='text-white   text-lg' />
                                    <TiBatteryFull className='text-white    text-lg' />
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center absolute top-1/3'>
                                <h1 className='text-2xl text-white font-abc'>{heading} <span className='animate-blink'>...</span> </h1>
                            </div>
                            {/* <div className='mt-1 w-full flex justify-center items-center absolute top-1/2 mt-3'>
                                <h1 className=' text-white font-abc'>(Click on ✔ button to insert your card)</h1>
                            </div> */}
                            <div className='w-full mb-2 flex justify-center items-center absolute bottom-0'>
                                <h1 className='text-2xl text-white font-abc'>Accepted - CADE|BONK|USDC</h1>
                            </div>
                        </div>

                        <div style={{ height: "9rem" }} className='mt-5 border-4 border-gray-500 rounded-xl w-72 bg-slate-800 '>
                            <div className='ml-6 flex  flex-row h-1/2'>
                                <div className='flex  flex-col items-center w-1/2 cursor-pointer' onClick={insertCadeCard}>
                                    <div className='border-4 border-gray-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900 text-green-400'>
                                        <h1 className='text-green-400 font-abc text-xl'><FaCheck className='text-green-400' /></h1>
                                    </div>
                                    <h1 className='text-white font-abc text-xl'>Insert</h1>
                                </div>
                                <div className='flex flex-col  w-1/2 cursor-pointer' onClick={takeOutCard}>
                                    <div className='border-4 border-gray-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>❌</div>
                                    <h1 className='text-white font-abc text-xl'>Decline</h1>
                                </div>
                            </div>
                            <div className='flex flex-row h-1/2 mt-3'>
                                <div className='flex justify-center items-center ml-3 w-1/3'>

                                    <h1 className='text-white font-abc text-lg'>or Pay with</h1>

                                </div>
                                <div className='flex justify-center w-1/3 '>
                                    <div className='border-4 border-gray-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                        <img src='/usdc.png' alt='' />
                                    </div>
                                </div>
                                <div className='flex justify-center w-1/3'>
                                    <div className='border-4 border-gray-400 flex justify-center items-center w-14 h-10 mt-2 rounded-lg bg-gray-900'>
                                        <img className='h-7 w-7 rounded-xl' src='/bonk.jpg' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-t-xl absolute bottom-0 w-72 h-3 bg-gray-900 border-2 border-gray-400 overflow-y-hidden'></div>
                </div>

                <div className='flex justify-center order-2' style={{ marginTop: `${margin}` }}>
                    <div id='second' className='relative overflow-y-hidden bg-center bg-[url("/ig.png")] object-center bg-no-repeat border-2 border-gray-600 flex flex-col justify-center items-center bg-slate-800 w-72 h-96 rounded-xl'>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CadeCardMachine