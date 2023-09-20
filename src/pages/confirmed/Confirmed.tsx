import { useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store";
import "./Confirmed.scss";

const Confirmed = () => {
  const navigate = useNavigate();
  const emptyCart = useCartStore((s) => s.emptyCart);
  useEffect(() => {
    emptyCart();
    setTimeout(() => navigate("/"), 3000);
  }, []);
  return (
    <div className="confirmed">
      <div className="tick">
        <TiTickOutline />
      </div>
      <h1>Thank you for your order!</h1>
    </div>
  );
};

export default Confirmed;
