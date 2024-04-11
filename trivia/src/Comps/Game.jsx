import './Game.css';
import { useState } from 'react';
function Game() {
    const preguntas = [
        {
          pregunta: "¿De qué juego es este mapa?",
          imagen: "/Mapas/Crosscode.png",
          respuestas: [
            { texto: "Crosscode", correcta: true },
            { texto: "Dead Cells", correcta: false },
            { texto: "Hades", correcta: false },
            { texto: "Undertale", correcta: false }
          ]
        },
        {
            pregunta: "¿De qué juego es este mapa?",
            imagen: "/Mapas/GoW.jpg",
            respuestas: [
              { texto: "God of War", correcta: false },
              { texto: "Red Dead Redemption II", correcta: true },
              { texto: "Spiderman", correcta: false },
              { texto: "TLOZ Breath of the Wild", correcta: false }
            ]
          },
          {
            pregunta: "¿De qué juego es este mapa?",
            imagen: "/Mapas/HaloInfinite.jpg",
            respuestas: [
              { texto: "Halo Infinite", correcta: true },
              { texto: "Halo 4", correcta: false },
              { texto: "Battlefield", correcta: false },
              { texto: "CoD", correcta: false }
            ]
          },
          {
            pregunta: "¿De qué juego es este mapa?",
            imagen: "/Mapas/Hollowknight.jpg",
            respuestas: [
              { texto: "Ever", correcta: true },
              { texto: "Marco", correcta: false },
              { texto: "Saul", correcta: false },
              { texto: "Hassam", correcta: false }
            ]
          },
          {
            pregunta: "¿De qué juego es este mapa?",
            imagen: "/Mapas/Mhw.jpg",
            respuestas: [
              { texto: "Monster Hunter World", correcta: true },
              { texto: "Monster Hunter Rise", correcta: false },
              { texto: "Slime Rancher", correcta: false },
              { texto: "Pokémon Esmeralda", correcta: false }
            ]
          },
          {
            pregunta: "¿De qué juego es este mapa?",
            imagen: "/Mapas/Slimerancher.jpg",
            respuestas: [
              { texto: "Slime Rancher 2", correcta: false },
              { texto: "Slime Rancher", correcta: true },
              { texto: "Dragon's Dogma 2", correcta: false },
              { texto: "Dragon Quest", correcta: false }
            ]
          },
        // más preguntas aquí
      ];
    const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
    const preguntaActual = preguntas[indicePreguntaActual];

    function aleatorio() {
        return Math.floor(Math.random() * preguntas.length);
    }
    const handleNextQuestion = () => {
        setIndicePreguntaActual(aleatorio());
    };
  return (
    <div className="game-container">
        <h1 className="title">{preguntaActual.pregunta}</h1>
        <div className="imagen"><img src={preguntaActual.imagen} alt="mapa del juego" /></div>
        <div className="answers-container">
            {preguntaActual.respuestas.map((respuesta, index) => (
                <button key={index} className="selection-button">
                    {respuesta.texto}
                </button>
            ))}
        </div>
        <button onClick={handleNextQuestion}>Siguiente pregunta</button>
    </div>
  );
}

export default Game;