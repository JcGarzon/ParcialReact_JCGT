import React from 'react';
import Typewriter from 'typewriter-effect'; 
import pfp from '../assets/pfp.jpg';

const Perfil = () => {
  return (
    <div className="perfil">
      <img src={pfp} alt="Perrito Americano" />
      <h1>
        <Typewriter
          options={{
            strings: ['Julian Camilo Garzon Toro'],
            autoStart: true,
            loop: true, // Cambia a true si quieres que se repita
            delay: 75, 
          }}
        />
      </h1>
      <p>
        Estudiante de <strong>Ingeniería Multimedia</strong> actualmente cursando séptimo semestre, apasionado por la producción y edición audiovisual.
      </p>
    </div>
  );
};

export default Perfil;

