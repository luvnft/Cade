import { useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";
import BoardTubnail from "../../components/TowerDefence/BoardTubnail";
import {
  createGame,
  createMap,
} from "../../connector/ddt-utils/callInstructions";
import { useRouter } from "next/router";

const SearchForMap = (props) => {
  const Data = [
    {
      name: "Space Invaders",
      img: "/spacenew.webp",
    },
    {
      name: "Coin Flip",
      img: "/coinflip.jpg",
    },
    {
      name: "Dice Game",
      img: "/dice.jpg",
    },
    {
      name: "Car Race",
      img: "/car.jpg",
    },
  ];
  const router = useRouter();

  const [name, setname] = useState("");
  const [maps, setmaps] = useState([]);
  const [url, setUrl] = useState("");
  const [mapName, setMapName] = useState();
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

  const create = async (name) => {
    const gamePubkey = await createGame(
      program,
      name,
      wallet.publicKey
    );
    setUrl("/TowerDefence/"+gamePubkey.toString());
    setMapName(name)
  };

  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
            <div className="flex justify-center"></div>

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
                        className={`p-1 m-5 rounded-m flex items-center justify-center ${map.account.name==mapName ? "bg-green-600" : "bg-emerald-50"}`}
                        onClick={()=>{url ? router.push(url):create(map?.account?.name)}}
                      >
                        <BoardTubnail map={map} />
                      </div>
                    ))}
                </div>
              </main>
            </>
          </div>

          <div className="p-5 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-white font-abc text-5xl mt-5 ml-5">
              Play More
            </h1>
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-col">
                <div className="p-2">
                  <div className="flex flex-col">
                    {Data.map((item) => (
                        <div className="mt-10" key={item.name}>
                          <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <img
                              className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                              src={item.img}
                              alt="d"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <h5 className="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                              </h5>
                            </div>
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchForMap;
