// "use client"
// import React, { useState } from 'react'
// import Link from "next/link"
// import Image from 'next/image';
// import cart from '../assets/cart.png'


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to control mobile menu toggle

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close
//   };

//   return (
//     <nav className=' bg-[#F1DDC9] shadow-inner shadow-[#D84727]  w-full '> 
//       <div className="max-w-screen-full flex justify-between items-center py-3 px-4 sm:px-8 md:px-16">
        
//         {/* Logo */}
//         <div>
//           <h1 className="text-[#D84727] font-[800] pt-2 text-[20px]">QAFIX</h1>
//         </div>

//         {/* Navigation */}
//         <div className="hidden md:flex">
//           <ul className="text-black flex gap-[20px] pt-2 font-[500] text-[18px]">
//             <Link href="/"><li>Home</li></Link>
//             <Link href="/featured"><li>Featured</li></Link>
//             <Link href="/login"><li>Login</li></Link>
//             <Link href="/signup"><li>Signup</li></Link>     
//           </ul>

//         </div>
//        <Link href='/cart'><div  className='bg-[#F1DDC9] w-[34px] h-[35px] place-items-center py-1 rounded-full hidden md:block lg:block'><Image src={cart} alt='cart' className='h-[23px] w-[24px]' /></div></Link>

    

//         {/* Button */}
        

      

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center">
//         <div  className='bg-[#F1DDC9] w-[34px] h-[35px] place-items-center py-1 rounded-full'><Image src={cart} alt='cart' className='h-[23px] w-[24px]' /></div>

//           <button onClick={handleMenuToggle} className="text-black focus:outline-none">
//             {/* Hamburger icon */}
//             <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>

//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center py-4 bg-[#F1DDC9] h-[200px]">
//           <ul className="text-black flex flex-col gap-4 font-[500] text-[18px]">
//             <Link href="/"><li onClick={() => setIsMenuOpen(false)}>Home</li></Link>
//             <Link href="/featured"><li onClick={() => setIsMenuOpen(false)}>Featured</li></Link>
//             <Link href="/login"><li onClick={() => setIsMenuOpen(false)}>Login</li></Link>
//             <Link href="/signup"><li onClick={() => setIsMenuOpen(false)}>Signin</li></Link>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import Image from "next/image";
import logo from '../assets/logo.png';
import yelo from '../assets/yellowbg.png'
import lion from '../assets/lion.png'
import eagle from '../assets/eagle.png'



export default function Navbar() {
  return (
    <div className="bg-black fixed w-full top-0 left-0 z-20 border-y-2 border-blue-900">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        <div className="flex items-center">
          <Image
            src={lion}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
         
        </div>
        <div className="flex items-center">
          <button className="text-white text-xl py-2 font-[700] rounded-lg hover:underline hover:decoration-blue-600 transition">
            Khuwaja
          </button>
          <div role="status" className="relative ml-4">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <Image
              src={eagle}
              alt="Spinner Image"
              className="absolute inset-0 w-4 h-4 m-auto"
            />
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}


//<div role="status">
//<svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  //  {/* <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/> */}
  //  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
//</svg>
//<span className="sr-only">Loading...</span>
//</div> 