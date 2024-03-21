import './Game.css';
function Game() {
  return (
        <div className="game-container">
            <h1 className="title">The Game</h1>
            <div className="imagen">Aquí va una imagen</div>
            <div className="answers-container">
                <button className="selection-button">Respuesta A</button>
                <button className="selection-button">Respuesta B</button>
                <button className="selection-button">Respuesta C</button>
                <button className="selection-button">Respuesta D</button>
            </div>
        </div>
  );
}

export default Game;