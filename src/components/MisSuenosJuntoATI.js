import React from 'react';
import './MisSuenosJuntoATI.css';

const MisSuenosJuntoATI = () => {
  const dreams = [
    {
      image: require('../imagen9.jpeg'),
      title: "Distancia",
      caption: "Lo primero y lo que más deseo, mi anhelo más grande, es poder tocarte, acariciarte, abrazarte. Cada noche, mi mente sueña con poder romper esta distancia que nos separa. No sé cuándo ni cómo, pero sé que, algún día, esa distancia dejará de existir y podremos estar juntas como siempre he deseado.",
    },
    {
      image: require('../imagen10.jpeg'),
      title: "Festividades",
      caption: "Sabes que las celebraciones no me gustan, que las fechas especiales solían deprimirme. Pero ahora, cada vez que imagino pasar esos días contigo, todo cambia. Quiero vivir cada día especial a tu lado, hacer de cada festividad un momento único y lleno de felicidad. Déjame llenar todos tus días de amor y celebración.",
    },
    {
      image: require('../imagen11.jpeg'),
      title: "Viajes",
      caption: "Siempre he soñado con viajar, con descubrir el mundo, pero ya no me imagino haciéndolo sola. Ahora, mi mayor deseo es explorar cada rincón del mundo a tu lado, vivir cada experiencia, cada aventura, contigo.",
    },
    {
      image: require('../imagen12.jpeg'),
      title: "Boda",
      caption: "Sé que puede asustarte leer esto, que aún no somos pareja, pero contigo lo quiero todo. Mi corazón ya lo ha decidido: si algún día llego a casarme, quiero que sea contigo. Eres todo lo que quiero, ahora y siempre.",
    },
    {
      image: require('../imagen13.jpeg'),
      title: "Familia",
      caption: "Tú has cambiado mi perspectiva en tantas cosas, y una de ellas es lo que quiero para mi futuro. Ya eres mi familia, mi lugar seguro, pero también quiero formar una familia más grande contigo. Perros, gatos, hijos... todo eso lo quiero compartir a tu lado, porque contigo lo quiero todo.",
    },
  ];

  return (
    <div className="mis-suenos-junto-a-ti">
      <h1>Mis Sueños Junto a Ti</h1>
      <div className="dreams-container">
        {dreams.map((dream, index) => (
          <div key={index} className="dream-card">
            <img src={dream.image} alt={`Imagen ${index + 1}`} className="dream-image" />
            <div className="dream-title">{dream.title}</div>
            <div className="dream-caption">{dream.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisSuenosJuntoATI;
