import React from 'react'
import "../Styles/Navbar.css"
import logo from "../assets/krlogo.jpg"
import { useState } from 'react'

const Navbar = ({Homeref,AboutRef,SocialRef,ProjectRef,FooterRef}) => {
  const [navactive, setnavactive] = useState(false)
  const handleNavClick=()=>{
    setnavactive(!navactive)

  }

  const handleButtonClick = (section) => {
    console.log(section)

    if (section === 'home' && Homeref.current) {
        Homeref.current.scrollIntoView({ behavior: 'smooth' });

    }
    else if (section === 'about' && AboutRef.current) {
        AboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && ProjectRef.current) {
        ProjectRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
   
    else if (section === 'contact' && SocialRef.current) {
        SocialRef.current.scrollIntoView({ behavior: 'smooth' });
    } 

}
  return (
    <div className='navbar'>

        <div className="nav-left">
            {/* <img src={logo} alt="" className='logo'/> */}
            <h2>𝐾𝑎𝑠𝑡ℎ𝑢𝑟𝑖 𝑅𝑎𝑛𝑔𝑎𝑛</h2>
        </div>

          <div className={navactive ? "navbar-toggler navactive": "navbar-toggler"} onClick={handleNavClick}>
            <span></span>
            <span></span>
            <span></span>
  
          </div>

        <div className="right">
          <button onClick={() => handleButtonClick('home')}>Home</button>
          <button onClick={() => handleButtonClick('about')}>About</button>
          <button onClick={() => handleButtonClick('projects')}>Projects</button>
          <button onClick={() => handleButtonClick('contact')}>Contact</button>
        </div>

      { navactive &&  <div className="mob-right">
      <button onClick={() => handleButtonClick('home')}>Home</button>
          <button onClick={() => handleButtonClick('about')}>About</button>
          <button onClick={() => handleButtonClick('projects')}>Projects</button>
          <button onClick={() => handleButtonClick('contact')}>Contact</button>
        </div>
      }

    </div>
  )
}

export default Navbar