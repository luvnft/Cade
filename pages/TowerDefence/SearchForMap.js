import { useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";
import BoardTubnail from "../../components/TowerDefence/BoardTubnail";

const SearchForMap = (props) => {
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
          className="mb-5"
        />
        <div className="grid grid-cols-2 gap-2">
        {maps
          .filter((map) => map?.account?.name?.includes(name))
          ?.map((map) => (
            <BoardTubnail key={map.publicKey} map={map} />
          ))}
        </div>
      </main>
    </>
  );
};

export default SearchForMap;
