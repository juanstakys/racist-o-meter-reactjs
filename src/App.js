import './App.css';
import { useState } from 'react';
import Indicator from './Indicator.js';
import Dictaphone from './Dictaphone.js';
import { Card } from '@mui/material';

function App() {
  const [isItRacist, setIsItRacist] = useState()
  const [explanation, setExplanation] = useState()

  // Determine the CSS class based on the isItRacist value
  const backgroundClass = isItRacist ? 'red-bg' : 'green-bg';

  return (
    <div className={`${backgroundClass}`}>
      <div className={`centered-container`}>
        <Card sx={{
          bgcolor: '#ffffff44',
          borderRadius: 2,
          width: 300,
          position: 'relative',
          justifyContent: 'center'
        }}>
        <Indicator isItRacist={isItRacist} explanation={explanation} />
        </Card>
        <Dictaphone onAPIResponse={(APIIsItRacist, APIExplanation) => {
          setIsItRacist(APIIsItRacist)
          setExplanation(APIExplanation)
        }} />
      </div>
    </div>
  );
}

export default App;
