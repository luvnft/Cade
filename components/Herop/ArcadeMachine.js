import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { truncateHeadline, truncateSublie } from "../../hooks/Truncate";
import AfterHero from "./AfterHero";
import CadeSocial from "./CadeSocial";
import ArcadeBoard from "./ArcadeBoard";

export default function ArcadeMachine({ images }) {

    return (
        <>
            <div className="">
                <div className="flex justify-center">
                    <ArcadeBoard />
                </div>
                <div className="relative ">
                    <div className='flex justify-center'>

                        <img
                            src="/gowmain.png"
                            alt="Image 1"
                            className="w-50 h-50 object-cover"
                        />
                    </div>
                </div>
              
                <div class="block lg:hidden mt-2 border-t-2 border-gray-700"></div>
            </div>



        </>
    );
}