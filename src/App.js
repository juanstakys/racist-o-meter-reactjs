import './App.css';
import { useState } from 'react';
import Indicator from './Indicator.js';
import Dictaphone from './Dictaphone.js';

function App() {
  const [isItRacist, setIsItRacist] = useState()
  const [explanation, setExplanation] = useState()

  return (      
    <div>
      <Indicator isItRacist={isItRacist} explanation={explanation}/>
      <Dictaphone onAPIResponse={(APIIsItRacist, APIExplanation)=>{
        setIsItRacist(APIIsItRacist)
        setExplanation(APIExplanation)
      }}/>
    </div>
  );
}

export default App;
