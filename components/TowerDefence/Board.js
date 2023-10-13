import React from "react";

const Board = ({ map }) => {
  const render = (kind) => {
    console.log(kind);
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
          <div className="h-[500px] w-[320px] mb-5">
            <div className="grid grid-cols-6 gap-1">
              {[...Array(60)?.keys()]?.map((index) => {
                const kind = map?.board?.find(
                  (e) => e?.position === index
                )?.kind;
                return (
                  <div
                    key={index}
                    className={`max-h-[50px] max-w-[53px] ${
                      ((index  + Math.floor(index/6)) % 2 )
                      ? "bg-green-900" : "bg-green-600"
                    }`}
                    custom={index}
                  >
                    <div className={`h-[50px] w-[53px]`}>
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

export default Board;
