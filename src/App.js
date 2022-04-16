import logo from './logo.svg';
import './App.css';
import Ciclocompleto from './components/CicloCompleto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ciclocompleto></Ciclocompleto>
      </header>
    </div>
  );
}

export default App;
