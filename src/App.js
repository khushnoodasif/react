import logo from './logo.svg';
import './App.css';

const fName = "Khushnood";
const lName = "Asif";
const currentDate = new Date();
const year = currentDate.getFullYear();
const currentTime = currentDate.getHours();

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning!";
} else if (currentTime < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Hello from {fName + " " + lName}!</h1>
          <h2>{greeting}</h2>
          <p>Your lucky number is {Math.floor(Math.random()*60)}</p>
        </div>
      </header>
      <body>
        
      </body>
      <footer>
        <p>Created by {fName + " " + lName}</p>
        <p class="copy">Copyright {year}</p>
      </footer>,
    </div>
  );
}

export default App;
