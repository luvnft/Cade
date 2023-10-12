import { web3 } from "@project-serum/anchor";
import * as anchor from "@coral-xyz/anchor";

export const createMap = (program, name, board, budget, map, user, systemProgram,) => {
  console.log(program, name, board, budget, map, user, systemProgram,)
  const [mapPDA] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(name)],
    program.programId,
  )
  if (program) {

    (async () => {
      try {
        const tx = await program.methods
          .createMap( name, board, new anchor.BN(budget),)
          .accounts({
            user,
            map: mapPDA,
            systemProgram: web3.SystemProgram.programId,

          })
          .rpc();
          
      } catch (error) { console.log(error) }
    })();
  }
};

export const createGame = (program, map, game, user, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .createGame()
          .accounts({
            map,
            game,
            user,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

export const deployUnits = (program, deploys, game, user, map, systemProgram,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .deployUnits( deploys,)
          .accounts({
            game,
            user,
            map,
            systemProgram,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

