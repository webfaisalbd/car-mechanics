import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data.filter(d=>d.price>100)));
    }, [])

    return (
        
        <div>
            <h2>Services</h2>
            <div className="services-container">
            {
                    services.slice(0,3).map(service => <Service
                         key={service.id}
                         service={service}
                         ></Service>)
                }
        </div>
        </div>
    );
};

export default Services;