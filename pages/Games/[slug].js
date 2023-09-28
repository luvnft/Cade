import React, { useState } from 'react'
import Coinflip from '../../components/games/Coinflip';
import { BiSolidUpArrow } from "react-icons/bi"
import { useTicket } from '../../connector/ticket';
import UpwardBar from '../../components/GameBar/UpwardBar';
import { DownwardBar } from '../../components/GameBar/DownwardBar';
const Games = ({ slug, description, img, isGameExist }) => {
    const { mintCade } = useTicket()
    const [show, setshow] = useState(true)

    const Data = [
        {
            name: "Space Invaders",
            img: "/spacenew.webp"
        },
        {
            name: "Coin Flip",
            img: "/coinflip.jpg"
        },
        {
            name: "Dice Game",
            img: "/dice.jpg"
        },
        {
            name: "Car Race",
            img: "/car.jpg"
        }
    ]

    const renderGame = () => {
        if (slug == "CoinFlip") {
            return <Coinflip />
        }
    }

    return (
        <>

            <section class="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
                <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
                        <div className='flex justify-center'>

                        </div>
                        {isGameExist ? (
                            <>
                               <UpwardBar slug = {slug}/>
                            </>
                        ) : (
                            <div className='flex justify-center mt-16'>
                                <h1 className='font-abc text-5xl text-white'>No such Game Exist</h1>
                            </div>
                        )}

                        {isGameExist ? (
                            <>
                                <div className=''>
                                    {show ? (
                                        <div className='p-10'>
                                            <img width={800} src={img} alt='gggg' />
                                        </div>

                                    ) : (
                                        renderGame()
                                    )}
                                   <DownwardBar slug={slug}/>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                    </div>


                    <div class="p-5 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h1 className='text-white font-abc text-5xl mt-5 ml-5'>Play More</h1>
                        <div class="container px-5 py-5 mx-auto">
                            <div class="flex flex-col">
                                <div class="p-2">
                                    <div className='flex flex-col'>
                                        {Data.map((item) => {
                                            return (
                                                <>
                                                    <div className='mt-10'>
                                                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                            <img class="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.img} alt="d" />
                                                            <div class="flex flex-col justify-between p-4 leading-normal">
                                                                <h5 class="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>

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
                    </div>
                </div>
            </section>
        </>
    )
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    let description = "";
    let img = ""
    let isGameExist = false
    console.log(`slug is my ${slug}`);
    if (slug == 'CoinFlip') {
        description = "A coinflipgame",
            img = "/gamethu1.jpg"
        isGameExist = true
    }
    else {
        description = "No Such Game Found"
    }
    return {
        props: { slug, description, img, isGameExist },

    };
}

export default Games