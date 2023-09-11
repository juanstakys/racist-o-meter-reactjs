import './App.css';
import Indicator from './Indicator.js';
import Dictaphone from './Dictaphone.js';

function App() {
  return (      
    <div>
      <Indicator isItRacist={false}/>
      <Dictaphone />
    </div>
  );
}

export default App;
