import Image from "next/image";
import NavbarIcons from "./micro/NavbarIcons";
import Navbar from "./Navbar";
import Season from "./micro/Season";
import FriendsList from "./micro/FriendsList";
import Games from "./micro/Games";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-black">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex w-16 p-4 text-white bg-gray-800 mb-40 mt-20 ml-2 rounded-2xl">
            <FriendsList />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 overflow-y-auto paragraph px-4">
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
                    objectfit="cover"
                  />
                </div>
                <Season />
                <Games />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
