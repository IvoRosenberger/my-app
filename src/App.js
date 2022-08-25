import logo from './logo.svg';
import './App.css';
import FunctionalComponents from './components/FunctionalComponents/FunctionalComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionalComponents/>
      </header>
    </div>
  );
}

export default App;
