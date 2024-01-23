
import NavBar from "../Components/NavBar/NavBar";
import "./prducts.css"

export default function Product(){

    const products = [
        { name: "Producto 1", description: "Descripción del producto 1." },
        { name: "Producto 2", description: "Descripción del producto 2." },
        // Agrega más productos según sea necesario
      ];
    
      return (
        
        <>
        
        
        <div className="products-section">
          <h2>Nuestros Productos</h2>
          {products.map((product, index) => (
            <div key={index} className="product">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        </>
        
      );
}
