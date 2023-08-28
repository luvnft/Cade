import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from 'next/image'
const Navbar = () => {
  const router = useRouter();
  console.log(router.asPath);
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );

  return (
    <>
      <div className="bg-black">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

              <h1 class="ml-3 text-4xl text-white">Cade</h1>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 text-white text-xl">LeaderBoard</a>

            </nav>
            <WalletMultiButtonDynamic
              style={{
                marginRight: "10px",
                borderRadius: "50vw",
              }}
            />
            <button class="bg-white text-black py-2 px-4 rounded-full inline-flex items-center cursor-pointer">
              <span>
                <BsFillPersonFill className="text-xl"/>
              </span>

            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
