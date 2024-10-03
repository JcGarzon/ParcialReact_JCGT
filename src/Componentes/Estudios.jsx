import React from 'react';

// Datos de ejemplo sobre tus estudios
const estudios = [
  {
    institucion: 'Universidad Autonoma De Occidente',
    titulo: 'Ingeniería Multimedia',
    año: '2021 - Presente',
    detalles: 'Cursando séptimo semestre',
  },
  {
    institucion: 'Colegio San Francisco de Asis',
    titulo: 'Bachiller Tecnico',
    año: '2016 - 2020',
    detalles: 'Tecnico en Desarrollo de Software',
  },
  {
    institucion: 'Centro Cultural Colombo Americano',
    titulo: 'Graduado del Programa Kid And Teens',
    año: '2015 - 2019',
    detalles: 'Programa de 480h de Idioma Extranjero Ingles',
  },
  // Agrega más estudios según sea necesario
];

const Estudios = () => {
    return (
      <div className="Estudios" >
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
