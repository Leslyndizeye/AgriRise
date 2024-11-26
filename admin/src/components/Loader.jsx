import React from 'react';
import './Loader.css'; // Make sure to link the correct CSS file
import image from '../assets/logo.png';

function Loader() {
  return (
    <div className="loader-container">
      <img src={image} alt="Logo" className="logo" />
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
