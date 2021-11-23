import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>This is my first react app</h1>
          <ul>
            <li>Chicken</li>
            <li>Noodles</li>
            <li>Pizza</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
