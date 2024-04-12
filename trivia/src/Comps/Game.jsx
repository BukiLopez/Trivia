import React, { useState, useEffect } from 'react';
import './Game.css';

function Game() {
    const [preguntas, setPreguntas] = useState([]);
    const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const [respuestaClickeada, setRespuestaClickeada] = useState(null);

    useEffect(() => {
        fetch("https://getpantry.cloud/apiv1/pantry/eab0f25a-9d10-4fdb-9af3-b49c71d9f3c9/basket/trivia")
            .then((response) => response.json())
            .then((resasjson) => setPreguntas(resasjson.preguntas))
            .catch((err) => console.log(err))
    }, []);

    const preguntaActual = preguntas[indicePreguntaActual];

    function aleatorio() {
        return Math.floor(Math.random() * preguntas.length);
    }

    const handleAnswerClick = (respuesta, index) => {
        if (respuesta.correcta) {
            // Sumar un punto si la respuesta es correcta
            setPuntos(puntos + 1);
        }
        // Almacenar el índice de la respuesta clickeada
        setRespuestaClickeada(index);
        // Esperar un segundo antes de pasar a la siguiente pregunta
        setTimeout(() => {
            setRespuestaClickeada(null);
            setIndicePreguntaActual(aleatorio());
        }, 1000);
    };

    if (!preguntaActual) {
        return null;
    }

    return (
        <div className="game-container">
            <h1 className="title">{preguntaActual.pregunta}</h1>
            <div className="imagen"><img src={preguntaActual.imagen} alt="mapa del juego" /></div>
            <div className="answers-container">
                {preguntaActual.respuestas.map((respuesta, index) => (
                    <button 
                        key={index} 
                        className={`selection-button ${respuestaClickeada === index ? (respuesta.correcta ? 'correcta' : 'incorrecta') : ''}`} 
                        onClick={() => handleAnswerClick(respuesta, index)}
                    >
                        {respuesta.texto}
                    </button>
                ))}
            </div>
            <h2>Puntos: {puntos}</h2>
        </div>
    );
}

export default Game;
