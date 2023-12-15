import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/bonk-or-death/useProgram";
import { useRouter } from "next/router";
import { Keypair, PublicKey } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import placeBet from "../../connector/bonk-or-death/place_bet";
import { BN } from "@coral-xyz/anchor";
import { randomBytes } from "crypto"

const ChooseUnits = (props) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });

  let seed = new BN(randomBytes(16));

  return (
    <>
      <Head>
        <title>{`'Cade BONK or DEATH`}</title>
        <meta name="description" content="BONK or DEATH" />
      </Head>
      <section className="text-gßray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
            <div className="flex justify-center">
              <button onClick={() => placeBet(program, seed, wallet)}>click</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUnits;
