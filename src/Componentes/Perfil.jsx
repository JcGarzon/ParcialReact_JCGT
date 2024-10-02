import React from 'react';
import pfp from '../assets/pfp.jpg';

const Perfil = () => {
  return (
    <div className="perfil">
      <img src={pfp} alt="Perrito Americano" />
      <h1>Julian Camilo Garzon Toro</h1>
      <p>
        Estudiante de <strong>Ingeniería Multimedia</strong> actualmente cursando séptimo semestre, apasionado por la producción y edición audiovisual.
      </p>
    </div>
  );
};

export default Perfil;
