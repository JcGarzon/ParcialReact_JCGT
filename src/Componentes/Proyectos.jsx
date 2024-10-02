import React from 'react';
import P1 from '../assets/P1.png';
import P2 from '../assets/P2.png';
import P3 from '../assets/p3.png';

const Proyectos = () => {
  return (
    <div className="Proyectos">
      <h2>Proyectos</h2>
      <div className="Proyectos-container">
        <a href="https://github.com/JcGarzon/Clase2" target="_blank" rel="noopener noreferrer">
          <div className="Proyecto">
            <img src={P1} alt="Proyecto 1" />
            <h3>Clase 2: Uso de etiquetas</h3>
            <p>Exploración de etiquetas de HTML como Video o Img</p>
          </div>
        </a>
        <a href="https://github.com/JcGarzon/Css-Caracteristicas">
          <div className="Proyecto">
            <img src={P2} alt="Proyecto 2" />
            <h3>Clase 3: @Media</h3>
            <p>Ejercicio de redimensiones, cambia la imagen e información según el tamaño de la pantalla</p>
          </div>
        </a>
        <a href="https://github.com/edwinmgallego/clase-practica-css-jueves">
          <div className="Proyecto">
            <img src={P3} alt="Proyecto 3" />
            <h3>Clase 5: Git Branches y Formularios</h3>
            <p>Ejercicio de manejo de ramas y formularios HTML</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Proyectos;
