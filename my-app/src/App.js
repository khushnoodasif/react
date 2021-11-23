import logo from './logo.svg';
import './App.css';

const fName = "Khushnood";
const lName = "Asif";
const num = 30;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Hello {fName + " " + lName}!</h1>
          <p>Your lucky number is {num}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
