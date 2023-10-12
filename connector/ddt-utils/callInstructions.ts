import { web3 } from "@project-serum/anchor";

export const createMap = (program, name, board, budget, map, user, systemProgram,) => {
  console.log(program, name, board, budget, map, user, systemProgram,)
  if (program) {
    console.log("ddd");

    (async () => {
      try {
        const tx = await program.methods
          .createMap( name, board, budget,)
          .accounts({
            map,
            user,
            systemProgram,
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

