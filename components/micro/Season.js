import React from "react";
import Rank from "./Rank";
import Quest from "./Quest";
const Season = () => {
  return (
    <>
      <section className="text-gray-400 opacity-55 rounded-xl bg-inherit body-font overflow-hidden mt-5 ml-4">
        <div className="container px-5 py-24 mx-auto bg-[url('/kn.jpg')] bg-opacity-70">
          <div className="flex flex-wrap -m-12">
            <Rank />
            <Quest />
          </div>
        </div>
      </section>
    </>
  );
};

export default Season;
