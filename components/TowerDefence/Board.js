import React from "react";
import Link from "next/link";

const Board = ({ map }) => {
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
    <Link href={`/TowerDefence/${map?.account?.name}`}>
      <>
        {
          <div className="h-[500px] w-[320px] mb-5">
            <div className="text-black text-center m-2">
              <p className="">{map?.account?.name}</p>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {[...Array(60)?.keys()]?.map((index) => {
                const kind = map?.account?.board?.find(
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
    </Link>
  );
};

export default Board;
