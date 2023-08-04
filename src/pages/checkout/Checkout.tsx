import { useContext, useEffect } from "react";
import "./Checkout.scss";
import authContext from "../../auth/authContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(authContext);
  useEffect(() => {
    if (!user) navigate("/login");
  }, []);
  return <div>Checkout</div>;
};

export default Checkout;
