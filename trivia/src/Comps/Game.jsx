import './Game.css';
import logo from './Yipi.jpeg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Game() {
    const [preguntas, setPreguntas] = useState([]);
    const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);

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

    const handleAnswerClick = (respuesta) => {
        if (respuesta.correcta) {
            // Sumar un punto si la respuesta es correcta
            setPuntos(puntos + 1);
        }
        // Incrementar el número de preguntas respondidas
        setPreguntasRespondidas(preguntasRespondidas + 1);
        // Pasar a la siguiente pregunta si aún no se han respondido las 3 preguntas
        if (preguntasRespondidas < 3) {
            setIndicePreguntaActual(aleatorio());
        }
    };

    if (preguntasRespondidas === 3) {
        return (
            <div className="game-container">
                <h1>¡Juego terminado!</h1>
                <h2>Tu puntuación total es: {puntos}</h2>
                <p></p>
                <img src={logo} alt='Imagen de victoria'></img>
                <p></p>
                <Link to="/"><button className='selection-button'>Volver al menu</button></Link>
                
            </div>
        );
    }

    if (!preguntaActual) {
        return null;
    }

    return (
        <div className="game-container">
            <h1 className="title">{preguntaActual.pregunta}</h1>
            <div className="imagen"><img src={preguntaActual.imagen} alt="mapa del juego" /></div>
            <div className="answers-container">
                {preguntaActual.respuestas.map((respuesta, index) => (
                    <button key={index} className="selection-button" onClick={() => handleAnswerClick(respuesta)}>
                        {respuesta.texto}
                    </button>
                ))}
            </div>
            <h2>Puntos: {puntos}</h2>
        </div>
    );
}

export default Game;
