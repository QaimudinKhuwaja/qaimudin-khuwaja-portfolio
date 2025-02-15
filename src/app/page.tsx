import React from 'react'
import Hero from './component/Hero'
import Pinpoints from './component/Pinpoints'
import Projects from './component/Projects'
import Skills from './component/Skills'
import CrousalProjects from './component/CrousalProjects'
import Footer from './component/Footer'
import About from './component/About'



const page = () => {
  return (
    
    <div className='place-items-center'>
      
      <Hero/>
      <CrousalProjects/>
      <About/>
      <Skills/>
      <Projects/>
      <Pinpoints/>
      <Footer/>
      

            
    </div> 
    
  )
}

export default page