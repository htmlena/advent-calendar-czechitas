import React from 'react';
import Image from 'react-bootstrap/Image'

const Box = (props) => {
  return (
    <>
      <p>
        {props.data.number}{props.data.text}
      </p>
      <Image rounded src={props.data.img} alt={`Adventní okénko číslo ${props.data.number}` }/>
    </>
  );
};

export default Box;
