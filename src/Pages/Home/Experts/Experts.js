import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts,setExperts]= useState([]);
    useEffect(()=>{
        fetch('experts.json')
        .then(res=>res.json())
        .then(data=>setExperts(data))
    },[])
    return (
        <div>
            <h2>Our experts</h2>
           <div className="row">
           {
                experts.map(expert=> <Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }
           </div>
            
        </div>
    );
};

export default Experts;