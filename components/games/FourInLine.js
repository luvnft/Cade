import React, { use } from 'react'
import { useEffect, useState } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { Board, useFourInLine } from '../../connector/useFourInLine'
import { useRouter } from "next/router";
import Link from 'next/link';

const FourInLine = () => {
  const wallet = useAnchorWallet();
  const { program } = useFourInLine()
  const [name, setName] = useState('')
  const [created, setCreated] = useState(false)
  const [mode, setMode] = useState("Solo")
  const router = useRouter();

  const handleClick = async () => {
    const [gamePublicKey] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from("game"), Buffer.from(name)],
      program.programId
    )
    try {
      const tx = await program.methods
        .createGame(
          name,
          [wallet.publicKey],
          mode
        )
        .accounts({
          game: gamePublicKey,
          payer: wallet?.publicKey,
          systemProgram: web3.SystemProgram.programId
        })
        .rpc()
      setCreated(true)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (!program) return;
    const listener = program.addEventListener(
      "GameCreated",
      async (event, _slot, _sig) => {
        router.push(`/${name}`);
      }
    );

    return () => {
      program.removeEventListener(listener);
    };
  }, [program]);
  return (
    <>

      <>
        <div className=" p-16 bg-black">
          <div className='flex justify-center'>
            <h1 className='text-white font-abc text-5xl mt-5'>Four In Line Game</h1>
          </div>
          <div className='mt-20'>
            <div class="flex items-center">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                </div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Game Name" required />
                <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">

                </button>
              </div>
              <button onClick={handleClick} type="submit" class="inline-flex items-center py-2.5 px-5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create
              </button>

              {created && (
                <div className="text-white text-center mt-5">
                  <strong>
                    If this don't redirect you automatically{" "}
                    <h1 className="text-white text-3xl">
                      Learn <a href={`/FourInLineGame/${name}`}>Next.js!</a>
                    </h1>
                  </strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </>




    </>
  )
}

export default FourInLine