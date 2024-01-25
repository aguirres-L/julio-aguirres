import data from "../../../data/productos.json"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Card.css"
export default function Card(props) {
        console.log(props.img[0])
        
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };
        
  return (
    <>
      <section id="productos" class="products">
        <div class="product">
          <img src={props.img[0]} alt="" />
          <h2>Económico</h2>
        </div>

        <div class="product">
          <img src={props.img[1]} alt="" />
          <h2>Normal</h2>
        </div>

        <div class="product">
          <img src={props.img[2]} alt="" />
          <h2>Premium</h2>
        </div>
        
      </section>
      <hr/>
      
       {/* Carrusel con datos de productos */}
       <Slider {...settings}>
      {data.map((product, index) => (
        <div key={index} className="product-carousel">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </Slider>
      
    </>
  );
}
