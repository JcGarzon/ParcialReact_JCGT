import React from 'react';

const Proyectos = ({ proyectos, nombre }) => {
  return (
    <div className="Proyectos">
      <h2>{nombre}</h2> {/* Usar el prop nombre para el título */}
      <div className="Proyectos-container">
        {proyectos.map((proyecto, index) => (
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="Proyecto">
              <img src={proyecto.imagen} alt={`Proyecto ${index + 1}`} />
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
