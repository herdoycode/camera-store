import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { GrSun } from "react-icons/gr";
import { GrMoon } from "react-icons/gr";
import "./Navbar.scss";

const Navbar = () => {
  const [navClass, setNavClass] = useState<string>("center");
  const [isCollapse, setCollapse] = useState<boolean>(true);

  const handleNavToggle = () => {
    setCollapse(!isCollapse);
  };

  useEffect(() => {
    setNavClass(isCollapse ? "center" : "center active");
  }, [isCollapse]);

  return (
    <div className="navbar">
      <div className="left">
        <div onClick={handleNavToggle} className="toggler">
          {isCollapse ? (
            <FiMenu className="icon" />
          ) : (
            <MdClose className="icon" />
          )}
        </div>
        <Link to="/" className="logo">
          EStore
        </Link>
        <div className="serarch">
          <input type="text" placeholder="Search products..." />
          <BiSearchAlt2 className="icon" />
        </div>
      </div>
      <div className={navClass}>
        <ul>
          <li>
            <Link onClick={handleNavToggle} className="link" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link onClick={handleNavToggle} className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link onClick={handleNavToggle} className="link" to="/signup">
              Signup
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="item">
          <img src="https://i.ibb.co/CJzdzdc/me.jpg" alt="user" />
        </div>
        <div className="item">
          {true ? <GrSun className="icon" /> : <GrMoon className="icon" />}
        </div>
        <div className="item">
          <MdOutlineShoppingCart className="icon" />
          <div className="count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
