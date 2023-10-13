import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";
import { useRouter } from "next/router";
import BoardTubnail from "../../components/TowerDefence/BoardTubnail";

import { createGame } from "../../connector/ddt-utils/callInstructions";
import { deployUnits } from "../../connector/ddt-utils/callInstructions";
import { PublicKey } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";

const ChooseUnits = (props) => {
  const Data = [
    {
      name: "Space Invaders",
      img: "/spacenew.webp",
      link: "/Games/SpaceInvaders",
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip",
    },
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence",
    },
    {
      name: "FourInLine Game",
      img: "/fourinline.png",
      link: "/Games/FourInLine",
    },
  ];

  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });
  const router = useRouter();
  const { slug } = router.query;
  const [gamePublicKey, setGamePublicKey] = useState();
  const [gameAccount, setGameAccount] = useState();

  useEffect(() => {
    if (program) {
      (async () => {
        const map = await program.account.map.all();
        // console.log(map)
        const mapPDA = map.filter((m) => m.account.name === slug)[0]?.publicKey;

        setGamePublicKey(mapPDA);
      })();
    }
  }, [wallet, program]);

  useEffect(() => {
    if (gamePublicKey) {
      (async () => {
        const gameAccount = await program.account.map.fetch(gamePublicKey);
        setGameAccount(gameAccount);
        console.log(gameAccount);
      })();
    }
  }, [gamePublicKey, program?.account?.map]);

  const [deploys_for_deployUnits, setdeploys_for_deployUnits] = useState([
    ["plane"],
    [],
    [],
    [],
    [],
    [],
  ]);

  //handler functions for inputs feilds
  const namehandler_for_createMap = (e) => {
    setname_for_createMap(e.target.value);
  };
  const boardhandler_for_createMap = (e) => {
    setboard_for_createMap(e.target.value);
  };
  const budgethandler_for_createMap = (e) => {
    setbudget_for_createMap(e.target.value);
  };
  const deployshandler_for_deployUnits = (e) => {
    setdeploys_for_deployUnits(e.target.value);
  };

  const map_name = "test";
  const map_for_deployUnits = "test";

  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
            <div className="flex justify-center"></div>

            <>
              <Head>
                <title>dtt</title>
                <meta name="description" content="dtt" />
              </Head>
              <div className="p-8 bg-gray-900 text-white">
                <div className="font-semibold text-xl text-center m-5">
                  <h2>Choose your units!</h2>
                </div>
                <div className="px-2 mt-2 text-gray-200 sm:text-lg sm:leading-2 flex flex-col items-center">
                  <div className="flex flex-row items-center">
                    <div className="w-60 flex flex-col items-center mr-4">
                      <div className="flex flex-col mt-4">
                        {gameAccount ? <BoardTubnail map={gameAccount} /> : ""}
                      </div>
                    </div>
                    <div className="items-center">
                      <p className="text-left m-2 text-xs text-blue-200">
                        Available Budget: 100
                      </p>
                      <div className="flex mx-5 items-center">
                        <div className="flex flex-row">
                          {/* <input
                type="text"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                placeholder={`Enter budget`}
                value={budget_for_createMap}
                onChange={budgethandler_for_createMap}
              /> */}
                          <div>
                            <button
                              className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                              // value={budget_for_createMap}
                              // onClick={budgethandler_for_createMap}
                            >
                              <div className="flex flex-col items-center">
                                <img
                                  src="/soldier.svg"
                                  alt="Soldier Icon"
                                  className="h-10 w-10"
                                />
                                <div>Health 100</div>
                                <div>DPS 10</div>
                                <div>Cost 10</div>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div>
                          <button
                            className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                            //   value={budget_for_createMap}
                            //   onClick={budgethandler_for_createMap}
                          >
                            <div className="flex flex-col items-center">
                              {/* Tank icon not working, can't find other military icons */}
                              <div className="flex-row flex">
                                <img
                                  src="/war-tank-svgrepo-com.svg"
                                  alt="Tank Icon"
                                  className="h-10 w-10"
                                />
                              </div>
                              <div>Health 200</div>
                              <div>DPS 25</div>
                              <div>Cost 25</div>
                            </div>
                          </button>
                        </div>
                        <div>
                          <button
                            className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                            //   value={budget_for_createMap}
                            //   onClick={budgethandler_for_createMap}
                            // just to have a way to get to the results page
                            onClick={() =>
                              router.push("/TowerDefence/BattleResults")
                            }
                          >
                            <div className="flex flex-col items-center">
                              <img
                                src="/plane.svg"
                                alt="Plane Icon"
                                className="h-10 w-10"
                              />
                              <div>Health 500</div>
                              <div>DPS 75</div>
                              <div>DPS 50</div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-center m-5">
                  <button
                    className="inline-flex py-2.5 px-5 mx-20 text-sm font-large text-white bg-lime-500 border-lime-500 outline outline-lime-500 border-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 dark:bg-lime-600 dark:hover-bg-lime-600 dark:focus-ring-lime-600 w-60 flex items-center justify-center"
                    onClick={() =>
                      deployUnits(
                        program,
                        deploys_for_deployUnits,
                        new PublicKey(
                          "BeTLVuVggw6J2E6192gRscNULXqoeiSr9nUvP9aXEa7a"
                        ),
                        wallet.publicKey,
                        map_for_deployUnits
                      )
                    }
                  >
                    DEPLOY UNITS!
                  </button>
                </div>
              </div>
            </>
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
                          <a
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
                            </div>
                          </a>
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

