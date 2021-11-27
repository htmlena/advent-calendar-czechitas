import './App.css';
import React, { useState } from 'react';
import { adventBoxes } from './adventBoxes';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
    <Row>
      {adventBoxes.map((adventBox) => {
        return <Box data={adventBox} key={adventBox.number} />;
      })}
      </Row>
      </Container>
    </>
  );
}

export default App;
