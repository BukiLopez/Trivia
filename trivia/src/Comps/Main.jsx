import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Main.css';
import logo from './Yipi.jpeg';
function Main() {
  return (
    <div className='content'>
      <h1 className='title'>¿ESTÁS LISTO?</h1>
      <img src={logo}></img>
      <p>Selecciona un modo de juego</p>
      <div className='buttons-container'>
      <Link to="/Game">
        <button className='selection-button'>Portadas</button>
        </Link>
        <Link to="/Game">
        <button className='selection-button'>Mapas</button>
        </Link>
        <Link to="/Game">
        <button className='selection-button'>Armas</button>
        </Link>
        <Link to="/Game">
        <button className='selection-button' >Invetarios</button>
        </Link>
      </div>
    </div>
  );
}  

export default Main;