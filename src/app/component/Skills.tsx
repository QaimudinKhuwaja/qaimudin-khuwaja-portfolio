import React from 'react'

const Skills = () => {
  return (
    <div className=" p-1">
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">Skills</h1>

      {/* Wrapper Box for All Skills */}
      <div className="max-w-6xl mx-auto bg-neutral-800 rounded-xl shadow-xl p-10">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Individual Skill Boxes */}
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            HTML/CSS
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            JavaScript
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            TypeScript
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            React.js
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            Next.js
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            Tailwind CSS
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            Sanity
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-2 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            API Integration
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-6 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            Frontend Development
          </span>
          <span className="bg-slate-700 text-white font-medium py-2 px-6 rounded-md border-2 border-transparent hover:border-yellow-500 transition-all">
            Web Development
          </span>
        </div>
      </div>
    </div>
  )
}

export default Skills