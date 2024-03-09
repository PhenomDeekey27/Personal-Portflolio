import React from 'react'
import "../Styles/Project.css"
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from 'swiper/modules';
import '../Styles/PorjectSwiper.css'
import Html_img from "../assets/html.png"
import Css_img from "../assets/css.png"
import Javascript_img from "../assets/javascript.png"
import React_Img from "../assets/react.png"
import Redux_Img from "../assets/redux.png"
import Firebase_Img from "../assets/firebase.png"

const ProjectSection = () => {
  return (
    <div className='project'> 
        <h1>My Projects</h1>
        <div className="projectswipercontainer">

        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide onClick={()=>window.open("https://shopping-site-beta-rouge.vercel.app","_blank")}>
        
        <div className="project-card">

              <h6>CARA-SHOPPING WEBSITE</h6>
         <div className="pro-skills">
              <div className='pro-stack'>
                <img src={Html_img} alt="" />
                <p>HTML</p>
              </div>
              <div className='pro-stack'>
                <img src={Css_img} alt="" />
                <p>CSS</p>
              </div>
              <div className='pro-stack'>
                <img src={Javascript_img} alt="" />
                <p>JavaScript</p>
              </div>
                

          </div>
             
              
        </div>
         
         
        </SwiperSlide>
        <SwiperSlide  onClick={()=>window.open("https://podcast-platform-ten.vercel.app","_blank")} >
      <div className="project-card">
          <h6>PODCAST PLATFORM</h6>
          <div className="pro-skills">
              <div className='pro-stack'>
                <img src={Html_img} alt="" />
                <p>HTML</p>
              </div>
              <div className='pro-stack'>
                <img src={Css_img} alt="" />
                <p>CSS</p>
              </div>
              <div className='pro-stack'>
                <img src={Javascript_img} alt="" />
                <p>JavaScript</p>
              </div>
              <div className='pro-stack'>
                <img src={React_Img} alt="" />
                <p>React</p>
              </div>
              <div className='pro-stack'>
                <img src={Redux_Img} alt="" />
                <p>Redux</p>
              </div>
              <div className='pro-stack'>
                <img src={Firebase_Img} alt="" />
                <p>Firebase</p>
              </div>
                

          </div>
              
        </div>
         
        </SwiperSlide>
        <SwiperSlide  onClick={()=>window.open("https://financely-teal.vercel.app","_blank")} >
          <div className="project-card">
          <h3>FINANCELY</h3>

          <div className="pro-skills">
              <div className='pro-stack'>
                <img src={Html_img} alt="" />
                <p>HTML</p>
              </div>
              <div className='pro-stack'>
                <img src={Css_img} alt="" />
                <p>CSS</p>
              </div>
              <div className='pro-stack'>
                <img src={Javascript_img} alt="" />
                <p>JavaScript</p>
              </div>
              <div className='pro-stack'>
                <img src={React_Img} alt="" />
                <p>React</p>
              </div>
              <div className='pro-stack'>
                <img src={Redux_Img} alt="" />
                <p>Redux</p>
              </div>
              <div className='pro-stack'>
                <img src={Firebase_Img} alt="" />
                <p>Firebase</p>
              </div>
                

          </div>
             
          </div>
         
        </SwiperSlide>
       
      </Swiper>

        </div>

    </div>
  )
}

export default ProjectSection