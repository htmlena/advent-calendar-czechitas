import './App.css';
import React, { useState } from 'react';
import { adventBoxes } from './adventBoxes';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Box from './Components/Advent-Calendar';
import ActualDate from './Components/ActualDate';

function App() {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    return setIsOpen(isOpen);
  };

  return (
    <>
    <h1>Adventní kalendář - Elf on the Shelf</h1>
          <ActualDate />
          <Container fluid>

    <Row className="row-margin" key={0}>
    <Col  key={0}><Box data={adventBoxes[0]}></Box> </Col>
    <Col   key={1}><Box data={adventBoxes[1]}></Box> </Col>
    <Col   key={2}><Box data={adventBoxes[2]}></Box>  </Col>
    <Col   key={3}><Box data={adventBoxes[3]}></Box>  </Col>
    <Col    key={4}><Box data={adventBoxes[4]}></Box>  </Col>
    <Col   key={5}><Box data={adventBoxes[5]}></Box>  </Col>
    </Row>
   
    <Row className="row-margin" key={1}>

    <Col key={6}><Box data={adventBoxes[6]}></Box> </Col>
    <Col key={7}><Box data={adventBoxes[7]}></Box> </Col>
    <Col key={8}><Box data={adventBoxes[8]}></Box>  </Col>
    <Col key={9}><Box data={adventBoxes[9]}></Box>  </Col>
    <Col key={10}><Box data={adventBoxes[10]}></Box>  </Col>
    <Col key={11}><Box data={adventBoxes[11]}></Box>  </Col>
    </Row>

    <Row className="row-margin" key={2}>

    <Col key={12}><Box data={adventBoxes[12]}></Box> </Col>
    <Col key={13}><Box data={adventBoxes[13]}></Box> </Col>
    <Col key={14}><Box data={adventBoxes[14]}></Box>  </Col>
    <Col key={15}><Box data={adventBoxes[15]}></Box>  </Col>
    <Col key={16}><Box data={adventBoxes[16]}></Box>  </Col>
    <Col key={17}><Box data={adventBoxes[17]}></Box>  </Col>
    </Row>

    <Row className="row-margin"  key={3}>
    <Col key={18}><Box data={adventBoxes[18]}></Box> </Col>
    <Col key={19}><Box data={adventBoxes[19]}></Box> </Col>
    <Col key={20}><Box data={adventBoxes[20]}></Box>  </Col>
    <Col key={21}><Box data={adventBoxes[21]}></Box>  </Col>
    <Col key={22}><Box data={adventBoxes[22]}></Box>  </Col>
    <Col key={23}><Box data={adventBoxes[23]}></Box>  </Col>
    </Row>
  
      </Container>
       
 </>
  );
}

export default App;
