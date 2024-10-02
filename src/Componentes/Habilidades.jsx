import React from 'react';
import edicion from '../assets/edicion.png';
import promocion from '../assets/promocion.png';

const Habilidades = () => {
  return (
    <div className="Habilidades">
      <h2>Habilidades</h2>
      <div className="Habilidad">
        <img src={edicion} alt="Icono de Habilidades Duras" className="icono-habilidad" />
        <h3>Habilidades Duras</h3>
        <p>Edición de video</p>
        <p>Redacción de textos</p>
        <p>Bilingüismo</p>
      </div>
      <div className="Habilidad">
        <img src={promocion} alt="Icono de Habilidades Blandas" className="icono-habilidad" />
        <h3>Habilidades Blandas</h3>
        <p>Comunicación y escucha activa</p>
        <p>Planificación del tiempo</p>
        <p>Adaptabilidad</p>
      </div>
    </div>
  );
};

export default Habilidades;
