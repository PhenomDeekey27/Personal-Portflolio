import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Styles from "../Styles/Skill.module.css"
import Html_img from "../assets/html.png"
import Css_img from "../assets/css.png"
import Javascript_img from "../assets/javascript.png"
import React_Img from "../assets/react.png"
import Redux_Img from "../assets/redux.png"
import Firebase_Img from "../assets/firebase.png"




const Skill = () => {
  return (
    <div className={Styles.Skills}>
        <h1>Skills</h1>

        <>

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={Styles.swiper}
       

      >
      
        <SwiperSlide className={Styles.swiper_slide}>
          <div className={Styles.skill_card}>
            <img src={Html_img} alt="html" />
            <h3>HTML</h3>

          </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          <div className={Styles.skill_card}>
            <img src={Css_img} alt="html" />
            <h3>CSS</h3>

          </div>
        </SwiperSlide>
       
        <SwiperSlide className={Styles.swiper_slide}>
          <div className={Styles.skill_card}>
            <img src={Javascript_img} alt="html" />
            <h3>JAVASCRIPT</h3>

          </div>
        </SwiperSlide>
       
        <SwiperSlide className={Styles.swiper_slide}>
          <div className={Styles.skill_card}>
            <img src={React_Img} alt="html" />
            <h3>REACT</h3>

          </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          <div className={Styles.skill_card}>
            <img src={Redux_Img} alt="html" />
            <h3>REDUX</h3>

          </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          <div className={Styles.skill_card}>
            <img src={Firebase_Img} alt="html" />
            <h3>GOOGLE FIREBASE</h3>

          </div>
        </SwiperSlide>
       
       
       
      
      </Swiper>
        
        </>


    

        
    </div>
  )
}

export default Skill