import { useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";

const ChooseUnits = (props) => {
  const [name, setname] = useState("");
  const [maps, setmaps] = useState([]);
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });

  useEffect(() => {
    if (program && maps.length == 0) {
      (async () => {
        const maps = await program.account.map.all();
        setmaps(maps);
      })();
    }
  }, [program]);

  const namehandler = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <Head>
        <title>dtt</title>
        <meta name="description" content="dtt" />
      </Head>
      <main>
        <input
          type="text"
          onChange={namehandler}
          placeholder="Search for A MAP"
          value={name}
        />
        {maps
          .filter((map) => map?.account?.name?.includes(name))
          ?.map((map) => {
            console.log(map)
            return (
            <div key={map.publicKey} className="bg-white">
              <p className="bg-blue-950">{map.account.name}</p>
              
            </div>)}
          )}
      </main>
    </>
  );
};

export default ChooseUnits;
