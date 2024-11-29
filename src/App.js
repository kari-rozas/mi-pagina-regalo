import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';

import Bienvenida from './components/Bienvenida'; // Asegúrate de importar el componente


// Componentes
import CuandoNosConocimos from "./components/CuandoNosConocimos";
import ComoMeEnamore from "./components/ComoMeEnamore";
import LoQueEsLilyParaMi from "./components/LoQueEsLilyParaMi";
import MisSuenosJuntoATI from "./components/MisSuenosJuntoATI";
import FelizCumpleanos from "./components/FelizCumpleanos";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menú desplegable */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/cuando-nos-conocimos">Cuando nos conocimos</Link></li>
            <li><Link to="/como-me-enamore">Cómo me enamoré de ti</Link></li>
            <li><Link to="/lo-que-es-lily">Lo que es Lily para mí</Link></li>
            <li><Link to="/mis-suenos-junto-a-ti">Mis sueños junto a ti</Link></li>
            <li><Link to="/feliz-cumpleanos">Feliz cumpleaños</Link></li>
          </ul>
        </nav>

        {/* Reproductor de música global */}
        <audio className="audio-player" controls autoPlay loop>
          <source src={require('./cancion.mp3')} type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>

        {/* Rutas para las secciones */}
        <Routes>
          <Route path="/cuando-nos-conocimos" element={<CuandoNosConocimos />} />
          <Route path="/como-me-enamore" element={<ComoMeEnamore />} />
          <Route path="/lo-que-es-lily" element={<LoQueEsLilyParaMi />} />
          <Route path="/mis-suenos-junto-a-ti" element={<MisSuenosJuntoATI />} />
          <Route path="/feliz-cumpleanos" element={<FelizCumpleanos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
