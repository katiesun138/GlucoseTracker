import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header class="container">
          <div class="row">
            <h1 class="col-sm-1">
              Hello
            </h1>
            <nav class="col-sm-11 text-right">
              <p>Glucose</p>
              <p>Contact</p>
            </nav>
          </div>
        </header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
