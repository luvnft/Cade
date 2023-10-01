import React, { use } from 'react'
import { useEffect, useState } from "react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import { useRouter } from "next/router";
import { useConnection } from "@solana/wallet-adapter-react";
import { Board, useFourInLine } from '../../connector/useFourInLine'


const FourInLineGame = () => {
  const router = useRouter();
  const { connection } = useConnection();
  const { program } = useFourInLine()
  const { slug } = router.query;
  const wallet = useAnchorWallet();
  //
  const [gamePublicKey, setGamePublicKey] = useState();
  const [gameAccount, setGameAccount] = useState();
  //

  useEffect(() => {
    if (program) {
      const [pda] = web3.PublicKey.findProgramAddressSync(
        [Buffer.from("game"), Buffer.from(slug?.toString() ?? "")],
        program.programId
      );
      setGamePublicKey(pda);
    }
  }, [wallet]);

  useEffect(() => {
    if (gamePublicKey) {
      (async () => {
        const gameAccount = await program.account.game.fetch(gamePublicKey);
        setGameAccount(gameAccount);
      })();
    }
  }, [gamePublicKey]);

  useEffect(() => {
    if (!program) return;
    const listener = program.addEventListener(
      "GameUpdated",
      async (event, _slot, _sig) => {
        setGameAccount(event);
      }
    );

    return () => {
      program.removeEventListener(listener);
    };
  }, [program]);

  return (
    <>
      {!!gameAccount ? (
        <>
          <Board
            board={gameAccount?.board}
            program={program}
            gamePublicKey={gamePublicKey}
            payer={wallet.publicKey}
            playable={gameAccount?.status == "PLAYING"}
          />
          {gameAccount.status != "PLAYING" && (
            <div className="p-5 m-5 font-extrabold text-3xl text-center text-white bg-purple-900">
              {gameAccount.status}
            </div>
          )}
        </>
      ) : (
        <h1 className="text-white">
          Looks like your game don't exists or the blockchain is still
          replicating the tx, please try refreshing the page
        </h1>
      )}
    </>
  )
}

export default FourInLineGame
