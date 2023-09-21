import React from 'react'
import FriendsList from '../../components/micro/FriendsList';
import Coinflip from '../../components/games/Coinflip';
const Games = () => {

    const Data = [
        {
            name: "Space Game",
            img: "/spacenew.webp"
        },
        {
            name: "Car Race",
            img: "/car.jpg"
        }
    ]
    return (
        <>

            <div class="bg-[url('/kn.jpg')] flex">
                <div class="flex w-16 p-4 text-white bg-gray-800 mb-40 mt-20 ml-2 rounded-2xl">
                    <FriendsList />
                </div>
                <div class="w-4/5 min-h-screen min-w-1/2">
                    <section class="text-gray-600 body-font mt-20">

                        <div className='flex justify-center'>

                            <Coinflip />
                        </div>

                    </section>
                </div>
                <div class="w-1/5 min-h-screen min-w-1/2 bg-gray-900">
                    <section class="text-gray-600 body-fon">
                        <h1 className='text-white text-2xl flex justify-center mt-10 font-bold'>Recommended Games</h1>
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-col">
                                <div class="p-2">
                                    <div className='flex flex-col'>
                                        {Data.map((item) => {
                                            return (
                                                <>
                                                    <div className='mt-10'>
                                                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.img} alt="d" />
                                                            <div class="flex flex-col justify-between p-4 leading-normal">
                                                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>

                                                            </div>
                                                        </a>
                                                    </div>
                                                </>
                                            )

                                        })}


                                    </div>



                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
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

export default Games