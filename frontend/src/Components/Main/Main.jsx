import React from 'react'
import './main.css';
import './main.scss';
import img from '../../Assets/img.jpeg'
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import{MdDateRange} from 'react-icons/md'
 
const Data = [
  {
    id:1,
    imgSrc: img,
    titleWorkshop: "Become a leader",
    price: "400$",
    date : "12.02.2023",
    description: "fascism sn [At: SAHIA, U.R.S.S. 165 / E: fr fascisme, it fascismo] 1 Sistem politic caracterizat prin naționalism, totalitarism, militarism și, pe plan economic, prin corporatism și respect al funcționării capitaliste, instaurat în Italia în 1922 de Mussolini și partizanii săi. 2 Ideologie vizând instaurarea unui regim fascist (1). "
  },

  {
    id:2,
    imgSrc: img1,
    title: "Become a leader",
    price: "400$",
    date : "12.02.2023",
    description: "fascism sn [At: SAHIA, U.R.S.S. 165 / E: fr fascisme, it fascismo] 1 Sistem politic caracterizat prin naționalism, totalitarism, militarism și, pe plan economic, prin corporatism și respect al funcționării capitaliste, instaurat în Italia în 1922 de Mussolini și partizanii săi. 2 Ideologie vizând instaurarea unui regim fascist (1). "
  },

  {
    id:3,
    imgSrc: img2,
    title: "Become a leader",
    price: "400$",
    date : "12.02.2023",
    description: "fascism sn [At: SAHIA, U.R.S.S. 165 / E: fr fascisme, it fascismo] 1 Sistem politic caracterizat prin naționalism, totalitarism, militarism și, pe plan economic, prin corporatism și respect al funcționării capitaliste, instaurat în Italia în 1922 de Mussolini și partizanii săi. 2 Ideologie vizând instaurarea unui regim fascist (1). "
  },

  {
    id:4,
    imgSrc: img3,
    title: "Become a leader",
    price: "400$",
    date : "12.02.2023",
    description: "fascism sn [At: SAHIA, U.R.S.S. 165 / E: fr fascisme, it fascismo] 1 Sistem politic caracterizat prin naționalism, totalitarism, militarism și, pe plan economic, prin corporatism și respect al funcționării capitaliste, instaurat în Italia în 1922 de Mussolini și partizanii săi. 2 Ideologie vizând instaurarea unui regim fascist (1). "
  },

  {
    id:5,
    imgSrc: img4,
    title: "Become a leader",
    price: "400$",
    date : "12.02.2023",
    description: "fascism sn [At: SAHIA, U.R.S.S. 165 / E: fr fascisme, it fascismo] 1 Sistem politic caracterizat prin naționalism, totalitarism, militarism și, pe plan economic, prin corporatism și respect al funcționării capitaliste, instaurat în Italia în 1922 de Mussolini și partizanii săi. 2 Ideologie vizând instaurarea unui regim fascist (1). "
  },

  {
    id:6,
    imgSrc: img5,
    title: "Become a leader",
    price: "400$",
    date : "12.02.2023",
    description: "fascism sn [At: SAHIA, U.R.S.S. 165 / E: fr fascisme, it fascismo] 1 Sistem politic caracterizat prin naționalism, totalitarism, militarism și, pe plan economic, prin corporatism și respect al funcționării capitaliste, instaurat în Italia în 1922 de Mussolini și partizanii săi. 2 Ideologie vizând instaurarea unui regim fascist (1). "
  },

  {
    id:7,
    imgSrc: img6,
    title: "Become a leader",
    price: "400$",
    date : "12.02.2023",
    description: "fascism sn [At: SAHIA, U.R.S.S. 165 / E: fr fascisme, it fascismo] 1 Sistem politic caracterizat prin naționalism, totalitarism, militarism și, pe plan economic, prin corporatism și respect al funcționării capitaliste, instaurat în Italia în 1922 de Mussolini și partizanii săi. 2 Ideologie vizând instaurarea unui regim fascist (1). "
  },
]


const Main = () => {
  return (
   <section className='main container section'>

    <div className='secTitle'>
      <h3 className='title'>  Workshops </h3>
     </div>

     <div className='secContent grid'>

      {
        Data.map(({id, imgSrc, titleWorkshop, price, date, description}) => {
           return(
            <div key={id} className="singleWorkshop">

            <div className='imageDiv'>
              <img src={imgSrc} alt={titleWorkshop} />
              </div>

              <div className='cardInfo'>
                <h4 className='titleWorkshop'>
                  {titleWorkshop}
                </h4>
              
              <span className='date flex'>
                  <MdDateRange className="icon" />
                  <span className='dateWorkshop'>{date}</span>
                </span>

                <div className='price'>
                  <h5>Price : {price}</h5>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
            </div>
           )
        }
      )}

     </div>
   </section>
  )
}
 

export default Main
