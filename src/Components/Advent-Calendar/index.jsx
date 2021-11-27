import React from 'react';
import './style.css'
import Image from 'react-bootstrap/Image'

import Col from 'react-bootstrap/Col'

const Box = (props) => {
  return (
    <>

        <Col md={2}>
      <p>
        {props.data.number}{props.data.text}
      </p>
      <Image rounded className="box" src={props.data.img} alt={`Adventní okénko číslo ${props.data.number}` }/>
      </Col>
    </>
  );
};

export default Box;
