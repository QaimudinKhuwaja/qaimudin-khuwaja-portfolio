import React from 'react'

const Pinpoints = () => {
  return (
    <div className=" p-5">
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">Pin Points</h1>

      {/* Grid Wrapper */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
        {/* Individual Pin Points */}
        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
          <h1 className="text-2xl font-semibold text-yellow-500 mb-2">🚀 Projects</h1>
          <p className="text-lg text-white">100+ projects completed</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
          <h1 className="text-2xl font-semibold text-yellow-500 mb-2">🏆 Hackathons</h1>
          <p className="text-lg text-white">Participated in 3+ hackathons</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
          <h1 className="text-2xl font-semibold text-yellow-500 mb-2">🗣️ Languages</h1>
          <p className="text-lg text-white">English, Urdu</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
          <h1 className="text-2xl font-semibold text-yellow-500 mb-2">🎓 Hobbies</h1>
          <p className="text-lg text-white">Coding, Reading, Writing</p>
        </div>

        <div className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
          <h1 className="text-2xl font-semibold text-yellow-500 mb-2">🙆‍♂️ Age</h1>
          <p className="text-lg text-white">17 years old (9-Mar-2008)</p>
        </div>
      </div>
    </div>
  )
}

export default Pinpoints



{/* <ul role="list">
  {#each people as person}
    <!-- Remove top/bottom padding when first/last child -->
    <li class="flex py-4 first:pt-0 last:pb-0">
      <img class="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
      </div>
    </li>
  {/each}
</ul> */}