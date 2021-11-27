import React from 'react';

const Box = (props) => {
  return (
    <>
      <p>
        {props.data.number}{props.data.text}
      </p>
      <img src={props.data.img} alt={`Adventní okénko číslo ${props.data.number}` }></img>
    </>
  );
};

export default Box;
