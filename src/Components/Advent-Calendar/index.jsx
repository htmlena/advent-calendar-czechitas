import React from 'react';
import './style.css'
import Image from 'react-bootstrap/Image'

const Box = (props) => {
  return (
    <div className="box-main-container">
      <div>
        <p>{props.data.number}</p>
      </div>
      <div>
       <p>{props.data.text}</p>
      </div>
      <Image rounded className="box-image" src={props.data.img} alt={`Adventní okénko číslo ${props.data.number}` }/>
    </div>
  );
};

export default Box;
