import React from "react";


import eco from "../assets/img/1.webp"
import medium from "../assets/img/2.webp"
import premiun from "../assets/img/3.webp"

import Card from '../Components/Card/Card'

export default function Home() {
  
  const images =[ eco, medium , premiun  ]
  const nameCard = [ "Economico", "Normal", "Premium" ]
  
  return (
    <Card img={images} nameCard={nameCard}  />
  );
}
