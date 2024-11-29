import React from 'react';
import './LoQueEsLilyParaMi.css';

const LoQueEsLilyParaMi = () => {
  const cards = [
    {
      image: require('../imagen5.jpeg'),
      caption: "Tú eres como esos hermosos atardeceres que sabes que me encantan ver.\nCuando termino de trabajar, eres lo único que quiero mirar.\nVer tus mensajes, me da la misma tranquilidad y felicidad que mirar el atardecer más hermoso.",
    },
    {
      image: require('../imagen6.jpeg'),
      caption: "También eres como un cielo estrellado, a veces, pareciera que estás completamente a oscuras,\npero siempre estás llena de estrellas.\nEres la luz que ilumina mis días, aunque tú pienses que eres solamente oscuridad,\nyo veo cada estrella que brilla en tu interior. Estrellas que brillan entre toda esa oscuridad.",
    },
    {
      image: require('../imagen7.jpeg'),
      caption: "También a veces eres una niña pequeña, tan infantil, tan inocente,\ntan pura y tan tierna.\nUna niña que ha sido profundamente lastimada, que merece ser curada,\nque merece todo el amor del mundo y que voy a cuidar por el resto de mi vida.",
    },
    {
      image: require('../imagen8.jpeg'),
      caption: "Sé que podría decir que eres mi mundo, pero no, tú eres mi universo, mi todo.\nEres mi vida, mis días, mi tiempo y todo lo bonito de esta vida.\nSignificas más de lo que las palabras e imágenes pueden describir.\nEres todo lo que quiero en mi vida y a quien nunca dejaré.\nNunca volverás a sentirte sola, nunca volverás a sentirte poco querida o apreciada,\nporque para mí, Lily lo es todo.",
    },
  ];

  return (
    <div className="lo-que-es-lily">
      <h1>Lo que es Lily para mí</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={`Imagen ${index + 1}`} className="card-image" />
            <div className="card-caption">{card.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoQueEsLilyParaMi;
