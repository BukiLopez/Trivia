import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Comps/Footer.jsx';
import Header from './Comps/Header.jsx';
import Main from './Comps/Main.jsx';
import GameBlur from './Comps/GameBlur.jsx';
import Game from './Comps/Game.jsx';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/GameBlur" element={<GameBlur />}></Route>
        <Route path="/Game" element={<Game />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
