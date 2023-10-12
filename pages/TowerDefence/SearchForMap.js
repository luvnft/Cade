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
        <div className="flex flex-col items-center justify-center m-5">
          <input
            type="text"
            onChange={namehandler}
            placeholder="Search for a MAP"
            value={name}
            className="mb-5 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-80 sm:text-base border-gray-300 rounded-md focus:outline-none text-gray-600"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {maps
            .filter((map) => map?.account?.name?.includes(name))
            ?.map((map) => (
              <div
                key={map.publicKey}
                className="p-1 m-5 rounded-md bg-gray-100 flex items-center justify-center"
              >
                <BoardTubnail map={map} />
              </div>
            ))}
        </div>
      </main>
    </>
  );
};
export default SearchForMap;
