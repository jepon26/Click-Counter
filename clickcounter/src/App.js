import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './img/FCC-logo.jpg'


function App() {

  const [numClicks, setNumClicks] = useState(0);


const manageClick = () => {
 setNumClicks (numClicks + 1);
}


const restartCounter = () => {
  
}





  return (
    <div className="App">
      <div className="FCC-logo-container">
        <img 
        className='FCC-Logo'
        src={freeCodeCampLogo} 
        alt="FCCamp Logo" />
      </div>
      <div className="main">
        <Counter numClicks={numClicks}/>
        <Button 
        text='Click'
        isclickButton={true}
        manageClick={manageClick}/>
        <Button
        text='Restart'
        isclickButton={false}
        manageClick={restartCounter}
        />  
        
      </div>
    </div>
  );
}

export default App;
