import React from 'react'
import CadeCardMachine from './CadeCardMachine'
const CadeMachineAndTicketClaim = () => {
    return (
        <div style={{ height: "700px" }} className="block lg:hidden bg-transparent  flex flex-col rounded-xl mt-5 h-max border border-gray-700 overflow-y-hidden">

            {/* <div className="flex flex-row">
                <div className="flex justify-center w-2/4">
                    <h1 className="text-3xl font-abc text-white">Ticket Collection</h1>
                </div>
                <div className="flex justify-center w-2/4">
                    <h1 className="text-3xl font-abc text-white ml-2">Insert Cade To Play</h1>
                </div>
            </div> */}

            <div className="rounded-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 bg-transparent">

                <div className='mt-5 hidden lg:block'>
                    <div className='flex justify-center '>
                        <h1 className="text-3xl font-abc text-white">Collect Your Winning Ticket</h1>
                    </div>
                    <div className="flex flex-row overflow-x-auto overflow-y-hiddens">
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/200" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/201" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/202" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/203" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/208" alt="" />
                    </div>
                </div>

                <div className="mt-5 flex justify-center items-center overflow-x-auto">
                    <div>
                        <div className='flex justify-center '>
                            <h1 className="text-3xl font-abc text-white">Insert Your Card to Play</h1>
                        </div>
                        <div className='mt-5'>
                            <CadeCardMachine />
                        </div>
                    </div>
                </div>

                

            </div>

            <div className="flex flex-row">
                <div className="flex justify-center items-center w-2/4 overflow-x-auto overflow-y-hidden">
                    <div className="flex flex-row">
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/200" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/201" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/202" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/203" alt="" />
                        <img className="w-32 h-16 m-4 border-4 border-gray-200" src="https://picsum.photos/208" alt="" />
                    </div>
                </div>
                <div className="mt-5 flex justify-center items-center w-2/4 overflow-x-auto overflow-y-hidden">
                    <CadeCardMachine/>
                </div>
            </div>
        </div>
    )
}

export default CadeMachineAndTicketClaim