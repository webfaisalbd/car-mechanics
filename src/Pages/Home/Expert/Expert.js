import React from 'react';

const Expert = ({expert}) => {
const {id,name,img,expertize} =expert;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: '22rem' }}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{expertize}</p>
            <a href="#" className="btn btn-primary">More info</a>
            </div>
        </div>
        </div>
    );
};

export default Expert;