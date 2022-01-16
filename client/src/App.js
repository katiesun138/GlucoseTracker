import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title"> Glucose Tracker</h1>
        <p className="Description">Our Glucose Tracker helps record your glucose levels and an estimate of glucose intake 
        throughout the day. By carefully monitoring glucose intake, health suggestions will be given.</p>
        <div className="Gallery">
          <img src={require('./images/Food.jpeg')} className="App-Food" height={500} width={900}/>
          <img src={require('./images/Glucose.jpeg')} className="App-Glucose" height={500} width={900}/>
        </div>
        <div className="Links">
          <p className="Foodlog">Click to log food</p>
          <p className="Glucoselog">Click to log glucose</p>
        </div>
      </header>
    </div>
  );
}

export default App;
