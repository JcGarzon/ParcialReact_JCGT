import React from 'react';
import banner from '../assets/banner.jpg';

const Header = () => {
  return (
    <div className="encabezado">
      <header>
        <img src={banner} alt="Banner" />
      </header>
    </div>
  );
};

export default Header;
