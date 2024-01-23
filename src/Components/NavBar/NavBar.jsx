import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <>
      
      {props.name.length < 3 && (
        <nav className="navbar">
          <button className="btn-about">
            <a href="#contact">{props.name[0]}</a>
          </button>
        </nav>
      )}
    </>
  );
}
