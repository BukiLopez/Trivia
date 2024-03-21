import './Main.css';
function Main() {
  return (
    <div className='content'>
      <h1 className='title'>¿ESTÁS LISTO?</h1>
      <p>Selecciona un modo de juego</p>
      <div className='buttons-container'>
        <button className='selection-button'>Portadas</button>
        <button className='selection-button'>Mapas</button>
        <button className='selection-button'>Armas</button>
        <button className='selection-button'>Invetarios</button>
      </div>
    </div>
  );
}  

export default Main;