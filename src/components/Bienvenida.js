import React from 'react';
import './Bienvenida.css';  // Importa el archivo CSS que vas a crear

const Bienvenida = () => {
  return (
    <div className="bienvenida-container">
      <div className="bienvenida-message">
        <h1>¡Bienvenido a tu regalo especial!</h1>
        <p>
          Este es tu regalo, espero que te guste. Lo hice desde cero, con mis conocimientos de programación.
          Esto fue hecho exclusivamente para ti, en Internet no encontrarás nada igual. 
          Este regalo está dedicado a nuestra historia, a mis sentimientos por ti, y al final, en la última pestaña, un pequeño detalle pensado especialmente para ti.
        </p>
        <p>
          Comienza en <strong>"Cuando nos conocimos"</strong>, y sigue adelante en nuestra historia. 
          Espero que lo disfrutes tanto como yo disfruté creándolo para ti.
        </p>
      </div>
    </div>
  );
};

export default Bienvenida;
