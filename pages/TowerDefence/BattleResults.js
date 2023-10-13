const BattleResults = () => {
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
  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')]">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 ">
            <div className="flex justify-center"></div>

            <div className="flex justify-center p-16 bg-black mt-16">
              <div className="flex justify-center p-16 bg-black mt-16">
                <div className="font-semibold text-xl text-center m-2">
                  <h2>Battle Results</h2>
                </div>
              </div>

              <div className="px-2 mt-2 text-gray-200 sm:text-lg sm:leading-2 flex flex-col items-center">
                <div className="flex flex-row items-center">
                  <div className="w-80 flex flex-col items-center mr-4">
                    <div className="flex flex-col mt-4">
                      <p>Type of Board/Grid component goes here</p>
                    </div>
                  </div>
                  <div className="items-center">
                    <p className="text-left m-3 text-l text-lime-400 font-bold">
                      YOU WIN!
                    </p>
                    <div className="flex items-center">
                      <p className="text-left m-3 text-l text-lime-400 font-bold">
                        POINTS 254
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <DownwardBar slug={slug} show={show} playerOne={playerOne} secondPlayer={secondPlayer} thirdPlayer={thirdPlayer} /> */}
          </div>

          <div className="p-5 lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-white font-abc text-5xl mt-5 ml-5">
              Play More
            </h1>
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-col">
                <div className="p-2">
                  <div className="flex flex-col">
                    {Data.map((item) => {
                      return (
                        <div className="mt-10" key={item.name}>
                          <a
                            href="#"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover-bg-gray-100 dark:border-gray-700 dark-bg-gray-800 dark-hover-bg-gray-700"
                          >
                            <img
                              className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md-rounded-none md-rounded-l-lg"
                              src={item.img}
                              alt="d"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <h5 className="font-abc mb-2 text-3xl font-bold tracking-tight text-gray-900 dark-text-white">
                                {item.name}
                              </h5>
                            </div>
                          </a>
                        </div>
                      );
                    })}
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

export default BattleResults;
