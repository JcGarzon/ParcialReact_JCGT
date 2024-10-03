import React, { useState, useEffect } from 'react';
import edicion from '../assets/edicion.png';
import promocion from '../assets/promocion.png';

const HabilidadesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState([]);

  const habilidades = [
    {
      titulo: 'Habilidades Duras',
      icono: edicion,
      items: [
        { nombre: 'Edición de video', porcentaje: 80 },
        { nombre: 'Redacción de textos', porcentaje: 70 },
        { nombre: 'Bilingüismo', porcentaje: 90 }
      ]
    },
    {
      titulo: 'Habilidades Blandas',
      icono: promocion,
      items: [
        { nombre: 'Comunicación y escucha activa', porcentaje: 85 },
        { nombre: 'Planificación del tiempo', porcentaje: 75 },
        { nombre: 'Adaptabilidad', porcentaje: 90 }
      ]
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

  useEffect(() => {
    const newProgress = habilidades[currentIndex].items.map(item => ({
      ...item,
      animating: false,
    }));

    setProgress(newProgress);

    const timeoutIds = newProgress.map((item, index) => {
      return setTimeout(() => {
        setProgress(prev => {
          const updatedProgress = [...prev];
          updatedProgress[index].animating = true;
          return updatedProgress;
        });
      }, 100);
    });

    return () => {
      timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    };
  }, [currentIndex]);

  return (
    <div className="Habilidades">
      <h2>Habilidades</h2>
      <div className="slider">
        {habilidades.map((habilidad, index) => (
          <div
            key={index}
            className={`habilidad ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={habilidad.icono} alt={`Icono de ${habilidad.titulo}`} className="icono-habilidad" />
            <h3>{habilidad.titulo}</h3>
            {habilidades[currentIndex].items.map((item, idx) => (
              <div key={idx} className="habilidad-item">
                <p>{item.nombre}</p>
                <div className="barra-progreso">
                  <div
                    className="progreso"
                    style={{
                      width: progress[idx]?.animating ? `${item.porcentaje}%` : '0%',
                      transition: progress[idx]?.animating ? 'width 1s ease-in-out' : 'none',
                    }}
                  ></div>
                </div>
              </div>
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
