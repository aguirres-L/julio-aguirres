import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import Product from './page/Product';

import logo from "./assets/img/icono2.png"
import hoverSound from "./assets/img/payador.mp3"
function App() {

  const [audio] = useState(new Audio(hoverSound));
  const [isHovered, setIsHovered] = useState(false);


  const arrayName = ["Inicio","Contacto", "Productos"];
  
  const handleLogoHover = () => {
    setIsHovered(true);
    audio.play();
    console.log("Hover sobre el logo");
  };

  const handleLogoLeave = () => {
    setIsHovered(false);
    audio.pause();
    audio.currentTime = 0;
    console.log("Mouse fuera del logo");
  };

  useEffect(() => {
    // Detener y restablecer el audio cuando el componente se desmonta
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return (
    <>
      <nav className="navbar">
        <img src={logo}  onMouseLeave={handleLogoLeave}  onMouseOver={handleLogoHover} alt="" />
        <button className="btn-about">
          <Link to="/">{arrayName[0]}</Link>
        </button>
        <button className="btn-about">
          <Link to="/contacto">{arrayName[1]}</Link>
        </button>
        <button className="btn-about">
          <Link to="/productos">{arrayName[2]}</Link>
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/productos" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

// SOLUCIONAR PROBLEMA DE RESPONISBLDAD