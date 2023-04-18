import React, { useState, useEffect } from "react";
import '../Main/main.scss'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import{MdDateRange} from 'react-icons/md'
import moment from "moment";

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

            {/* <div className='imageDiv'>
              <img src={imgSrc} alt={titleWorkshop} />
              </div> */}

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
    )
}

export default Workshops;