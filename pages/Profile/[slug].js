import React from 'react'
import { GiTwoCoins } from 'react-icons/gi'
const Profile = () => {
    return (
        <>
            <div className='flex flex-row'>

                {/* <div className='flex flex-col mt-10 ml-3 rounded-xl'>
                    <div className='flex flex-row'>
                        <img className="w-16 h-16 ml-16 mt-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://picsum.photos/200" alt="Bordered avatar" />

                        <div className='flex flex-col'>
                            <h1 className='ml-5 mt-16 text-xl'>User Name</h1>
                            <div className='flex flex-row'>
                                <GiTwoCoins className='ml-5 mt-3 text-3xl text-yellow-400' />
                                <h1 className='ml-3 mt-3 text-xl'>$100 CADE</h1>
                            </div>
                        </div>


                    </div>
                    <button type="button" className="focus:outline-none ml-16 mt-5 text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2">Buy More CADE</button>
                </div> */}
                {/* <div  className='flex flex-row'>
                <div className='mt-28 ml-16 w-96'>
                        <input type="search" id="default-search" value={"https://cade.com/Profile/newuser"} class="text-lg block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                    <div>
                    <button type="button" className="focus:outline-none ml-5 mt-28 text-black bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2">Share Profile</button>
                    </div>
                </div> */}

                <section class="text-gray-600 body-font lg:px-36">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap -m-4">
                        <div className='flex flex-row'>
                            <div class="p-4 lg:w-1/2 md:w-full">
                                <div class="flex border-2 border-gray-200  rounded-lg  border-opacity-50 p-8 sm:flex-row flex-col">
                                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-inherit text-indigo-500 flex-shrink-0">
                                        <img className="w-16 h-16  rounded-full ring-2 ring-yellow-400" src="https://picsum.photos/200" alt="Bordered avatar" />
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-white text-xl title-font font-medium mb-3">UserName</h2>
                                        {/* <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p> */}
                                        <div className='flex flex-row'>
                                            <GiTwoCoins className='text-3xl text-yellow-400' />
                                            <h1 className='ml-3 text-xl text-white'>100 000 CADE</h1>
                                        </div>
                                        <button type="button" className="focus:outline-none mt-5 text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2">Buy More CADE</button>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-32 mt-16'>
                            <input type="search" id="default-search" value={"https://cade.com/Profile/newuser"} class="text-lg block w-96 p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                        <button type="button" className="focus:outline-none mt-5 text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2">Share Profile</button>
                            </div>
                            </div>

                            <div class="p-4 lg:w-1/3 md:w-full">
                                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                                        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-12">
                        <div class="p-12 md:w-1/2 flex flex-col items-start">
                            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                            <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                            <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
                            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                            <a class="inline-flex items-center">
                                <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span class="flex-grow flex flex-col pl-4">
                                    <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                                    <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                </span>
                            </a>
                        </div>
                        <div class="p-12 md:w-1/2 flex flex-col items-start">
                            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                            <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
                            <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
                            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                            <a class="inline-flex items-center">
                                <img alt="blog" src="https://dummyimage.com/103x103" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span class="flex-grow flex flex-col pl-4">
                                    <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                                    <span class="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    console.log(`slug is my ${slug}`);
    return {
        props: { slug },
    };
}

export default Profile