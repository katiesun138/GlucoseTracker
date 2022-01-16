import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from './components/Header';
import { StartLevel } from './components/StartLevel';
import { CurrentLevel } from './components/CurrentLevel';
import { Foods } from './components/Foods';
import { FoodList } from './components/FoodList';
import { AddFood } from './components/AddFood';
import { StartInput } from './components/StartInput';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  // const [addFormData, setAddFormData] = useState({
  //   foodName:"",
  //   weightInG:"",
  // });

  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute('foodItem');
  //   const fieldValue = event.target.value;

  //   const newFormData = {...addFormData};
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  // };

  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();

  //   const newContact ={
  //     foodName: addFormData.foodName,
  //     weightInG: addFormData.weightInG,
  //   };
  //   const newContact = [...contacts, newContact];
  //   setContacts(newContact);
  // };

  return (

    
    <Router>
      <nav>
        <Link to="/">
          <p className="Home">Go back Home</p>
        </Link>
        <Link to="/food">
          <p className="Foodlog">Click to log food</p>
        </Link>
        <Link to="/glucose">
          <p className="Glucoselog">Click to log glucose</p>
        </Link>
      </nav>
      <Routes>
        <Route path="/food" element={<Foodlog />} />
        <Route path="/" element={<Home />} />
        <Route path="/glucose" element={<Glucose />} />
      </Routes>
    </Router>
  );



}

let Foodlog =()=>{
  return( 
    <div className='app-container'>
      <h2>Welcome to Food Logging</h2>
      <table>
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Weight (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Omelette</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Kale Salad</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Steak and Sweet Potato</td>
            <td>550</td>
          </tr>
        </tbody>
      </table>
      <h2>Add a Food Item</h2>
      <form >
        <input 
        type="text" 
        name="foodItem"
        required="required"
        placeholder='Enter a food item...'>
        {/* onChange={handleAddFormChange} */}
        </input>
        <input 
        type="text" 
        name="itemWeight"
        required="required"
        placeholder='Enter weight in grams...'>
        {/* onChange={handleAddFormChange} */}
        </input>
        <button type="submit">Add</button>
      </form>
      <h3>Your current Blood Sugar Prediction is <strong>135 mg/dL</strong></h3>
    </div>
      
    );
};

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title"> Glucose Tracker</h1>
        <p className="Description">Our Glucose Tracker helps record your glucose levels and an estimate of glucose intake
          throughout the day. By carefully monitoring glucose intake, health suggestions will be given.</p>
        <div className="Gallery">
          <img src={require('./images/Food.jpeg')} className="App-Food" height={500} width={900} />
          <img src={require('./images/Glucose.jpeg')} className="App-Glucose" height={500} width={900} />
        </div>
      </header>

    </div>
  );
}

function Glucose() {
  return (
    <div className="Glucose-page">
      <center>
        <div>
          <Header />
        </div>
        <br></br>
        <br></br>
        <div className="containerleft">
          <StartLevel />
        </div>
        <div className="containerright">
          <CurrentLevel />
        </div>
      </center>
      <StartInput />
    </div>
  );
}

export default App;