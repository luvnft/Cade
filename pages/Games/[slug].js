import React, { useState } from "react";
import Coinflip from "../../components/games/Coinflip";
import { BiSolidUpArrow } from "react-icons/bi";
import { useTicket } from "../../connector/ticket";
import { DownwardBar } from "../../components/GameBar/DownwardBar";
import { useUSDCPay } from "../../hooks/transfer";
import { useRouter } from "next/router";
import TowerDefence from "../../components/games/TowerDefence";
import FourInLine from "../../components/games/FourInLine";
import Link from "next/link";
const Games = ({
  slug,
  description,
  img,
  isGameExist,
  playerOne,
  secondPlayer,
  thirdPlayer,
  timePlayed
}) => {
  const { createTransaction } = useUSDCPay();
  const { mintCade } = useTicket();
  const [show, setshow] = useState(true);
  const router = useRouter()

  const Data = [
    {
      name: "Space Invaders",
      img: "/spacenew.webp",
      link: "/Games/SpaceInvaders"
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip"
    },
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence"
    },
    {
      name: "FourInLine Game",
      img: "/fourinline.png",
      link: "/Games/FourInLine"
    },
  ];

  const renderGame = () => {
    if (slug == "CoinFlip") {
      return (
        <div className="mt-10">
          <Coinflip />
        </div>
      );
    }
    if (slug == "TowerDefence") {
      return (
        <div className="mt-10">
          <TowerDefence />
        </div>
      );
    }

    if (slug == "FourInLine") {
      return (
        <div className="mt-10">
          <FourInLine />
        </div>
      );
    }
  };

  const initgame = () => {
    // createTransaction(
    //     new PublicKey("44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su"),
    //     new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
    //     9
    // )
    setTimeout(() => {
      setshow(!show);
    }, 0);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
            <div className="flex justify-center"></div>
            {isGameExist ? (
              <>
                <section className="text-gray-400 bg-gray-900 body-font rounded-xl">
                  <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                      <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="font-abc title-font font-medium sm:text-4xl text-3xl text-white">
                          {slug}
                        </h2>
                        <p className="text-white font-abc text-3xl">Game</p>
                      </div>
                      <div className="p-4 sm:w-1/4 w-1/2">
                        <div className="flex">
                          <a className="inline-flex items-center">
                            <BiSolidUpArrow className="text-green-500 text-3xl" />
                            <span className="flex-grow flex flex-col pl-3">
                              <span className="text-4xl font-abc text-white">
                                +10 XP
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="p-4 sm:w-1/4 w-1/2">
                        <div className="flex">
                          <a className="inline-flex items-center">
                            <img
                              src="/cade.png"
                              height={50}
                              width={50}
                              alt="cade"
                            />
                            <span className="flex-grow flex flex-col pl-3">
                              <span className="text-4xl font-abc text-white">
                                Cade +0.1
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="font-abc sm:text-4xl text-3xl text-white">
                          {timePlayed}
                        </h2>
                        <p className="text-white font-abc text-3xl">
                          Times Played
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex justify-center flex-row mt-5">
                  <div className=" ">
                    <button
                      className="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl"
                      onClick={() => initgame()}
                    >
                      Play Now
                    </button>
                  </div>
                  <div className=" ">
                    <button
                      className="py-3 text-black font-abc bg-white border-0  px-6 m-2 focus:outline-none rounded text-2xl"
                      onClick={() => mintCade()}
                    >
                      Claim XP and Cade
                    </button>
                  </div>

                </div>
              </>
            ) : (
              <div className="flex justify-center mt-16">
                <h1 className="font-abc text-5xl text-white">
                  {slug} Game Comming Soon
                </h1>
              </div>
            )}

            {isGameExist ? (
              <>
                <div className="">
                  {show ? (
                    <div className="flex justify-center p-10 rounded-xl mt-10 bg-gray-950">
                      <img width={800} className="rounded-xl" src={img} alt="gggg" />
                    </div>
                  ) : (
                    renderGame()
                  )}
                  <DownwardBar
                    slug={slug}
                    show={show}
                    playerOne={playerOne}
                    secondPlayer={secondPlayer}
                    thirdPlayer={thirdPlayer}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="p-5 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-white font-abc text-5xl mt-5 ml-5">
              Play More
            </h1>
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-col">
                <div className="p-2">
                  <div className="flex flex-col">
                    {Data.map((item) => {
                      return (
                        <div className="mt-10" key={item.name}>
                          <div
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <img
                              className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                              src={item.img}
                              alt="d"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <h5 className="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}

                              </h5>
                              <button className="mt-5 px-3 text-4xl font-abc bg-transparent  hover:bg-blue-500 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
                                <a href={`${item.link}`}>Play Now</a>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let description = "";
  let img = "";
  let isGameExist = false;
  let playerOne = "";
  let secondPlayer = "";
  let thirdPlayer = "";
  let timePlayed = ""
  console.log(`slug is my ${slug}`);
  if (slug == "CoinFlip") {
    (description = "A coinflipgame"), (img = "/gamethu1.jpg");
    (isGameExist = true),
      (playerOne = "John"),
      (secondPlayer = "Ben"),
      (thirdPlayer = "Josh");
    timePlayed = "200+"
  }
  if (slug == "TowerDefence") {
    (description = "A TowerDefence Game"),
      (img = "/tower.jpg"),
      (isGameExist = true),
      (playerOne = "TolyMan"),
      (secondPlayer = "OnlySolana"),
      (thirdPlayer = "Elliot");
    timePlayed = "100+"
  }
  if (slug == "FourInLine") {
    description = "A Four In Line Game";
    img = "/fourinline.png";
    isGameExist = true;
    playerOne = "Niunjap#22";
    secondPlayer = "Bhindi";
    thirdPlayer = "Akkobaiii";
    timePlayed = "500+"
  } else {
    description = "No Such Game Found";
  }
  return {
    props: {
      slug,
      description,
      img,
      isGameExist,
      playerOne,
      secondPlayer,
      thirdPlayer,
      timePlayed
    },
  };
}

export default Games;
