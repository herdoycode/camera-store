import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "../../components/cart/Cart";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useCartStore, useThemeStore } from "../../store";
import "./Layout.scss";

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
      <ToastContainer position="top-center" theme={mode} />
    </div>
  );
};

export default Layout;
