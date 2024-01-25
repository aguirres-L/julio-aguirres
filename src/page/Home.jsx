import React from "react";


import eco from "../assets/img/1.png"
import medium from "../assets/img/33.png"
import premiun from "../assets/img/44.png"

import Card from '../Components/Card/Card'

export default function Home() {
  
  const images =[ eco, medium , premiun  ]
  const nameCard = [ "Economico", "Normal", "Premium" ]
  
  return (
    <Card img={images} nameCard={nameCard}  />
  );
}
