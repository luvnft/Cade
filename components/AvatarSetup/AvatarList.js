import React from "react";
import { MdExplore } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
const AvatarList = () => {
  return (
    <>
      <div className="flex flex-row mt-5">
        <img
          className="w-12 h-12 ml-5 rounded-full"
          src="https://picsum.photos/200"
          alt="Rounded avatar"
        ></img>
        <img
          className="w-12 h-12 ml-5 rounded-full"
          src="https://picsum.photos/201"
          alt="Rounded avatar"
        ></img>
        <img
          className="w-12 h-12 ml-5 rounded-full"
          src="https://picsum.photos/202"
          alt="Rounded avatar"
        ></img>
      </div>
    </>
  );
};

export default AvatarList;
