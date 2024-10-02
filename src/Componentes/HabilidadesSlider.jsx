import React, { useState } from 'react';
import edicion from '../assets/edicion.png';
import promocion from '../assets/promocion.png';
const HabilidadesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const habilidades = [
    {
      titulo: 'Habilidades Duras',
      icono: edicion,
      items: ['Edición de video', 'Redacción de textos', 'Bilingüismo']
    },
    {
      titulo: 'Habilidades Blandas',
      icono: promocion,
      items: ['Comunicación y escucha activa', 'Planificación del tiempo', 'Adaptabilidad']
    }
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % habilidades.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? habilidades.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="Habilidades">
      <h2>Habilidades</h2>
      <div className="slider">
        {habilidades.map((habilidad, index) => (
          <div
            key={index}
            className={`Habilidad ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={habilidad.icono} alt={`Icono de ${habilidad.titulo}`} className="icono-habilidad" />
            <h3>{habilidad.titulo}</h3>
            {habilidad.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="botones">
        <button className="boton" onClick={handlePrev}>Anterior</button>
        <button className="boton" onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};
export default HabilidadesSlider;