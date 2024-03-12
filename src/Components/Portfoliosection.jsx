import React from 'react'
import "../Styles/Portfolio.css"
import Main_img from "../assets/Main_img.png"
import Smoke_Video from "../assets/C_Video-2.mp4"

const Portfoliosection = () => {
  return (
    <div className='portfolio'>

      <div className="sub-text">
        <div className="left">
          <div className="about">
            <p>Hi, I am <span>Kasthuri Rangan</span></p>
            <p>I have Built Fully Functional Websites using Frontend Technologies.</p>
              <p>I am ready to do Freelance Work</p>
          </div>
        </div>
        {/* <div className="sub-right">
          <div className="stat">
            <h1>10+</h1>
            <p>Happy <br /> Clients</p>
          </div>
          <div className="stat">
            <h1>1+</h1>
            <p>Years of <br />Experience</p>
          </div>
        </div> */}

      </div>
      <img src={Main_img} alt="main-img" className='Main-img'/>
      <div className="main-text">
        <p>I am a</p>
        <h1><span>&nbsp;</span>FRONTEND</h1>
        <h2>Developer</h2>

      </div>
      <video src={Smoke_Video} autoPlay loop muted className='Smoke-video'></video>



    </div>
  )
}

export default Portfoliosection