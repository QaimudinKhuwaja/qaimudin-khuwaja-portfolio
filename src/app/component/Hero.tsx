"use client"

import Image from "next/image";
import myimg from '../assets/myimg.jpeg'
import weeb from '../assets/weeb.jpg'
import bulb from '../assets/bulb.jpg'
import webbg from '../assets/webbg.jpg'
import bgimg from '../assets/bgimg.jpg'
import Link from "next/link";
import {useState} from 'react'
import Hire from "./Hire";


export default function Hero() {
  const [showFooter, handleShowFooter] = useState(false)
  
  const handleHireMe = ()=>{
    handleShowFooter(true)
  }
  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white p-5">
      <div>


      <div>
        <Image
          src={bgimg}
          alt="Background Image"
          className="md:block lg:block sm:block hidden"
          quality={70}
          objectFit="cover"
          objectPosition="center"
        /></div>

        <div>
        <Image
          src={weeb}
          alt="Background Image"
          className="md:hidden lg:hidden sm:hidden block"
          quality={50}
          objectFit="cover"
          objectPosition="center"
        /></div>


        <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black-500 to-blue-400 opacity-50">
           <Image
          src={bulb}
          alt="Background Image"
          className="md:hidden lg:hidden sm:hidden block"
          quality={50}
          objectFit="cover"
          objectPosition="center"
        /></div>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0">
          <Image
            src={myimg}
            alt="Your Name"
            className="w-40 h-40 mx-auto rounded-full mb-[20px] border-4 border-yellow-300 border-orange mt-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-purple mt-2 animate-bounce ">
            Qaimudin Khuwaja
          </h1>
          <p className="text-[23px] mt-2 ">Frontend Web Developer</p>
          <p className="text-xl mt-3 hidden lg:block md:block sm:block">I am a passionate Frontend Developer. My focus is on building fast, responsive, <br /> and user-friendly web applications that deliver exceptional user experiences. </p>
          {/* <p className="text-xl mt-3 block md:hidden lg:hidden sm:hidden">I am a passionate Frontend Developer. My focus is on building fast, responsive, and user-friendly web applications that deliver exceptional user experiences. </p> */}
          {/* wiitting antity */}
          <details className="border mt-3 md:hidden lg:hidden block border-transparent open:border-black/10  ..." open>
         <summary className="text-sm leading-4 font-semibold text-white select-none">I am a passionate Frontend Developer...</summary>
          <div className="mt- text-[16px] leading-6 text-white">
         <p>My focus is on building fast, responsive, and user-friendly web applications that deliver exceptional user experiences.</p>
            </div>
              </details>
              {/* end */}

          <div className="flex gap-4 mt-4 p-4">
          <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link href="https://drive.google.com/file/d/1j0rXJtmmzoht6E_ZoPgUL5xJ5Fk3aZbK/view?usp=drive_link"> Resume</Link></button>
          <button type="button" onClick={handleHireMe} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Hire Me </button>
          </div>
          {showFooter && <Hire/>}
        </div>
      </div>
      


    </div>
    
  );
}