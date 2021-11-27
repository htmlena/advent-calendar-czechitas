import './App.css';
import React from 'react';
import { adventBoxes } from './adventBoxes';

import Box from './Components/Advent-Calendar';

function App() {
  return (
    <>
      {adventBoxes.map((adventBox) => {
        return <Box data={adventBox} key={adventBox.number} />;
      })};
    </>
  );
}

export default App;
