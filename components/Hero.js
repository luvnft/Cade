import Image from "next/image";
import NavbarIcons from "./small/NavbarIcons";
import Navbar from "./Navbar";
import Season from "./small/Season";
const Hero = () => {

  return (
    <>
     <div class="flex flex-col h-screen bg-black">
  <div class="flex flex-1 overflow-hidden">
    <div class="flex w-16 p-4 text-white bg-gray-800 mb-40 mt-20 ml-2 rounded-2xl"></div>
    <div class="flex flex-1 flex-col">
      {/* <div class="flex h-16 p-4 text-white w-max">
      <Navbar/>
      </div> */}
      <div class="flex flex-1 overflow-y-auto paragraph px-4">
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
       <Season/>
      </div>
      </div>
    </div>
  </div>
  {/* <div class="flex bg-gray-900 text-white">Footer</div> */}
</div>
    </>
  );
};

export default Hero;
