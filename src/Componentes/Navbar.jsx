import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
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
        <h3 className="logo">
          <Typewriter
            options={{
              strings: ['GRZN'], 
              autoStart: true,
              loop: true, 
              delay: 75, 
            }}
          />
        </h3>
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
