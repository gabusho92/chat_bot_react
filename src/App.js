import logo from './logo.svg';
import './App.css';
import { OpenButton } from './chatbot/OpenButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <OpenButton/>
      </header>
    </div>
  );
}

export default App;
