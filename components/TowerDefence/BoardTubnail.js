import React from "react";
const BoardTubnail = ({ map }) => {
  console.log(map);
  const render = (kind) => {
    switch (kind) {
      case "tree":
        return <img src="/tree.svg" className="h-full w-full" />;
      case "bull":
        return <img src="/bull.svg" className="h-full w-full" />;
      case "bear":
        return <img src="/bear.svg" className="h-full w-full" />;
      default:
        return "";
    }
  };
  return (
    <>
      {
        <div className="h-[200px] w-[120px] mb-5">
          <div className="text-black text-center m-2">
            <p className="">{map.account.name}</p>
          </div>
          <div className="grid grid-cols-6 gap-1">
            {[...Array(60).keys()].map((index) => {
              const kind = map.account.board.find(
                (e) => e.position === index
              )?.kind;
              return (
                <div
                  key={index}
                  className={`max-h-[10px] max-w-[10px] ${
                    index % 2 ? "bg-green-900" : "bg-green-600 h-full w-full"
                  }`}
                >
                  <div className={`h-[10px] w-[10px]`}>
                    {kind ? render(kind) : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
};

export default BoardTubnail;
