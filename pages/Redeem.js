import React from 'react'

const Redeem = () => {
    const Data = [
        {
            name: "Game Pass x2",
            img: "/freeticket.webp"
        },
        {
            name: "Game Pass x6",
            img: "/freeticket.webp"
        },
        {
            name: "Game Pass x12",
            img: "/freeticket.webp"
        },
        {
            name: "Lottery Ticket x2",
            img: "/lottery1.png"
        },
        {
            name: "Lottery Ticket x6",
            img: "/lottery1.png"
        },
        {
            name: "Lottery Ticket x12",
            img: "/lottery1.png"
        }
    ]
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="font-abc text-7xl font-medium title-font mb-2 text-white ml-10">Redeem Cade</h1>
                           
                        </div>
                        <p class="lg:w-1/2 w-full font-abc leading-relaxed text-white text-2xl">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                    </div>
                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                        {Data.map((item) => {
                            return (
                                <>
                                    <div class="bg-black p-6 rounded-lg">
                                        <img class="h-60 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">CADE STORE</h3>
                                        <h2 class="text-white text-3xl font-abc title-font mb-4">{item.name}</h2>
                                        <p class="text-white font-abc text-2xl">Fingerstache flexitarian street art 8-bit waistcoat.</p>
                                        <button class="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Purchase</button>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Redeem