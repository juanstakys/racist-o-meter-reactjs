import './App.css';
import { useState } from 'react';
import Indicator from './Indicator.js';
import Dictaphone from './Dictaphone.js';

function App() {
  const [isItRacist, setIsItRacist] = useState()
  const [explanation, setExplanation] = useState()

  // Determine the CSS class based on the isItRacist value
  const backgroundClass = isItRacist ? 'red-bg' : 'green-bg';

  return (
    <div className={`${backgroundClass}`}>
      <div className={`centered-container`}>
        <Indicator isItRacist={isItRacist} explanation={explanation} />
        <Dictaphone onAPIResponse={(APIIsItRacist, APIExplanation) => {
          setIsItRacist(APIIsItRacist)
          setExplanation(APIExplanation)
        }} />
      </div>
    </div>
  );
}

export default App;
