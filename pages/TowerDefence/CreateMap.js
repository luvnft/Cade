import { useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useProgram } from "../../connector/ddt-utils/useProgram";
import Image from "next/image";
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
      <div className="p-8 bg-gray-900 text-white">
        <div className="font-semibold text-xl text-center">
          <h2>Choose your defenders!</h2>
        </div>
        <div className="px-2 mt-2 text-gray-200 sm:text-lg sm:leading-2 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <div className="w-60 flex flex-col items-center mr-4">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder={`Enter Map Name`}
                  value={name_for_createMap}
                  onChange={namehandler_for_createMap}
                />
              </div>
              <div className="flex flex-col mt-4">
                <p className="">Type of Board/Grid component goes here</p>
                {/* <input
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder={`Enter board`}
                  value={board_for_createMap}
                  onChange={boardhandler_for_createMap}
                /> */}
              </div>
            </div>
            <div className="flex mx-5 items-center">
              <div className="flex flex-row">
                {/* <input
                type="text"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                placeholder={`Enter budget`}
                value={budget_for_createMap}
                onChange={budgethandler_for_createMap}
              /> */}
                <div>
                  <button
                    className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                    value={budget_for_createMap}
                    onClick={budgethandler_for_createMap}
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src="/tree.svg"
                        alt="Tree Icon"
                        className="h-10 w-10"
                      />
                      <div>Health 200</div>
                      <div>DPS 25</div>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                  value={budget_for_createMap}
                  onClick={budgethandler_for_createMap}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/bear.svg"
                      alt="Bear Icon"
                      className="h-10 w-10"
                    />
                    <div>Health 200</div>
                    <div>DPS 25</div>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white py-2.5 px-5 text-sm rounded-md focus:outline-none mx-5"
                  value={budget_for_createMap}
                  onClick={budgethandler_for_createMap}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/bull.svg"
                      alt="Bull Icon"
                      className="h-10 w-10"
                    />
                    <div>Health 200</div>
                    <div>DPS 25</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 flex items-center justify-center">
          <button
            className="inline-flex py-2.5 px-5 mx-20 text-sm font-large text-white bg-lime-500 border-lime-500 outline outline-lime-500 border-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600 dark:bg-lime-600 dark:hover-bg-lime-600 dark:focus-ring-lime-600 w-60 flex items-center justify-center"
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
            SAVE MAP!
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateMap;
