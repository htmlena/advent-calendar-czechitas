import React, { useState } from 'react';
import './style.css';
import Image from 'react-bootstrap/Image';

const Box = (props) => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    const currentDate = new Date();
    const currentDay = `${currentDate.getDay()}`;
    if (props.data.number === currentDay) {
      setIsOpen(!isOpen);
    } else return console.log('hi');
  };

  return (
    <div className="box-main-container">
      <div className="box-number-container">
        <p className="box-number">{props.data.number}</p>
      </div>
      <div
        className={isOpen ? 'is-flipped card' : 'card'}
        onClick={handleClick}
      >
        <Image
          rounded
          className="box-image card__face card__face--front"
          src={props.data.img}
          alt={`Adventní okénko číslo ${props.data.number}`}
        />
        <div className="card__face card__face--back">
          <div className="box-text">
            <p className="text">{props.data.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
