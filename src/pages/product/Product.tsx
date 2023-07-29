import "./Product.scss";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useCartStore } from "../../store";

const Product = () => {
  const { id } = useParams();
  const addToCart = useCartStore((store) => store.addToCart);

  const [quantity, setQuantity] = useState<number>(1);

  const { data: product, error, isLoading } = useProduct(id!);

  const [selectedImg, setSelectedImg] = useState(product?.img);
  if (isLoading) return <p style={{ marginTop: "8rem" }}> Loading... </p>;

  if (error) return <p> {error.message} </p>;

  if (product)
    return (
      <div className="single-product">
        <div className="product-images">
          <div>
            <img
              onClick={() => setSelectedImg(product.img)}
              src={product.img}
              alt=""
            />
            <img
              onClick={() => setSelectedImg(product.img1)}
              src={product.img1}
              alt=""
            />
            <img
              onClick={() => setSelectedImg(product.img2)}
              src={product.img2}
              alt=""
            />
          </div>
          <div className="view-image">
            <img src={selectedImg || product.img} alt="" />
          </div>
        </div>
        <div className="product-info">
          <h2> {product.title} </h2>
          <p className="product-desc"> {product.description} </p>
          <span> Price: ${product.price} </span>
          <div className="product-quantity">
            <button
              disabled={quantity === 1}
              onClick={() => setQuantity(quantity - 1)}
              className="btn-quantity"
            >
              -
            </button>
            <div className="quantity"> {quantity} </div>
            <button
              disabled={quantity === 10}
              onClick={() => setQuantity(quantity + 1)}
              className="btn-quantity"
            >
              +
            </button>
          </div>

          <button
            className="btn-cart"
            onClick={() =>
              addToCart({
                _id: product._id,
                title: product.title,
                img: product.img,
                quantity: quantity,
                price: product.price,
              })
            }
          >
            Add TO CART <FaCartPlus />
          </button>
        </div>
      </div>
    );
};

export default Product;
