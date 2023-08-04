import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { LiaMoonSolid } from "react-icons/lia";
import { BsSun } from "react-icons/bs";
import "./Navbar.scss";
import { useCartStore, useThemeStore } from "../../store";
import authContext from "../../auth/authContext";

const Navbar = () => {
  const [navClass, setNavClass] = useState<string>("center");
  const [isCollapse, setCollapse] = useState<boolean>(true);
  const mode = useThemeStore((store) => store.mode);
  const toggleTheme = useThemeStore((store) => store.toggleTheme);

  const { user } = useContext(authContext);

  const handleCartOpen = useCartStore((s) => s.handleOpen);

  const handleNavToggle = () => {
    setCollapse(!isCollapse);
  };

  const cartItemCount = useCartStore((store) => store.items.length);

  useEffect(() => {
    setNavClass(isCollapse ? "center" : "center active");
  }, [isCollapse]);

  return (
    <>
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
            {!user && (
              <>
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
              </>
            )}
            {user && (
              <li>
                <span
                  onClick={() => {
                    localStorage.removeItem("token");
                    handleNavToggle;
                    window.location.reload();
                  }}
                  className="link"
                >
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
        <div className="right">
          {user && (
            <div className="item">
              <img src={user.avatar} alt="user" />
            </div>
          )}

          <div onClick={toggleTheme} className="item">
            {mode === "dark" ? (
              <BsSun className="icon" />
            ) : (
              <LiaMoonSolid className="icon" />
            )}
          </div>
          <div onClick={() => handleCartOpen()} className="item">
            <MdOutlineShoppingCart className="icon" />
            <div className="count"> {cartItemCount} </div>
          </div>
        </div>
      </div>
      <div className="nav-fix"></div>
    </>
  );
};

export default Navbar;
