import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import { useThemeStore } from "../../store";

const Layout = () => {
  const mode = useThemeStore((store) => store.mode);

  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
