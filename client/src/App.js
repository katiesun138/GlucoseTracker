import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { Header } from './components/Header';
import { StartLevel } from './components/StartLevel';
import { CurrentLevel } from './components/CurrentLevel';
import { Foods } from './components/Foods';
import { FoodList } from './components/FoodList';
import { AddFood } from './components/AddFood';
import { StartInput } from './components/StartInput';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
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

function Foodlog() {
  return (
    <div>
      <h1>Food Logger</h1>
      <div>
        <Foods />
        <FoodList />
        <AddFood />
      </div>
    </div >
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
    <div>
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
