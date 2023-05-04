import './App.css';
import Button from './components/Button';
import freeCodeCampLogo from './img/FCC-logo.jpg'


function App() {


const manageClick = () => {
  console.log('Click');
}


const restartCounter = () => {
  console.log('Restart');
}

  return (
    <div className="App">
      <div className="FCC-logo-container">
        <img 
        className='FCC-logo'
        src={freeCodeCampLogo} 
        alt="FCCamp Logo" />
      </div>
      <div className="main">
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
