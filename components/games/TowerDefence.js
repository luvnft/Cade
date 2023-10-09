import React from "react";
import { Button } from "react-scroll";

const TowerDefence = () => {
  return (
    <>
      <>
        <div className=" p-16 bg-gray-900">
          <div className="flex justify-center">
            <h1 className="text-white font-abc text-5xl mt-5">Solana Royale</h1>
          </div>
          <div className="mt-20">
            <div class="flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-centre py-2.5 px-5 mx-20 text-sm font-large text-white bg-lime-500 outline outline-lime-500 border-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600  dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-600 w-54 h-18 "
              >
                Create a New Map
              </button>
              <button
                type="submit"
                class="inline-flex py-2.5 px-5 mx-20 text-sm font-large text-white bg-lime-500 border-lime-500 outline outline-lime-500 border-lime-600 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-600  dark:bg-lime-600 dark:hover:bg-lime-600 dark:focus:ring-lime-600 w-54 h-18 "
              >
                Select a Map
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default TowerDefence;
