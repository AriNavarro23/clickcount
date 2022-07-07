import './App.css';
import '../src/Css/Button.css';
import freeCodeCampLogo from '../src/assets/freecodecamp-logo.png';
import Button from './components/Button';
// import ReactDOM  from 'react-dom';

function App() {

  const manejarClic = () =>{
    console.log("Clic")
  }

const restartCount = () =>{
      console.log("Restart")
  }

  return (
    <div className="App">
      <div className='container-freecodecamp-logo'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'
          />
      </div>
      <Button
        text='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
      />
      <Button
      text='restart'
      esBotonDeClic={false}
      manejarClic={restartCount}
      />
    </div>
  );
}

export default App;
