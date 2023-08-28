import React, { useState } from 'react'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
const Profile = () => {
    const [loadingUpload, setLoadingUpload] = useState(false)
    return (
        <>

            <div className='flex justify-center bg-black py-10'>
                <h1 className='text-4xl text-white'>
                    Setup Your
                </h1>
                <h1 className='text-4xl text-white'>
                    Profile
                </h1>
            </div>
            <div className="flex justify-center py-30 bg-black">
                <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div>
                            <div class="flex items-center justify-center">

                                <label class="text-blue border-white hover:bg-blue flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border-2 bg-black uppercase tracking-wide shadow-lg mt-5">

                                    <>
                                        <div className="shadow-lg rounded-full  align-middle border-none">
                                            <MdOutlineAddPhotoAlternate className="text-white text-3xl" />

                                            <input type="file" class="hidden" />
                                        </div>
                                    </>

                                </label>



                            </div>
                            <div class="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-5">
                                {loadingUpload ? (
                                    <>
                                        <div role="status" className="flex justify-center mt-6">
                                            <svg
                                                aria-hidden="true"
                                                class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <button

                                            href="#"
                                            class="inline-flex justify-center items-center py-3  px-5 font-semibold text-center text-black rounded-full bg-white  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        >
                                            upload

                                        </button>
                                    </>
                                )}


                            </div>
                        </div>
                        <div class="mb-1">
                            <label
                                for="default-input"
                                class="block text-xl font-semibold mb-2 text-white dark:text-white"
                            >
                                what should be your page name
                            </label>
                            <input
                                type="text"
                                id="small-input"

                                class="block w-full p-2 text-white border border-gray-300 rounded-lg bg-black focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <div class="mb-1">
                            <label
                                for="default-input"
                                class="block text-xl font-semibold mb-2 text-white dark:text-white"
                            >
                                wallet address
                            </label>
                            <input
                                type="text"
                                id="default-input"
                                value="R#@!tt"

                                class="block w-full p-2 text-white border border-gray-300 rounded-lg bg-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        class="w-full border border-white text-black bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full  py-3 focus:outline-none"
                    >
                        Setup
                    </button>
                    {/* {walletConnected ? (
                    <>
                        {isExist ? (
                            <>
                                <button
                                    disabled={true}
                                    type="button"
                                    class="w-full border border-white text-white bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full  py-3 focus:outline-none"
                                >
                                    page already exists , try with another wallet
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => activate_donation_page()}
                                    type="button"
                                    class="w-full border border-white text-white bg-black font-medium rounded-full py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    create your donation page
                                </button>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <WalletMultiButtonDynamic />
                    </>
                )} */}

                    <h2
                        color="white"
                        className="mt-4 text-lg text-center font-normal text-white"
                    >
                        do not want a your Profile?{" "}
                        <a
                            href="#"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            go back
                        </a>
                    </h2>
                </form>
            </div>
        </>
    )
}

export default Profile