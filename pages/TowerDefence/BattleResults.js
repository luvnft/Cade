const BattleResults = () => {
  return (
    <div className="p-8 bg-black">
      <div className="font-semibold text-xl text-center m-5">
        <h2>Battle Results</h2>
      </div>
      <div className="px-2 mt-2 text-gray-200 sm:text-lg sm:leading-2 flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="w-60 flex flex-col items-center mr-4">
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
  );
};

export default BattleResults;
