import React from 'react'
import "../Styles/About.css"
import About_img from "../assets/About-img-4.png"

const About = () => {
  return (
    <div className='about-sec' id='About'>
      <div className="text-div">
      <h1>About me</h1>
        <p>I am a Frontend developer, I build frontend Websites, I will solve all your business problems. I am open to freelance work.</p>
        <p>I am a specialized Frontend developer, your go-to solution for crafting frontend websites. With a passion for problem-solving and innovation, I excel in creating seamless digital experiences tailored to your business needs.</p>
        <p>Specializing in React.js,Javascript,HTML,CSS .I leverage the power of the Frontend to deliver robust and dynamic solutions that exceed expectations. Whether you need a sleek website or a feature-rich fully fledged Website, I have the skills to bring your vision to life.</p>
        <p>My commitment to clean, efficient code ensures easy maintenance and scalability, while my understanding of business challenges enables me to develop custom solutions that address your specific needs.</p>

      </div>
      <div>
      <img src={About_img} alt="" />


      </div>
      

    </div>
  )
}

export default About