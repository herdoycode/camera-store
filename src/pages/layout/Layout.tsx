import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import { useCartStore, useThemeStore } from "../../store";
import Cart from "../../components/cart/Cart";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const mode = useThemeStore((store) => store.mode);
  const isOpenCart = useCartStore((s) => s.isOpen);

  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
      {isOpenCart && <Cart />}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Layout;
