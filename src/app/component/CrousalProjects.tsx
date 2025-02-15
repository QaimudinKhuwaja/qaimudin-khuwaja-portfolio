// "use client"
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const images = [
//   '/images/bg.jpeg',
//   '/images/bg1.jpeg',
//   '/images/bg.jpeg',
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Effect to automatically change the image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
//       <div
//         className="flex transition-transform duration-500"
//         style={{
//           transform: translateX(-${currentIndex * 100}%),
//         }}
//       >
//         {images.map((src, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <Image
//               src={src}
//               alt={Carousel Image ${index + 1}}
//               width={1200}
//               height={600}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Optional: Add navigation dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;


 


"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  { src: '/images/project1.PNG', link: 'https://milestone-3-project-rho.vercel.app/' },
  { src: '/images/project2.PNG', link: 'https://dynamic-blog-website-five.vercel.app/' },
  { src: '/images/project3.PNG', link: 'https://governor-sindh-website-five.vercel.app/' },
  { src: '/images/project4.PNG', link: 'https://qafix.vercel.app/' },
  { src: '/images/project5.PNG', link: 'https://milestone-2-project-1.vercel.app/' },
  { src: '/images/project6.PNG', link: 'https://html-css-portfolio-rosy.vercel.app/' },
  { src: '/images/project7.PNG', link: 'https://milestone-2-project-3.vercel.app/' },
  { src: '/images/project8.png', link: 'https://ecommerce-website-milestone3.vercel.app' },
  { src: '/images/project9.png', link: 'https://milestone-2-project-1-xygl.vercel.app/' },
  { src: '/images/project10.png', link: 'https://marketplace-hackathon3-zeta.vercel.app' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to handle next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <> 
    <div className='place-items-center'>
    <div className="place-items-center p-1">
        <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">My Projects</h1>
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg">

          {/* Previous Button */}
          <button onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-900 group-hover:bg-gray-900 dark:group-hover:bg-gray-900 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          {/* Image Carousel */}
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={image.src}
                    alt={`Carousel Image ${index + 1}`}
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button onClick={handleNext} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-900 group-hover:bg-gray-900 dark:group-hover:bg-gray-900 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>

          {/* Optional: Add navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Carousel;

//  <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">My Projects</h1> 
// <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">

 

//   <button onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
//         </svg>
//         <span className="sr-only">Previous</span>
//     </span>
// </button>


//   <div
//     className="flex transition-transform duration-300"
//     style={{
//       transform: `translateX(-${currentIndex * 100}%)`,
//     }}
//   >
//     {images.map((image, index) => (
//       <div key={index} className="w-full flex-shrink-0">
//         {/* Wrap each image with a link */}
//         <Link href={image.link} target="_blank" rel="noopener noreferrer">
//           <Image
//             src={image.src}
//             alt={`Carousel Image ${index + 1}`}
//             width={1200}
//             height={600}
//             className="w-full h-full object-cover"
//           />
//         </Link>
//       </div>
//     ))}
//   </div>

 

//   <button onClick={handleNext} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
//     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//         </svg>
//         <span className="sr-only">Next</span>
//     </span>
// </button>

 
//   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//     {images.map((_, index) => (
//       <span
//         key={index}
//         className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
//       />
//     ))}
//   </div>
// </div> 

// function handlePrev(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
//   throw new Error('Function not implemented.');
// }
