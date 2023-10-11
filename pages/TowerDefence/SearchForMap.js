import * as anchor from "@coral-xyz/anchor";
import { useEffect, useMemo, useState } from "react";
import { TOWER_DEFENCE_PROGRAM_ID } from "../../constant/index";
import { IDL } from "../../constant/towerdefence";

import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { utf8 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";

export function useFourInLine() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(IDL, FOUR_IN_LINE_PROGRAM_ID, provider);
    }
  }, [connection, anchorWallet]);
  return {
    program,
  };
}

const CreateGame = () => {
  return (
    <></>
  )
}

export default CreateGame
