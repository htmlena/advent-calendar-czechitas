import './App.css';
import React from 'react';
import { adventBoxes } from './adventBoxes';

import Box from './Components/Advent-Calendar';
import ActualDate from './Components/ActualDate';

function App() {
  return (
    <>
      {adventBoxes.map((adventBox) => {
        return <Box data={adventBox} key={adventBox.number} />;
      })}
      <ActualDate />
    </>
  );
}

export default App;
