import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const NavbarIcons = () => {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-row ">
        <h2 className="font-abc text-2xl text-white mt-2">0</h2>
        <img
          height={50}
          width={50}
          className="rounded-full"
          src="/freeticket.webp"
          alt="alt"
        />
      </div>

      <div className="flex flex-row ">
        <h2 className="font-abc text-2xl text-white mt-2">10</h2>
        <img
          height={50}
          width={50}
          className="rounded-full"
          src="/heartr.png"
          alt="alt"
        />
      </div>

      <div className="flex flex-row ">
        <h2 className="font-abc text-2xl text-white mt-2">100</h2>
        <h2 className="font-abc text-2xl text-white mt-2 ml-2">XP</h2>
      </div>

      <div className="flex flex-row ">
        <h2 className="font-abc text-2xl text-white mt-2">100 000</h2>
        <img
          className="w-12 h-12 ml-2 rounded-full"
          src="/cadenew.png"
          alt="Rounded avatar"
        ></img>
      </div>


      <img
        onClick={() => router.push("/Profile/Joeey")}
        className="w-10 h-10 ml-2 rounded-full cursor-pointer"
        src="https://gravatar.com/avatar/de8b837bd975130ff76a7940c6cba552?s=400&d=retro&r=x"
        alt="Rounded avatar"
      >

      </img>

    </>
  );
};

export default NavbarIcons;
