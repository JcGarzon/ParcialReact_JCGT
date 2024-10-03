import React from 'react';

// Datos de ejemplo sobre tus estudios
const estudios = [
  {
    institucion: 'Universidad XYZ',
    titulo: 'Ingeniería Multimedia',
    año: '2021 - Presente',
    detalles: 'Cursando séptimo semestre',
  },
  {
    institucion: 'Colegio ABC',
    titulo: 'Bachillerato',
    año: '2017 - 2020',
    detalles: 'Graduado con honores',
  },
  // Agrega más estudios según sea necesario
];

const Estudios = () => {
    return (
      <div className="Estudios">
        <h2>Mis Estudios</h2>
          {estudios.map((estudio, index) => (
            <div key={index} className="estudio-item">
              <h3>{estudio.titulo}</h3>
              <p>{estudio.institucion}</p>
              <p>{estudio.año}</p>
              <p>{estudio.detalles}</p>
            </div>
          ))}
      </div>
    );
  };
  

export default Estudios;
