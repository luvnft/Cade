import React from "react";
import FriendsList from "../components/micro/FriendsList";
import MicroLeaderBoard from "../components/LeaderBoard/MicroLeaderBoard";
const LeaderBoard = () => {
  return (
    <>
      <section className="text-gray-400 body-font bg-[url('/kn.jpg')]">
        <div className="flex justify-center py-10">
          <h1 className="font-abc text-6xl text-white">LeaderBoard</h1>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="flex justify-center">
              <img height={200} width={200} src="/l1.png" alt="gggg" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="font-abc text-white text-6xl title-font font-medium mb-2">
                Ben
              </h2>
              <h2 className="font-abc text-white text-4xl title-font font-medium mb-2">
                Matched Played : 187
              </h2>
              <h2 className="font-abc text-white text-4xl title-font font-medium mb-2">
                Win Ratio : 92%
              </h2>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="font-abc text-white text-6xl title-font font-medium mb-2">
                Kane
              </h2>
              <h2 className="font-abc text-white text-4xl title-font font-medium mb-2">
                Matched Played : 107
              </h2>
              <h2 className="font-abc text-white text-4xl title-font font-medium mb-2">
                Win Ratio : 62%
              </h2>
            </div>
            <div className="flex justify-center">
              <img height={200} width={200} src="/l2.png" alt="gggg" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="flex justify-center">
              <img height={200} width={200} src="/l3.png" alt="gggg" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="font-abc text-white text-6xl title-font font-medium mb-2">
                Harry
              </h2>
              <h2 className="font-abc text-white text-4xl title-font font-medium mb-2">
                Matched Played : 92
              </h2>
              <h2 className="font-abc text-white text-4xl title-font font-medium mb-2">
                Win Ratio : 42%
              </h2>
            </div>
          </div>
        </div>

        <div>
          <MicroLeaderBoard />
        </div>
      </section>
    </>
  );
};

export default LeaderBoard;
