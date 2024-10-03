import React, { useEffect, useState } from 'react';


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50); // Cambia el valor según tus necesidades
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="container">
        <h3 className="logo">GRZN</h3>
        <ul className="nav-links">
          <li><a href="https://github.com/JcGarzon">GitHub</a></li>
          <li><a href="https://www.youtube.com/@juliangarzon1930">Youtube</a></li>
          <li><a href="https://www.linkedin.com/in/julian-camilo-garzon-toro-346949302/">Linkedin</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
