import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="box">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email address...." />
          <input type="text" placeholder="Password...." />
          <button type="submit">Login</button>
        </form>
        <Link className="link" to="/signup">
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default Login;
