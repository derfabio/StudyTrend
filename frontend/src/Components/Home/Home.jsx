import React, {useEffect} from 'react'
import './home.scss';
import video from '../../Assets/video.mp4';
import {BiSearchAlt2} from 'react-icons/bi';
import {FaFacebook} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {VscTwitter} from 'react-icons/vsc';

import Aos from 'aos';
import 'aos/dist/aos.css' 

const Home = () => {

  useEffect(() => {
      Aos.init({duration: 2000})
  }, [])

  return (
    
    <section className= "home">
      <div className='overlay'></div>
      <video src={video}  muted autoPlay loop type="video.mp4"></video>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos="fade-up" 
          className='smallText'>
            OUR WORKSHOPS FOR YOU
          </span>
          
          <h1 data-aos="fade-up" 
          className='homeTitle'>
          “Live as if you were to die tomorrow. Learn as if you were to live forever.”
          </h1>
          
          <h4 data-aos="fade-up" className='smallText1'>
          "Mahatma Gandhi"
          </h4>
          
        </div>

        <div data-aos="fade-up" className='cardDiv grid'>

          <div className='workshopInput'>
            <label htmlFor='workshop'>Search workshop:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter your
              workshop...'/>
              <BiSearchAlt2 className="icon"/>
              </div>
          </div>

          <div className='categoriesInput'>
            <label>Categories</label>
          <div className='input flex'>
          <select className="selector flex">
            
            <option value="All">All Categories</option>
            <option value="Cooking">Cooking</option>
            <option value="JavaScript">JavaScript</option>
            <option value="How to drink">How to drink</option>
            
            </select>
            </div> 

           
          </div>

          <div className='dateInput'>
            <label htmlFor="date"> Select your date:</label>
            <div className='input flex'>
              <input type="date" />
            </div>
          </div>

          <div className='priceInput'>
            <div className='label_total flex'>
              <label html="price"> Max price:</label>
              <h3 className='total'>2000$</h3>
              </div>
              <div className='input flex'>              
              <input type="range" max="2000" min="100"/>
              </div>
         
          </div>
        </div>

        <div data-aos="fade-up" className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FaFacebook className="icon"/>
            <BsInstagram className="icon"/>
            <VscTwitter className="icon"/>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Home
 