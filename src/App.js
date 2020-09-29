import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";


function App() {
  return (
    <div >
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="card-deck">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <footer className="p-3 bg-dark text-white text-center">Copywright &copy; Your website 2019 </footer>
    </div>
  );
}


export default App;
