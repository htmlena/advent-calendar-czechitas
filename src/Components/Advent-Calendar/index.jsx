import React from 'react';

const Box = (props) => {
  return (
    <>
      <p>
        {props.data.number} {props.data.img} {props.data.text}
      </p>
    </>
  );
};

export default Box;
