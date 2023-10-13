import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlinePlusCircle } from 'react-icons/ai'
const NavbarIcons = () => {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-row ">
        <h2 className="font-abc text-3xl text-white mt-2">100</h2>
        <h2 className="font-abc text-3xl text-white mt-2 ml-2">XP</h2>
      </div>

      <div className="flex flex-row ">

        <img
          height={50}
          width={50}
          className="rounded-full"
          src="/freeticket.webp"
          alt="alt"
        />
        <AiOutlinePlusCircle onClick={()=> router.push('/Redeem')} className="text-3xl mt-2 ml-2 cursor-pointer" />
      </div>

      <div className="flex flex-row ">

        <img
          height={50}
          width={50}
          className="rounded-full"
          src="/heartr.png"
          alt="alt"
        />
        <AiOutlinePlusCircle onClick={()=> router.push('/Redeem')} className="text-3xl mt-2 ml-2 cursor-pointer"  />
      </div>



      <div className="flex flex-row ">

        <img
          className="w-12 h-12 ml-2 rounded-full"
          src="/treasure.png"
          alt="Rounded avatar"
        ></img>
        <AiOutlinePlusCircle onClick={()=> router.push('/Redeem')} className="text-3xl mt-2 ml-2 cursor-pointer"  />
      </div>

      <div className="flex flex-row ">

        <img
          className="w-12 h-12 ml-2 rounded-full"
          src="/lottery1.png"
          alt="Rounded avatar"
        ></img>
        <AiOutlinePlusCircle onClick={()=> router.push('/Redeem')} className="text-3xl mt-2 ml-2 cursor-pointer"  />
      </div>

      <img
          onClick={()=> router.push("/P2P")}
          className="w-12 h-12 ml-2 rounded-full"
          src="/p2p.png"
          alt="Rounded avatar"
        ></img>


      <img
        onClick={() => router.push("/Profile/Joeey")}
        className="w-10 h-10 ml-2 rounded-full cursor-pointer"
        src="https://gravatar.com/avatar/638960e628fe9c4f77c140715cd7c513?s=400&d=retro&r=x"
        alt="Rounded avatar"
      >

      </img>

    </>
  );
};

export default NavbarIcons;