{
  /* 
      <div className="flex justify-center py-10">
        <h1 className="sm:text-3xl text-2xl font-extrabold mb-4 bg-white">
          Choose Your Units
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="sm:text-3xl text-2xl font-extrabold mb-4 text-white">
          Powered By SODA
        </h1>
      </div>

      <div className="text-white flex flex-col text-2xl m-5 p-2 ">
        <div className="min-h-screen bg-inherit py-1 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className=" mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-16 w-16 p-2 bg-black rounded-full flex flex-shrink-0 justify-center items-center text-3xl font-mono">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/shrine-76128.appspot.com/o/soda.png?alt=media&token=32de0266-c1ee-4a31-a2e1-2df6d35086f8"
                      alt="ff"
                    />
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed mt-8">
                      For createGame instructions
                    </h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed invisible">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"></div>
                  <div className="pt-4 flex items-center space-x-4">
                    {/* <button
                      className="bg-blue-500 flex justify-center items-center w-full text-white px-3 text-xl py-1 rounded-md focus:outline-none"
                      onClick={() =>
                        createGame(program, map_name, wallet.publicKey)
                      }
                    >
                      Call_createGame_instruction */
}
{
  /* </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col text-2xl m-5 p-2 ">
        <div className="min-h-screen bg-inherit py-1 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className=" mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-16 w-16 p-2 bg-black rounded-full flex flex-shrink-0 justify-center items-center text-3xl font-mono">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/shrine-76128.appspot.com/o/soda.png?alt=media&token=32de0266-c1ee-4a31-a2e1-2df6d35086f8"
                      alt="ff"
                    />
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed mt-8">
                      For deployUnits instructions
                    </h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed invisible">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <p className="">deploys</p>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder={`Enter deploys`}
                        value={deploys_for_deployUnits}
                        onChange={deployshandler_for_deployUnits}
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button
                      className="bg-blue-500 flex justify-center items-center w-full text-white px-3 text-xl py-1 rounded-md focus:outline-none"
                      onClick={() =>
                        deployUnits(
                          program,
                          deploys_for_deployUnits,
                          new PublicKey(
                            "BeTLVuVggw6J2E6192gRscNULXqoeiSr9nUvP9aXEa7a"
                          ),
                          wallet.publicKey,
                          map_for_deployUnits
                        )
                      }
                    >
                      Call_deployUnits_instruction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
                    ); */
}

export default ChooseUnits;
