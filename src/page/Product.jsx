
import NavBar from "../Components/NavBar/NavBar";
import "./prducts.css"

import data from "../../data/productos.json"

export default function Product(){
console.log(data);
    
      return (
        <>
        <div className="products-section">
          <h2>Nuestros Productos</h2>
        
          <div className="container-productos">
          {data.map((product, index) => (
            <div key={index} className="product">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
          </div>
        
        </div>
        </>
        
      );
}
