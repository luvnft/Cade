import { useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";

import { createMap } from "../../connector/ddt-utils/callInstructions";

const CreateMap = (props) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });

  // React UseStates hooks for managing args
  //for createMap
  const [name_for_createMap, setname_for_createMap] = useState();
  const [board_for_createMap, setboard_for_createMap] = useState();
  const [budget_for_createMap, setbudget_for_createMap] = useState();
  const [board, setboard] = useState([
    {
      kind: "tree",
      health: 1,
      dps: 1,
      position: 0,
    },
  ]);
  //handler functions for inputs feilds
  const namehandler_for_createMap = (e) => {
    setname_for_createMap(e.target.value);
  };
  const boardhandler_for_createMap = (e) => {
    setboard_for_createMap(e.target.value);
  };
  const budgethandler_for_createMap = (e) => {
    setbudget_for_createMap(e.target.value);
  };
  const deployshandler_for_deployUnits = (e) => {
    setdeploys_for_deployUnits(e.target.value);
  };

  return (
    <>
      <Head>
        <title>dtt</title>
        <meta name="description" content="dtt" />
      </Head>
      <div className=" p-200 bg-gray-900">
        <div className="font-semibold text-m text-white font-abc text-center">
          <h2>Instructions to Create a New Map</h2>
          <p className="text-sm text-white font-normal leading-relaxed mt-2">
            Please fill in the Name of the Map, Type of Board and available
            Budget for Units.
          </p>
        </div>
        <div className="px-2 mt-2 text-gray-200 sm:text-lg sm:leading-2 flex flex-col items-center">
          <div className="flex flex-col w-60 items-center">
            <p className="">Board Name</p>
            <input
              type="text"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              placeholder={`Enter name`}
              value={name_for_createMap}
              onChange={namehandler_for_createMap}
            />
          </div>
          <div className="flex flex-col w-60 items-center">
            <p className="">Type of Board</p>
            <input
              type="text"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              placeholder={`Enter board`}
              value={board_for_createMap}
              onChange={boardhandler_for_createMap}
            />
          </div>
          <div className="flex flex-col w-60 items-center">
            <p className="">Budget for units</p>
            <input
              type="text"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              placeholder={`Enter budget`}
              value={budget_for_createMap}
              onChange={budgethandler_for_createMap}
            />
          </div>
          <div className="pt-4 flex flex-col items-center space-x-4">
            <button
              className="bg-blue-500 flex  justify-center items-center text-white py-2.5 px-5 text-xl rounded-md focus:outline-none"
              onClick={() =>
                createMap(
                  program,
                  name_for_createMap,
                  board,
                  budget_for_createMap,
                  wallet.publicKey
                )
              }
            >
              Create Map
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMap;
