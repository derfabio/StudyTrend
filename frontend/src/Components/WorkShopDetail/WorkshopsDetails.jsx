import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import moment from "moment";
import { MdDateRange } from 'react-icons/md';
import './workshopdetails.scss'
import img1 from '../../Assets/img1.jpeg'

function WorkshopsDetails() {
    const navigate = useNavigate();

    function addToCartButton() {
        navigate('usercart');
    }
    const { id } = useParams();
    const [data, setData] = useState(null);

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const fetchWorkshops = () => {
        fetch(`http://localhost:8080/api/workshops/` + id)
            .then((response) => response.json())
            .then(dataWorkshop => {
                setData(dataWorkshop)
            });

    }

    useEffect(() => {
        fetchWorkshops();
    }, []);

    if (data) {
        return (
            <div className='container-detailsWorkshop'>

                <div className='left-column img'>
                
                <img src={img1} />  
                <button className='btn' onClick={() => addToCartButton()}> Add to cart</button>
                </div>

                <div className="right-column">
                    <div className="card">

                        <div className="title">
                            <h4 className='title'>
                                {data.title}
                            </h4>
                        </div>

                        <span className='date flex'>
                            <MdDateRange className="icon" />
                            <span className='date-workshop'>{moment(data.date).format("DD/MM/YYYY/HH:MM")}</span>
                        </span>

                        <div className='price'>
                            <h5>Price : {data.price} $</h5>
                        </div>

                        <div className="workshop-descriprion">
                            {/* <p>{data.description}</p> */}
                            {data.description.length < 350 ? (<div className="workshop-descriprion">{data.description}</div>) :

                                (isReadMore ?
                                    <div className="workshop-descriprion"> {data.description.slice(0, 350)}
                                        <span onClick={toggleReadMore} className="read-or-hide">
                                            <a className="show-hide-text">...read more</a>
                                        </span></div>

                                    :

                                    <div className="workshop-descriprion"> {data.description}
                                        <span onClick={toggleReadMore} className="read-or-hide">
                                            <a className="show-hide-text">Show less..</a>
                                        </span></div>
                                )}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <p>Loading..</p>
        )
    }
}


export default WorkshopsDetails