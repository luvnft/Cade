import React, { useState, useEffect } from "react";
import Coinflip from "../../components/games/Coinflip";
import { BiSolidUpArrow } from "react-icons/bi";
import { useTicket } from "../../connector/ticket";
import { DownwardBar } from "../../components/GamePageComponents/DownwardBar";
import { useUSDCPay } from "../../hooks/transfer";
import { useRouter } from "next/router";
import TowerDefence from "../../components/games/TowerDefence";
import FourInLine from "../../components/games/FourInLine";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Link from "next/link";
import TopPlayers from "../../components/GamePageComponents/GameDetails";
import GameDetails from "../../components/GamePageComponents/GameDetails";
import PlayMore from "../../components/GamePageComponents/PlayMore";
import MiniLeaderBoard from "../../components/Herop/MiniLeaderBoard";
import CadeSocial from "../../components/Herop/CadeSocial";
import GameLeaderBoard from "../../components/GamePageComponents/GameLeaderBoard";
import GameForum from "../../components/GamePageComponents/GameForum";
import UpcomingGames from "../../components/Herop/UpcomingGames";
import MoleSmash from "../../components/games/MoleSmash";
import TileSurive from "../../components/games/TileSurive";
import SkylineSkaddle from "../../components/games/SkylineSkaddle";
import GamesAdditionalDetails from "../../components/GamePageComponents/GamesAdditionalDetails";
import CadeCardMachine from "../../components/GamePageComponents/CadeCardMachine";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa"
const Games = ({
  slug,
  description,
  img,
  isGameExist,
  playerOne,
  secondPlayer,
  thirdPlayer,
  timePlayed,
  maker,
  isUnity,
  arcadeMachineImage,
  color
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const { createTransaction } = useUSDCPay();
  const { publicKey } = useWallet();
  const { mintCade } = useTicket();
  const [show, setshow] = useState(true);

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
    if (slug == "MoleSmash") {
      return (
        <div className="mt-10">
          <MoleSmash />
        </div>
      );
    }
    if (slug == "TileSurvive") {
      return (
        <div className="mt-10">
          <TileSurive />
        </div>
      );
    }
    if (slug == "SkylineSkaddle") {
      return (
        <div className="mt-10">
          <SkylineSkaddle />
        </div>
      );
    }

  };

  const handleFullScreenClick = () => {
    const iframe = document.getElementById('myIframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 835) {
      setIsMobile(true)
      console.log("Mobile")
      console.log(window.innerWidth)
    } else {
      setIsMobile(false)
      console.log("Not Mobile")
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const playGameForMobile = () => {
    setshow(!show)
    setTimeout(() => {
      handleFullScreenClick()
    }, 100)
  }

  const playGameForLargeScreen = () => {
    setshow(!show)
  }

  // const initgame = () => {
  //   // createTransaction(
  //   //   publicKey,
  //   //   new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
  //   //   5
  //   // );
  //   setTimeout(() => {
  //     if (isMobile == false) {
  //       setshow(!show);
  //     } if (isMobile == true) {
  //       setshow(!show);
  //       setTimeout(() => {
  //         handleFullScreenClick()
  //       }, 200)
  //     }
  //   });
  // };

  return (
    <>
      <section className="text-gray-600 body-font  lg:px-32 px-5 py-10 bg-gray-900">

        {isGameExist ? (
          <>
          <div style={{ height: "1400px" }} className="block lg:hidden border rounded-xl bg-gray-950 border-gray-700 overflow-y-hidden">
              <GameDetails maker={maker} timePlayed={timePlayed} />
              {show ? (
                <>
                  <div className="rounded-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 bg-transparent">


                    <div className="flex flex-col items-center justify-center bg-transparent  rounded-b-xl h-max mt-20">

                      <img className="w-96 h-96" src={arcadeMachineImage} alt="" />

                      <div className="flex justify-center mt-5 block lg:hidden xl:hidden">
                        <button
                          className="mt-5 py-4 text-black flex justify-center font-abc bg-white border-0 px-6 focus:outline-none rounded text-2xl"
                          onClick={() => playGameForMobile()}
                        >
                          Insert Your Card To Play
                          <span className="flex justify-center ml-2 mt-1"><FaArrowDown /></span>
                        </button>
                      </div>

                    </div>

                    <div className="mt-5 flex justify-center items-center overflow-x-auto">
                      <div>
                        {/* <div className='flex justify-center '>
                          <h1 className="text-3xl font-abc text-white">Insert Your Card to Play</h1>
                        </div> */}
                        <div className='mt-5 flex justify-center'>
                          <CadeCardMachine color={color} />
                        </div>
                      </div>
                    </div>



                  </div>



                </>
              ) : (
                <>
                  {renderGame()}
                  {/* <button
                        className="block lg:hidden xl:hidden py-2 text-black font-abc bg-white border-0  px-6 focus:outline-none rounded text-4xl"
                        onClick={handleFullScreenClick}
                      >
                        Full Screen
                      </button> */}
                </>
              )}

            </div>
            <div style={{ height: "800px" }} className="hidden lg:block border rounded-xl bg-gray-950  border-gray-700 overflow-y-hidden">
              <GameDetails maker={maker} timePlayed={timePlayed} />
              {show ? (
                <>
                  <div className="rounded-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 bg-transparent">


                    <div className="flex flex-col items-center justify-center bg-transparent p-6 rounded-b-xl h-max mt-20">

                      <img className="w-96 h-96" src={arcadeMachineImage} alt="" />

                      <div className="flex justify-center mt-5 hidden lg:block xl:block">
                        <button
                          className="py-2 text-black font-abc bg-white border-0 px-8 focus:outline-none rounded text-3xl"
                          onClick={() => playGameForLargeScreen()}
                        >
                         Insert Your Card To Play
                         <span className="flex justify-center mt-2 "><FaArrowRight /></span>
                        </button>
                      </div>

                    </div>

                    <div className="mt-5 flex justify-center items-center overflow-x-auto">
                      <div>
                        <div className='flex justify-center '>
                          <h1 className="text-3xl font-abc text-white">Insert Your Card to Play</h1>
                        </div>
                        <div className='mt-5 flex justify-center'>
                          <CadeCardMachine color={color} />
                        </div>
                      </div>
                    </div>



                  </div>



                </>
              ) : (
                <>
                  {renderGame()}
                  {/* <button
                        className="block lg:hidden xl:hidden py-2 text-black font-abc bg-white border-0  px-6 focus:outline-none rounded text-4xl"
                        onClick={handleFullScreenClick}
                      >
                        Full Screen
                      </button> */}
                </>
              )}

            </div>
           
            <GamesAdditionalDetails />
            <section className="text-gray-600 body-font relative ">
              <div className="gap-x-5 container px-2 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="mt-2">
                  <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div>
                      <GameLeaderBoard />
                    </div>
                    <div className="">
                      <GameForum />
                    </div>
                    <div className="md:mt-5 flex justify-center">
                      <PlayMore />
                    </div>
                  </div>
                </div>
              </div>
            </section>



            {/* <DownwardBar
                      slug={slug}
                      show={show}
                      playerOne={playerOne}
                      secondPlayer={secondPlayer}
                      thirdPlayer={thirdPlayer}
                    /> */}

          </>
          //
        ) : (
          <>
            <div className="flex justify-center">
              <h1 className="text-5xl font-abc text-white">Comming Soon</h1>
            </div>
          </>
        )}


      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let description = "";
  let img = "";
  let isGameExist = false;
  let isUnity = false;
  let playerOne = "";
  let secondPlayer = "";
  let thirdPlayer = "";
  let timePlayed = "";
  let maker = ""
  let arcadeMachineImage = ""
  let color = ""
  console.log(`slug is my ${maker}`);
 
  if (slug == "CoinFlip") {
    (description = "A coinflipgame"), (img = "/gamethu1.jpg");
    (isGameExist = true),
      (playerOne = "John"),
      (secondPlayer = "Ben"),
      (thirdPlayer = "Josh");
    timePlayed = "20+";
    maker = "@marchedev"
    isUnity = false
    arcadeMachineImage = "/ca44.png"
    color = "orange-400"
  }
  if (slug == "TowerDefence") {
    (description = "A TowerDefence Game"),
      (img = "/tower.jpg"),
      (isGameExist = true),
      (playerOne = "TolyMan"),
      (secondPlayer = "OnlySolana"),
      (thirdPlayer = "Elliot");
    timePlayed = "10+";
    maker = "@marchedev"
    isUnity = false
    arcadeMachineImage = "/ca11.png"
    color = "red-500"
  }
  if (slug == "FourInLine") {
    description = "A Four In Line Game";
    img = "/sf.png";
    isGameExist = true;
    playerOne = "Niunjap#22";
    secondPlayer = "Bhindi";
    thirdPlayer = "Akkobaiii";
    timePlayed = "5+";
    maker = "@marchedev"
    isUnity = false
    arcadeMachineImage = "/ca66.png"
    color = "blue-500"

  } if (slug == "MoleSmash") {
    description = "A MoleSmash Game";
    img = "/molegame.jpeg";
    isGameExist = true;
    playerOne = "Niunjap#22";
    secondPlayer = "Bhindi";
    thirdPlayer = "Akkobaiii";
    timePlayed = "6+";
    maker = "@benzonak"
    isUnity = true
    arcadeMachineImage = "/ca22.png"
    color = "yellow-400"
  }
  if (slug == "SkylineSkaddle") {
    description = "A SkylineSkaddle Game";
    img = "/skygame.jpg";
    isGameExist = true;
    playerOne = "Niunjap#22";
    secondPlayer = "Bhindi";
    thirdPlayer = "Akkobaiii";
    timePlayed = "15+";
    maker = "@benzonak"
    isUnity = true
    arcadeMachineImage = "/ca33.png"
    color = "green-400"
  }
  if (slug == "TileSurvive") {
    description = "A TileSurvive Game";
    img = "/tile.jpg";
    isGameExist = true;
    playerOne = "Niunjap#22";
    secondPlayer = "Bhindi";
    thirdPlayer = "Akkobaiii";
    timePlayed = "6+";
    maker = "@benzonak"
    isUnity = true
    arcadeMachineImage = "/ca55.png"
    color = "green-400"
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
      timePlayed,
      maker,
      isUnity,
      arcadeMachineImage,
      color, 
    },
  };
}

export default Games;
