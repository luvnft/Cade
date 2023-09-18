import React from 'react'
import FriendsList from '../../components/micro/FriendsList';
import Coinflip from '../../components/games/Coinflip';
const Games = () => {
    return (
        <>
            <div class="flex flex-col h-screen bg-black">
                <div class="flex flex-1 overflow-hidden">
                    <div class="flex w-16 p-4 text-white bg-gray-800 mb-40 mt-20 ml-2 rounded-2xl">
                        <FriendsList />
                    </div>
                    <div class="flex flex-1 flex-col">

                        <div class="flex flex-1 overflow-y-auto paragraph px-4">
                            <div id="top">
                                <div
                                    style={{
                                        zIndex: -1,
                                        position: "fixed",
                                        width: "100vw",
                                        height: "100vh",
                                    }}
                                >
                                    <img
                                        src="sun-tornadod.png"
                                        className=""
                                        alt="Mountains with snow"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <Coinflip/>
                            </div>
                        </div>
                    </div>
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