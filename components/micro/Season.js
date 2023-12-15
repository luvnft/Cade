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
      
      </div>
      <section className="text-gray-400 opacity-55 rounded-xl bg-inherit body-font overflow-hidden mt-5 ml-4">

        <div className="container px-5 py-24 mx-auto bg-opacity-70">
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
