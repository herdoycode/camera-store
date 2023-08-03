import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signup">
      <div className="box">
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="Full Name..." />
          <input type="text" placeholder="Email address...." />
          <input type="text" placeholder="Password...." />
          <button type="submit">Submit</button>
        </form>
        <Link className="link" to="/login">
          Already have account? login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
