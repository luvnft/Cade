import React from "react";
import { GiTwoCoins } from "react-icons/gi";
const SuppliesAvatar = () => {
  return (
    <>
      <section className="p-10 text-gray-400 bg-black body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div className="flex justify-center">
                <img src="/cadenew.png" alt="CadeImage"/>
                </div>
                <p className="text-white  font-abc text-2xl">20x Cade Coins</p>
              </div>
              <button className="text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">
                Add
              </button>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div className="flex justify-center">
                 <img src="/cadenew.png" alt="CadeImage"/>
                </div>
                <p className="text-white  font-abc text-2xl">40x Cade Coins</p>
              </div>
              <button className="text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">
                Add
              </button>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <div className="flex justify-center">
                 <img src="/cadenew.png" alt="CadeImage"/>
                </div>
                <p className="text-white  font-abc text-2xl">60x Cade Coins</p>
              </div>
              <button className="text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div className="flex justify-center">
                  <div className="ng-black sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                    <img
                      height={100}
                      width={100}
                      className="mt-10 rounded-full"
                      src="/heartr.png"
                      alt="alt"
                    />
                  </div>
                </div>
                <p className="text-white  font-abc text-2xl">20x Life</p>
              </div>
              <button className="text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">
                Add
              </button>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <div className="flex justify-center">
                  <div className="ng-black sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                    <img
                      height={100}
                      width={100}
                      className="mt-10 rounded-full"
                      src="/heartr.png"
                      alt="alt"
                    />
                  </div>
                </div>
                <p className="text-white  font-abc text-2xl">40x Life</p>
              </div>
              <button className="text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">
                Add
              </button>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <div className="flex justify-center">
                  <div className="ng-black sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                    <img
                      height={100}
                      width={100}
                      className="mt-10 rounded-full"
                      src="/heartr.png"
                      alt="alt"
                    />
                  </div>
                </div>
                <p className="text-white  font-abc text-2xl">60x Life</p>
              </div>
              <button className="text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuppliesAvatar;
