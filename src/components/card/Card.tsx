import { useNavigate } from "react-router-dom";
import Product from "../../entities/product";
import "./Card.scss";

interface Props {
  product: Product;
}

const Card = ({ product }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img">
          <img className="img-1" src={product.img} alt="" />
          <img className="img-2" src={product.img1} alt="" />
        </div>
        <div className="card-body">
          <h3 onClick={() => navigate(`/products/${product._id}`)}>
            {product.title}
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
          <span> {product.price} </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
