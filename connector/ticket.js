import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { TICKET_PROGRAM_ID } from "../constant";
import ticketIDL from "../constant/ticket.json";

import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import {
    useAnchorWallet,
    useConnection,
    useWallet,
} from "@solana/wallet-adapter-react";
import { TOKEN_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";

export function useTicket() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const anchorWallet = useAnchorWallet();

    const [loading, setLoading] = useState(false)

    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(
                connection,
                anchorWallet,
                anchor.AnchorProvider.defaultOptions()
            );
            return new anchor.Program(ticketIDL, TICKET_PROGRAM_ID, provider);
        }
    }, [connection, anchorWallet]);


    const initCade = async () => {
        try {
            setLoading(true)
            const METADATA_SEED = "metadata"
            const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")

            const MINT_SEED = "mint"

            const metadata = {
                name: "Cade",
                symbol: "CDX",
                uri: "https://pan5exjah3p3wqjeujj4kylo4vgt5znvwrt77lnf5gcmm6tadsea.arweave.net/eBvSXSA-37tBJKJTxWFu5U0-5bW0Z_-tpemExnpgHIg",
                decimals: 9,
            };
            const mintAmount = 10;

            const [mint] = findProgramAddressSync(
                [utf8.encode(MINT_SEED)],
                new PublicKey("3BkA6x8tQjMjGtRVnTMyHYqvznJbmGpVp85c1poqCTy8")
            )

            const [metadataAddress] = findProgramAddressSync(
                [
                    utf8.encode(METADATA_SEED),
                    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                    mint.toBuffer()
                ],
                TOKEN_METADATA_PROGRAM_ID
            )

            const context = {
                metadata: metadataAddress,
                mint,
                publicKey,
                rent: SYSVAR_RENT_PUBKEY,
                systemProgram: SystemProgram.programId,
                tokenProgram: TOKEN_PROGRAM_ID,
                tokenMetaDataProgram: TOKEN_METADATA_PROGRAM_ID
            }

            const tx = await program.methods
                .initCade(metadata)
                .accounts(context)
                .rpc()

            console.log("DONE")
        } catch (error) {
            console.log(error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return {
        initCade
    }
}