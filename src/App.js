import './App.css';
import { useState } from 'react';
import Indicator from './Indicator.js';
import Dictaphone from './Dictaphone.js';

function App() {
  const [isItRacist, setIsItRacist] = useState()

  return (      
    <div>
      <Indicator isItRacist={isItRacist}/>
      <Dictaphone onAPIResponse={(APIIsItRacist)=>{
        setIsItRacist(APIIsItRacist)
      }}/>
    </div>
  );
}

export default App;
