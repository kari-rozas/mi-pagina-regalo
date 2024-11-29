import React from 'react';
import './FelizCumpleanos.css';

const FelizCumpleanos = () => {
  return (
    <div className="feliz-cumpleanos">
      <h1>¡Feliz Cumpleaños, Mi Amor!</h1>
      <div className="content">
        <video className="birthday-video" controls>
          <source src={require('../video.mp4')} type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
        <p className="birthday-message">
          Sé que el doblaje tiene un lugar especial en tu corazón, y como el rolear a Lucifer y Lilith nos ha vuelto a unir de una manera tan especial, quería sorprenderte con este regalo. Este saludo fue pensado y pedido especialmente para ti, mi amor. Te quiero muchísimo y me alegra poder compartir este momento contigo. ¡Espero que te guste! ¡Feliz cumpleaños, y que este día sea tan bonito y especial como tú!
        </p>
      </div>
    </div>
  );
};

export default FelizCumpleanos;
