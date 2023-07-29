import Product from "../../entities/product";
import "./Card.scss";

interface Props {
  product: Product;
}

const Card = ({ product }: Props) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img">
          <img className="img-1" src={product.img} alt="" />
          <img className="img-2" src={product.img1} alt="" />
        </div>
        <div className="card-body">
          <h3>This is a camera</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
          <span>$350</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
