import './App.css';
import React from 'react';
import { adventBoxes } from './adventBoxes';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Box from './Components/Advent-Calendar';

function App() {
  return (
    <>
        <Container fluid>
    <Row>
      {adventBoxes.map((adventBox) => {
        return <Box data={adventBox} key={adventBox.number} />;
      })};
      </Row>
      </Container>
    </>
  );
}

export default App;
