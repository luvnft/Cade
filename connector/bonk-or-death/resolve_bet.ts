import { BN } from "@project-serum/anchor";
import { PublicKey, LAMPORTS_PER_SOL, SystemProgram } from "@solana/web3.js";

const resolveBet = async (program, seed, player) => {

  let house = new PublicKey("64t8Q5PcFN6eeN8EvnhpsojUQdraFedMSj3XjpHv9jmH")
  let vault = PublicKey.findProgramAddressSync([Buffer.from("vault"), house.toBuffer()], program.programId)[0];
  let bet = PublicKey.findProgramAddressSync([Buffer.from("bet"), vault.toBuffer(), seed.toArrayLike(Buffer,"le", 16)], program.programId)[0];
  console.log(PublicKey.findProgramAddressSync([Buffer.from("bet"), vault.toBuffer(), seed.toArrayLike(Buffer,"le", 16)], program.programId)[0].toString())
const result = program.methods.placeBet(seed, 50, new BN(LAMPORTS_PER_SOL/100))
    .accounts({
      player: player.publicKey,
      house: house,
      vault,
      bet,
      systemProgram:SystemProgram.programId 
    })
    .rpc().then(async (result) => {

    const pdas = await program.account.bet.all()
    console.log({pdas})
    console.log({result})
    })
  }

export default resolveBet;