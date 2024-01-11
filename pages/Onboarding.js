import React from 'react';
import WelcomeBoard from '../components/AvatarSetup/WelcomeBoard';
import CadeCardOnboarding from '../components/AvatarSetup/CadeCard';
import Link from 'next/link';
const Onboarding = () => {
  return (
    <>

      <div class="relative flex flex-col min-h-screen bg-[url('/brickwall.jpg')]">

      
        <div id="first" class="h-1/4 flex flex-row">
          <div class="ml-10 hidden lg:block">
            <div class="relative">
              <img class="h-72 w-28" src="pipe.png" alt="pole" />
              <div class="absolute top-1/2">
                <WelcomeBoard message={"Welcome To"} width={"96"} />
              </div>
            </div>
          </div>

          <div class="block lg:hidden h-screen flex flex-col overflow-y-scroll">
            <div class="relative">
              <div class="ml-5 flex justify-start">
                <img class="h-72 w-28" src="pipe.png" alt="pole" />
              </div>
              <div class="ml-5 absolute top-1/2 left-0 overflow-x-hidden">
                <WelcomeBoard message={"Welcome To Cade"} width={"80"} />
              </div>
            </div>
            <div class="mt-10 flex flex-col justify-center">
              <div class="w-screen">
                <CadeCardOnboarding />
              </div>
              <div class="flex flex-row justify-center">
                <div>
                  <button type="button" class="mt-5 font-abc text-4xl bg-gray-950 text-white border-2 border-green-400 focus:outline-none rounded-lg px-3 py-3 me-2 mb-2"><Link href='/'>Join Cade </Link></button>
                </div>
                <div>
                  <button type="button" class="mt-5 font-abc text-4xl bg-gray-950 text-white border-2 border-green-400 focus:outline-none rounded-lg px-3 py-3 me-2 mb-2"><Link href='/'>To Arcade</Link></button>
                </div>
              </div>
              <div class="mt-10 flex flex-row justify-center overflow-x-hidden ">
                <img class="w-60 h-60" src='/c6.png' alt='ff' />
                <img class="w-60 h-60" src='/c4.png' alt='ff' />
                <img class="w-60 h-60" src='/c9.png' alt='ff' />
                <img class="w-60 h-60" src='/c1.png' alt='ff' />
                <img class="w-60 h-60" src='/newarcade.png' alt='ff' />
              </div>
            </div>
          </div>

          <div class="absolute right-0 mr-10 hidden lg:block">
            <div class="relative">
              <div class="flex justify-end">
                <img class="h-72 w-28" src='pipe.png' alt='pole' />
              </div>
              <div class="absolute top-1/2 right-0">
                <WelcomeBoard message={"Cade 🔥🔥"} width={"96"} />
              </div>
            </div>
          </div>
        </div>

        
        <div class="hidden lg:flex flex-col h-3/4 overflow-y-hidden">

          <div class="h-1/2 flex flex-row">
            <div class="relative w-1/5 mb-5 ml-48">
              <button type="button" class="absolute bottom-0 right-0 mt-5 font-abc text-4xl bg-gray-950 text-white border-2 border-green-400 focus:outline-none rounded-lg px-10 py-6 me-2 mb-2"><Link href='/Cadefaucet'>Join Cade </Link></button>
            </div>

            <div class="flex justify-center w-3/5 mb-14">
              <div class="w-2/4 flex flex-col justify-center items-center">
                <div>
                  <CadeCardOnboarding />
                </div>
                <div class="flex flex-row">
                  <div>
                    <button type="button" class="mt-5 font-abc text-4xl bg-gray-950 text-white border-2 border-green-400 focus:outline-none rounded-lg px-10 py-3 me-2 mb-2"><Link href='/'>Join Cade </Link></button>
                  </div>
                  <div>
                    <button type="button" class="mt-5 font-abc text-4xl bg-gray-950 text-white border-2 border-green-400 focus:outline-none rounded-lg px-10 py-3  me-2 mb-2"><Link href='/'>To Arcade</Link></button>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative mb-5 w-1/5 mr-48">
              <button type="button" class="absolute bottom-0 mt-5 font-abc text-4xl bg-gray-950 text-white border-2 border-green-400 focus:outline-none rounded-lg px-10 py-6 me-2 mb-2"><Link href='/Cadefaucet'>To Arcade</Link></button>
            </div>
          </div>

          <div class="mt-5 h-1/2 flex flex-row bg-transparent overflow-x-scroll">
            <div class="flex flex-row items-center justify-end w-1/4  overflow-y-hidden">
              <img class="w-60 h-60" src='/c8.png' alt='ff' />
              <img class="hidden xl:block w-60 h-60" src='/c1.png' alt='ff' />
            </div>

            <div class="w-2/4 flex justify-center flex-row items-center">
              <img class="w-60 h-60" src='/c4.png' alt='ff' />
              <img class="w-60 h-60" src='/c9.png' alt='ff' />
              <img class="w-60 h-60" src='/c2.png' alt='ff' />
            </div>

            <div class="flex flex-row items-center w-1/4 overflow-x-hidden">
              <img class="hidden xl:block w-60 h-60" src='/c6.png' alt='ff' />
              <img class="w-60 h-60" src='/newarcade3.png' alt='ff' />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Onboarding;
