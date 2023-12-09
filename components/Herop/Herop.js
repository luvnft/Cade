import React, { useState } from "react";
import Coinflip from "../games/Coinflip";
import { BiSolidUpArrow } from "react-icons/bi";
import { useTicket } from "../../connector/ticket";
import { DownwardBar } from "../GameBar/DownwardBar";
import { useUSDCPay } from "../../hooks/transfer";
import { useRouter } from "next/router";
import TowerDefence from "../games/TowerDefence";
import FourInLine from "../games/FourInLine";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import Link from "next/link";
import GameSlider from "./GameSlider";
import { data } from "browserslist";
import CadeSocial from "./CadeSocial";
const Herop = ({
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
  const { publicKey } = useWallet()
  const { mintCade } = useTicket();
  const [show, setshow] = useState(true);
  const router = useRouter()

  let images = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  const Data = [
    {
      name: "Space Invaders",
      img: "fourinline.png",
      link: "/Games/SpaceInvaders",
      desc: "Ready to race against the best in this high-speed car game!"
    },
    {
      name: "Chess",
      img: "/chess.avif",
      link: "/Games/Chess",
      desc: "Ready to race against the best in this high-speed car game! "
    },
    {
      name: "FourInLine Game",
      img: "/fourinline.png",
      link: "/Games/FourInLine",
      desc: "Ready to race against the best in this high-speed car game!"
    },
    {
      name: "Car Race",
      img: "/carnew.jpg",
      link: "/Games/Carrace",
      desc: "Ready to race against the best in this high-speed car game!"
    },
    {
      name: "Tower Defence",
      img: "/tower.jpg",
      link: "/Games/TowerDefence",
      desc: "Ready to race against the best in this high-speed car game!"
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
      link: "/Games/CoinFlip",
      desc: "Ready to race against the best in this high-speed car game!"
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
    createTransaction(
      publicKey,
      new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
      5
    )
    setTimeout(() => {
      setshow(!show);
    }, 7000);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <GameSlider images={Data} />
          <div className="p-1 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full">
            <CadeSocial />
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

export default Herop;
