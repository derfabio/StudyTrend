import React from 'react'
import './footer.css';
import './footer.scss';
import video1 from '../../Assets/video1.mp4' 

const Footer = () => {
  return (
    <section className= "footer">
    <div className='videoDiv'>
    <video src={video1}  muted autoPlay loop type="video1.mp4"></video>
    </div>

    <div className='secContent container'>
      <div className='contentDiv flex'>
        <div className='text'>
          <small>KEEP IN TOUCH</small>
          <h2>Learn with us!</h2>
        </div>
      </div>
    </div>
      </section>
  )
}

export default Footer