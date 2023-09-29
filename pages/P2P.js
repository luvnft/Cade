import React, { useState } from 'react'

const P2P = () => {
    const [showSellNowList, setShowSellList] = useState(false)
    return (
        <>

            <section class="antialiased bg-black text-gray-600 h-screen px-4">
                <div class="flex flex-col py-12 h-full">

                    <div class="w-full mx-auto bg-black shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <div className='flex flex-row'>
                                {/* <h2 class="font-abc  text-4xl text-yellow-400 ml-10 bg-gray-900 p-2 rounded-2xl ">Sellers</h2> */}
                                <h2 onClick={() => setShowSellList(!showSellNowList)} class="font-abc  text-4xl text-yellow-400 ml-5 bg-gray-900 p-2 rounded-2xl ">Sell Now</h2>
                            </div>

                        </header>

                        {showSellNowList ? (
                            <>
                                <div className='flex-grow'>
                                    <div class="w-56 text-sm ml-5 mt-5 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <button aria-current="true" type="button" class="w-full px-4 py-2 font-abc text-left text-3xl text-white bg-blue-700 border-b border-gray-800 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                            Instant Profile Sell for 2 CADE
                                        </button>
                                        <button aria-current="true" type="button" class="w-full px-4 py-2 font-abc text-left text-3xl text-white bg-blue-700 border-b border-gray-800 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                            Sell InGame Collectible
                                        </button>
                                        <button aria-current="true" type="button" class="w-full px-4 py-2 font-abc text-left text-3xl text-white bg-blue-700 border-b border-gray-800 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                            Sell at Your Price
                                        </button>
                                        <input placeholder="Enter the Amount" className='p-2 mb-2 ml-2 mr-2 mt-2 bg-gray-900 rounded-lg'></input>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        <header class="px-5 py-4 border-b border-gray-100">
                            <div className='flex flex-row'>
                                {/* <h2 class="font-abc  text-4xl text-yellow-400 ml-10 bg-gray-900 p-2 rounded-2xl ">Sellers</h2> */}
                                <h2 onClick={() => setShowSellList(!showSellNowList)} class="font-abc  text-4xl text-yellow-400 ml-5 bg-gray-900 p-2 rounded-2xl ">Your Listing</h2>
                            </div>
                            <div class="p-3">
                                {/* <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-black">
                                            <tr>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-abc text-2xl text-white text-left">Name</div>
                                                </th>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-abc text-2xl text-white text-left">XP</div>
                                                </th>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-abc text-2xl text-white text-left">Game Life</div>
                                                </th>
                                                <th class="p-2 ml-10 whitespace-nowrap">
                                                    <div class="font-abc text-2xl text-white text-left">Game Pass</div>
                                                </th>
                                                <th class="p-2 ml-10 whitespace-nowrap">
                                                    <div class="font-abc text-2xl text-white text-left">Trophies Count</div>
                                                </th>
                                                <th class="p-2 ml-10 whitespace-nowrap">
                                                    <div class="font-abc text-2xl text-white text-left">Price</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                        <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-abc text-3xl text-white">1200</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-abc text-3xl text-white">66</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-abc text-3xl text-white">66</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-abc text-3xl text-white">66</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                                </td>
                                            </tr>



                                        </tbody>
                                    </table>
                                </div> */}
                                <div className='flex justify-center'>
                                <h1 className='text-white font-abc text-3xl'>You have No Listed Item To Sell</h1>
                                </div>
                            </div>
                        </header>
                        <header class="px-5 py-4 border-b border-gray-100">
                            <div className='flex flex-row'>
                                {/* <h2 class="font-abc  text-4xl text-yellow-400 ml-10 bg-gray-900 p-2 rounded-2xl ">Sellers</h2> */}
                                <h2 onClick={() => setShowSellList(!showSellNowList)} class="font-abc  text-4xl text-yellow-400 ml-5 bg-gray-900 p-2 rounded-2xl ">Sellers</h2>
                            </div>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-black">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-abc text-2xl text-white text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-abc text-2xl text-white text-left">XP</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-abc text-2xl text-white text-left">Game Life</div>
                                            </th>
                                            <th class="p-2 ml-10 whitespace-nowrap">
                                                <div class="font-abc text-2xl text-white text-left">Game Pass</div>
                                            </th>
                                            <th class="p-2 ml-10 whitespace-nowrap">
                                                <div class="font-abc text-2xl text-white text-left">Trophies Count</div>
                                            </th>
                                            <th class="p-2 ml-10 whitespace-nowrap">
                                                <div class="font-abc text-2xl text-white text-left">Price</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">1200</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">1200</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">1200</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">1200</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">1200</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">1200</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div class="font-abc text-3xl text-white">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">1200</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-abc text-3xl text-white">2 Cade</div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </header>
                    </div>
                </div>
            </section>
        </>
    )
}

export default P2P