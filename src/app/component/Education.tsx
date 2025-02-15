import React from 'react'

const Education = () => {
  return (
    <div className=" py-10">
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">Education</h1>

      {/* First Education Item */}
      <div className="max-w-4xl mx-auto bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">GIAIC (Governor Sindh Initiative for Artificial Intelligence Courses)</h1>
          <h2 className="text-md font-medium text-slate-400">2024 - Present</h2>
        </div>
        <p className="text-lg font-light text-slate-300 mt-2">Cloud Native Applied Generative AI and Agentic AI</p>
      </div>

      {/* Second Education Item */}
      <div className="max-w-4xl mx-auto bg-neutral-800 rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Government Girls Degree College</h1>
          <h2 className="text-md font-medium text-slate-400">2024 - Present</h2>
        </div>
        <p className="text-lg font-light text-slate-300 mt-2">Intermediate in Pre-engineering</p>
      </div>
    </div>
  )
}

export default Education