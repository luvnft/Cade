import React from "react";
import dynamic from "next/dynamic";
import Rank from "./Rank";
import Quest from "./Quest";
import { useRouter } from "next/router";
const Season = () => {
  const router = useRouter()
  const WalletMultiButton = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );
  return (
    <>
    <div className="flex justify-center">
      <div className="xl:hidden flex flex-grow flex-col">
        <WalletMultiButton
          style={{
            background: "black",
            borderStyle: "solid",
            borderBlockColor: "white",
            marginTop: 12
            ,
          }} />
          <div className="flex flex-row mt-2 rounded-2xl">
            <img onClick={()=> router.push("/Redeem")} className="ml-2" src="/heartr.png" width={50} height={50} alt="Image"/>
            <img onClick={()=> router.push("/Redeem")} className="ml-2" src="/treasure.png" width={50} height={50} alt="Image"/>
            <img onClick={()=> router.push("/Redeem")} className="ml-2" src="/freeticket.webp" width={50} height={50} alt="Image"/>
            <img onClick={()=> router.push("/Redeem")} className="ml-2" src="/lottery1.png" width={50} height={50} alt="Image"/>
            <img onClick={()=> router.push("/P2P")} className="ml-2" src="/p2p.png" width={50} height={50} alt="Image"/>
            <img onClick={()=> router.push("/Profile/Joey")} className="ml-2 rounded-full" src="https://gravatar.com/avatar/638960e628fe9c4f77c140715cd7c513?s=400&d=retro&r=x" width={45} height={45} alt="Image"/>
          </div>
          
      </div>
      </div>
      <section className="text-gray-400 opacity-55 rounded-xl bg-inherit body-font overflow-hidden mt-5 ml-4">

        <div className="container px-5 py-24 mx-auto bg-[url('/kn.jpg')] bg-opacity-70">
          <div className="flex flex-wrap -m-12">
            <Rank />
            <Quest />
          </div>
        </div>
      </section>
    </>
  );
};

export default Season;
