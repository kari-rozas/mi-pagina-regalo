import React, { useState } from 'react';
import './ComoMeEnamore.css';

const ComoMeEnamore = () => {
  // Estado para controlar la imagen actual
  const [currentImage, setCurrentImage] = useState(0);

  // Lista de imágenes y sus correspondientes textos
  const images = [
    { src: require('../imagen2.jpeg'), alt: 'Imagen 2', caption: "No sé exactamente cuándo me enamoré de ti,\nquizás fue cuando comenzaste a ser parte de mis días sin que lo notara.\nQuizás fue cuando te convertiste en mi primer pensamiento al despertar.\nO tal vez, cuando vi tu vulnerabilidad y entendí que solo a ti quería tener a mi lado." },
    { src: require('../imagen3.jpeg'), alt: 'Imagen 3', caption: "Quizás fue cuando me encontraba sonriendo sin razón, solo por un mensaje tuyo.\nO cuando, en los días grises, la única respuesta que quería era hablar contigo.\nNo lo sé, pero cada pequeño gesto tuyo me hizo enamorarme más." },
    { src: require('../imagen4.jpeg'), alt: 'Imagen 4', caption: "Son tantas las razones por las que me enamoré de ti,\nque nunca podría nombrarlas todas.\nPero lo único que sé con certeza es que, haberme enamorado, ha sido lo mejor que me ha pasado.\nEnamorarme de ti es el sentimiento más hermoso que he llegado a sentir." }
  ];

  // Funciones para mover al siguiente o al anterior slide
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Mueve a la siguiente imagen
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Mueve a la anterior imagen
  };

  return (
    <div className="como-me-enamore">
      <h1>Cómo me enamoré de ti</h1>
      <div className="carousel">
        <div className="carousel-image-container">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="carousel-image"
          />
          <div className="caption">{images[currentImage].caption}</div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-prev" onClick={prevImage}>❮</button>
          <button className="carousel-next" onClick={nextImage}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default ComoMeEnamore;
