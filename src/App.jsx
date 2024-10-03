import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import Perfil from './Componentes/Perfil';
import Proyectos from './Componentes/Proyectos';
import HabilidadesSlider from './Componentes/HabilidadesSlider';
import Estudios from './Componentes/Estudios';
import P1 from './assets/P1.png';
import P2 from './assets/P2.png';
import P3 from './assets/p3.png';
import P4 from './assets/P4.png'; 
import P5 from './assets/P5.png'; 

function App() {
  const proyectos1 = [
    {
      link: "https://github.com/JcGarzon/Clase2",
      imagen: P1,
      titulo: "Clase 2: Uso de etiquetas",
      descripcion: "Exploración de etiquetas de HTML como Video o Img"
    },
    {
      link: "https://github.com/JcGarzon/Css-Caracteristicas",
      imagen: P2,
      titulo: "Clase 3: @Media",
      descripcion: "Ejercicio de redimensiones, cambia la imagen e información según el tamaño de la pantalla"
    },
    {
      link: "https://github.com/edwinmgallego/clase-practica-css-jueves",
      imagen: P3,
      titulo: "Clase 5: Git Branches y Formularios",
      descripcion: "Ejercicio de manejo de ramas y formularios HTML"
    }
  ];

  const proyectos2 = [
    {
      link: "https://github.com/otro-enlace/Proyecto4",
      imagen: P4,
      titulo: "Proyecto 4: Clase Virtual",
      descripcion: "Descripción del nuevo proyecto"
    },
    {
      link: "https://github.com/JcGarzon/Primera-Practica-React",
      imagen: P5,
      titulo: "Proyecto 5: Contador React ",
      descripcion: "Primera Practica de React, ejercicio con contador"
    },
    {
      link: "https://github.com/JcGarzon/ejercicio-react",
      imagen: P5,
      titulo: "Proyecto 6: Componentes de React ",
      descripcion: "Primera Practica de Componentes, ejercicio con videoplayer"
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Perfil />
        <Estudios />
        <HabilidadesSlider />
        
        <Proyectos proyectos={proyectos1} nombre="Proyectos Corte #1" />
        <Proyectos proyectos={proyectos2} nombre="Proyectos Corte #2" />
      </main>
      <footer>
        <p>Parcial 1 EMW 2024-3 Julian Camilo Garzon Toro</p>
        <p>Contacto: 
          <a href="https://www.linkedin.com/in/julian-camilo-garzon-toro-346949302/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/JcGarzon" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        <p>julian_camilo.garzon@uao.edu.co</p>
      </footer>
    </div>
  );
}

export default App;
