import React, {useState} from 'react';
import './style.css'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

const Box = (props) => {
  const [isToggleOn, setIsToggleOn] = useState();

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  }
  
  return (
    <Col>
      <div className="box-main-container">
        <div className="box-number-container">
          <p className="box-number">{props.data.number}</p>
        </div>
        <div className={isToggleOn ? "is-flipped card" : "card"} onClick={handleClick}>
          <Image rounded className="box-image card__face card__face--front" src={props.data.img} alt={`Adventní okénko číslo ${props.data.number}` }/>
          <div class="card__face card__face--back">
          <div className="box-text">
        <p>{props.data.text}</p>
        </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Box;

