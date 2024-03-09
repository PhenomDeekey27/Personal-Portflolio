import React from 'react'
import "../Styles/social.css"
import { SocialIcon } from 'react-social-icons'

const Social = () => {
  return (
    <div className='social'>
      <div className="social-card" onClick={()=>window.open("https://www.instagram.com/phenomdeekey27/?hl=en", "_blank")}>
        <SocialIcon url='https://instagram.com' style={{height:40,width:40}}></SocialIcon>
        <p>@phenomdeekey27</p>
      </div>

      <div className="social-card"
        onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox/QgrcJHrtqfxqJwDMHwDhdvkmDsnvzJSPNCg', '_blank')}
      >
        <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }} />
        <p>krangan415@gmail.com</p>
      </div>

      <div className="social-card"
        onClick={() => window.open('https://www.linkedin.com/in/kasthuri-rangan-94b479b0/', '_blank')}
      >
        <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }} />
        <p>Kasthuri Rangan</p>
      </div>



    </div>
  )
}

export default Social