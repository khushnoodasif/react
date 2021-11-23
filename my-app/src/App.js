import logo from './logo.svg';
import './App.css';

const fName = "Khushnood";
const lName = "Asif";
const currentDate = new Date();
const year = currentDate.getFullYear();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Hello {fName + " " + lName}!</h1>
          <p>Your lucky number is {Math.floor(Math.random()*60)}</p>
        </div>
      </header>
      <div>
        <p>Created by {fName}</p>
        <p>Copyright {year}</p>
      </div>,
    </div>
  );
}

export default App;
