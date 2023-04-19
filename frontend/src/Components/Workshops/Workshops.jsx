import React, { useState, useEffect } from "react";
import '../Main/main.scss'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import{MdDateRange} from 'react-icons/md'
import moment from "moment";
import { Link } from "react-router-dom";
import img1 from '../../Assets/img1.jpeg'

function Workshops() {

    const url = 'http://localhost:8080/api/workshops/all'
    const [data, setData] = useState([]);

    const fetchWorkshopData = async () => {
        const res = await fetch(url);
      const d = await res.json();
      setData(d);
        
    }
   
    

    useEffect(() => {
        fetchWorkshopData();
    }, []);
    
    return (
        <div className='secContent grid'>
      {
        data.map(({id, title, date, price, description}) => {
           return(
            <div key={id} className="singleWorkshop">

            <div className='imageDiv'>
              <img src={img1} alt={title} />
              </div>

              <div className='cardInfo'>
                <h4 className='titleWorkshop'>
                  {title}
                </h4>
              
              <span className='date flex'>
                  <MdDateRange className="icon" />
                  <span className='dateWorkshop'>{moment(date).format("DD/MM/YYYY/HH:MM")}</span>
                </span>
                

                 <div className='price'>
                <h5>Price : {price} $</h5>
                </div>

                  <div className="desc">
                    <p>{description.length > 250 ?
                      `${description.substring(0, 100)}...` : description}</p>
                  </div>

                  <Link  to={"/detailsworkshop/" + id}>
                  <button className='btn flex' > DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button> 
                  </Link>
                </div>
            </div>
           )
        }
      )}

     </div>
    )
}

export default Workshops;