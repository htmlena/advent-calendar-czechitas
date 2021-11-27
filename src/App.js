import './App.css';
import React from 'react';
import { adventBoxes } from './adventBoxes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from './Components/Advent-Calendar';
import ActualDate from './Components/ActualDate';
import Countdown from './Components/Countdown';

function App() {
  return (
    <>
      <h1>Adventní kalendář - Elf on the Shelf</h1>
      <Countdown />
      <ActualDate />
      <Container fluid>
        <Row sm={2} xs={10} md={6} className="row-margin"  key={0}>
          <Col key={0}>
            <Box data={adventBoxes[0]}/>
          </Col>
          <Col key={1}>
            <Box data={adventBoxes[1]}/>
          </Col>
          <Col key={2}>
            <Box data={adventBoxes[2]}/>
          </Col>
          <Col key={3}>
            <Box data={adventBoxes[3]}/>
          </Col>
          <Col key={4}>
            <Box data={adventBoxes[4]}/>
          </Col>
          <Col key={5}>
            <Box data={adventBoxes[5]}/>
          </Col>
        </Row>

        <Row sm={2} xs={10} md={6} className="row-margin"  key={1}>
          <Col key={6}>
            <Box data={adventBoxes[6]}/>
          </Col>
          <Col key={7}>
            <Box data={adventBoxes[7]}/>
          </Col>
          <Col key={8}>
            <Box data={adventBoxes[8]}/>
          </Col>
          <Col key={9}>
            <Box data={adventBoxes[9]}/>
          </Col>
          <Col key={10}>
            <Box data={adventBoxes[10]}/>
          </Col>
          <Col key={11}>
            <Box data={adventBoxes[11]}/>
          </Col>
        </Row>

        <Row sm={2} xs={10} md={6} className="row-margin"  key={2}>
          <Col key={12}>
            <Box data={adventBoxes[12]}/>
          </Col>
          <Col key={13}>
            <Box data={adventBoxes[13]}/>
          </Col>
          <Col key={14}>
            <Box data={adventBoxes[14]}/>
          </Col>
          <Col key={15}>
            <Box data={adventBoxes[15]}/>
          </Col>
          <Col key={16}>
            <Box data={adventBoxes[16]}/>
          </Col>
          <Col key={17}>
            <Box data={adventBoxes[17]}/>
          </Col>
        </Row>

        <Row sm={2} xs={10} md={6} className="row-margin"  key={3}>
          <Col key={18}>
            <Box data={adventBoxes[18]}/>
          </Col>
          <Col key={19}>
            <Box data={adventBoxes[19]}/>
          </Col>
          <Col key={20}>
            <Box data={adventBoxes[20]}/>
          </Col>
          <Col key={21}>
            <Box data={adventBoxes[21]}/>
          </Col>
          <Col key={22}>
            <Box data={adventBoxes[22]}/>
          </Col>
          <Col key={23}>
            <Box data={adventBoxes[23]}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
