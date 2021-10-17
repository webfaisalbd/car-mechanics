import React from 'react';
import "./Service.css"

const Service = ({service}) => {
    // const {name,price}= props.service;
    const {name, price,description,img}= service;
    return (
        <div className="service-container">
            
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h6>{price}$</h6>
            <p>{description}</p>

        </div>
    );
};

export default Service;