
import "./Card.css"
export default function Card(props) {
        console.log(props.img[0])
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
    </>
  );
}
