import Hero from "../components/Hero"
import Navbar from '../components/Navbar';
import Season from "../components/micro/Season";
import Games from "../components/micro/Games";
import FriendsList from "../components/micro/FriendsList";
import { useRouter } from "next/router";
import { useState } from "react";
import LeaderBoard from "./LeaderBoard";
const Home = () => {
  const router = useRouter()
  const [checking , setChecking] = useState(true)
  
  return (
    <>
     
     <div class="flex flex-col h-screen bg-black">
        <div class="flex flex-1 overflow-hidden">
          <div class="flex w-16 p-4 text-white bg-gray-800 mb-40 mt-20 ml-2 rounded-2xl">
            <FriendsList />
          </div>
          <div class="flex flex-1 flex-col">
    
            <div class="flex 2xl:block flex-1 overflow-y-auto paragraph px-4">
              <div id="top">
                <div
                  style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <img
                    src="sun-tornadod.png"
                    className=""
                    alt="Mountains with snow"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
               {checking ? (
                <>
                <Season />
                <Games/>

                </>
               ) : (
                <>
                <LeaderBoard/>
                </>
               )}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
