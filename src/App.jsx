import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import Product from './page/Product';

import logo from "./assets/img/icono2.png"

function App() {
  const arrayName = ["Inicio","Contacto", "Productos"];
  

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="" />
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