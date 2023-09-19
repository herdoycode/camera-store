import { useEffect } from "react";
import "./Confirmed.scss";
import { useCartStore } from "../../store";
import { useNavigate } from "react-router-dom";

const Confirmed = () => {
  const navigate = useNavigate();
  const emptyCart = useCartStore((s) => s.emptyCart);
  useEffect(() => {
    emptyCart();
    setTimeout(() => navigate("/"), 3000);
  }, []);
  return (
    <div className="confirmed">
      <h1>Order Confirmed!</h1>
    </div>
  );
};

export default Confirmed;
