import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="item">
        <h2>Brands</h2>
        <ul>
          <li>
            <Link to="/" className="link">
              Nikon
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Sony
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Canon
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Samsung
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Kadak
            </Link>
          </li>
        </ul>
      </div>
      <div className="item">
        <h2>Our links</h2>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="item">
        <h2>Privacy policy</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores
          sit explicabo tempore sint, deserunt quasi quos quia temporibus
          officiis dolore dignissimos, commodi veritatis, vero minus provident
          ex amet facilis?
        </p>
      </div>
      <div className="item">
        <h2>Payment</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores
          sit explicabo tempore sint, deserunt quasi quos quia temporibus
          officiis dolore dignissimos, commodi veritatis, vero minus provident
          ex amet facilis?
        </p>
        <img src="https://i.ibb.co/qdHJVDV/cards.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
