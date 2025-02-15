import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className=" p-5">
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">
        Projects
      </h1>

      {/* Grid Container for Projects */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

        {/* Project 1 */}
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://qafix.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Market Place Ecomerce</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          Ecommerce Marketplace Website build during hackathon using next.js framework containing fully frontend functionalities, login system, payment method and several other features.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Hackathon</span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Sanity</span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Next.Js</span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Tailwind CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">TypeScript</span>
          </div>
          </Link>
        </div>
        

        {/* Project 2 */}
      <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
          <Link href="https://governor-sindh-website-five.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Governor Sindh Website</h2>
          
        
          <p className="text-sm text-slate-400 mb-3">
          Governor Sindh Website clone include all pages of official website and also flooow same styling, responsivenes and functionality build using nextjs framework.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
           
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">
              Next.Js
            </span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">
              Tailwindcss
            </span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              HTML
            </span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              CSS
            </span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              TypeScript
            </span>
          </div>
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://dynamic-blog-website-five.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Blog Website</h2>
          
         
          <p className="text-sm text-slate-400 mb-3">
          Blog website build using nextjs include multiple written blogs where can read detailed blog easily and also can pass comment in comment section of blog website.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              Nextjs
            </span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              Tailwindcss
            </span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              HTML
            </span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              CSS
            </span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">
              TypeScript
            </span>
          </div>
          </Link>
        </div>

 
         
        {/* Project 4 */}
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://milestone-3-project-rho.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Watch Website</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          Ecommerce Watch Website build using nextjs framework containing frontend functionalities. It show case the variety, styles and  brands of different watches.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Next.Js</span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Tailwind CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">TypeScript</span>
          </div>
          </Link>
        </div>

         {/* Project 5 */}
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://milestone-2-project-1.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Spider UI Web</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          Spider game website UI build using nextjs framework. Include several pages. It showcase variety of games that play by majority .
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
          </div>
          </Link>
        </div>
        {/* Project 6 */}
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://html-css-portfolio-rosy.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">HTML CSS Portfolio</h2>
          
          
          <p className="text-sm text-slate-400 mb-9">
          Personal Portfolio build using Simple HTML CSS that showcase my own details. My Home section, About section which include my skills, experience and education and contact section that include my contact details to reach me easily.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
          </div>
          </Link>
        </div>
        {/* Project 7 */}
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://milestone-2-project-3.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Nextjs Simple Portfolio</h2>
          
          
          <p className="text-sm text-slate-400 mb-9">
          Personal Portfolio build using nextjs that showcase my own details. My Home section, About section which include my skills, experience and education and contact section that include my contact details to reach me easily.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Next.Js</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">TypeScript</span>
          </div>
          </Link>
        </div>
       {/* Project 8 */}
       <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://milestone-1-project-5.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Resume Builder</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          A dynamic Resume Builder build during a hackathon where user can build multiple resume. User friendly UI with share download and edit features.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">TypeScript</span>
          </div>
          </Link>
        </div>
        {/* Project 9 */}
       <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://todo-app-sage-tau-29.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Todo App</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          Todo app build using nextjs . We can add multiple task in todo list and also can delete them according wish
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Next.Js</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">TypeScript</span>
          </div>
          </Link> 
        </div>
          {/* Project 10 */}
       <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://ecommerce-website-milestone3.vercel.app">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Ecomerce Watch</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          Ecommerce Watch Website build using nextjs framework containing frontend functionalities. It show case the variety, styles and  brands of different watches.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Hackathon</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">TypeScript</span>
          </div>
          </Link> 
        </div>
           {/* Project 11 */}
       <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://milestone-2-project-1-xygl.vercel.app/">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Game UI</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          Game website UI build using nextjs framework. Include several pages. It showcase variety of games that play by majority .
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
          </div>
          </Link> 
        </div>
            {/* Project 12 */}
       <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between ">
          <Link href="https://marketplace-hackathon3-zeta.vercel.app">
            <h2 className="text-2xl font-semibold text-white mb-2 cursor-pointer hover:text-yellow-300">Market Place Ecomerce</h2>
          
          
          <p className="text-sm text-slate-400 mb-3">
          Ecommerce Marketplace Website build during hackathon using next.js framework containing fully frontend functionalities, login system, payment method and several other features.
          </p>

          {/* Flex container for tags with gap */}
          <div className="flex flex-wrap gap-1 mt-auto">
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Hackathon</span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Sanity</span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Next.Js</span>
            <span className="bg-slate-700 text-white py-1 px-1 rounded-md text-xs">Tailwind CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">HTML</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">CSS</span>
            <span className="bg-slate-700 text-white py-1 px-2 rounded-md text-xs">TypeScript</span>
          </div>
          </Link> 
        </div>


      </div>
    </div>
  );
};

export default Projects;