import React from 'react';
import './Header.css';

// src/components/Header.jsx
const Header = () => {
  return (
    <nav className='navbar'>
  
      <h1>🎥 Movie Review App</h1>
     <div className='navbar_links'>
        <a href="#">Most Famous Movies</a>
        <a> | </a>
        <a href="#">Highly Rated</a>
        <a> | </a>
        <a href="#">Reviews</a>
      </div>
      
      </nav>
  );
};

export default Header;
