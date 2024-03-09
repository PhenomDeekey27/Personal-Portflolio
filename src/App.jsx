import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import Portfoliosection from './Components/Portfoliosection'
import About from './Components/About'
import ProjectSection from './Components/ProjectSection'
import Footer from './Components/Footer'
import Social from './Components/Social'
import Skill from './Components/Skill'

const App = () => {
  const Homeref=useRef(null)
  
  const AboutRef=useRef(null)
  const ProjectRef=useRef(null)
  const FooterRef=useRef(null)
  const SocialRef=useRef(null)
  return (
    <div>
      <Navbar
      Homeref={Homeref}
      SocialRef={SocialRef}
      AboutRef={AboutRef}  
      ProjectRef={ProjectRef}  
      FooterRef={FooterRef}      

      ></Navbar>
      <div ref={Homeref} id='Home-section'>
      <Portfoliosection></Portfoliosection>

      </div>

      <div ref={AboutRef}>
      <About></About>

      </div>
      <div ref={ProjectRef}>
      <ProjectSection></ProjectSection>


      </div>

      <div>
        <Skill></Skill>
      </div>

      <div ref={SocialRef}>
      <Footer/>

      </div>
    
    
     
     
      <Social/>
  
    </div>
  )
}

export default App