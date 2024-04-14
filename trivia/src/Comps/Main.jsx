import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import logo from './Logo.jpeg';
function Main() {
  return (
    <div className='content'>
      <h1 className='title'>¿ESTAS LISTO?</h1>
      <img src={logo} alt='' className="small-image"></img>
      <p>Selecciona un modo de juego</p>
      <div className='buttons-container'>
      <Link to="/GameBlur">
        <button className='selection-button'>Portadas</button>
        </Link>
        <Link to="/Game">
        <button className='selection-button'>Mapas</button>
        </Link>
      </div>
    </div>
  );
}  

export default Main;