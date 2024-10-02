import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import Perfil from './Componentes/Perfil';
import Proyectos from './Componentes/Proyectos';
import HabilidadesSlider from './Componentes/HabilidadesSlider';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Perfil />
        <HabilidadesSlider />
        <Proyectos />

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
