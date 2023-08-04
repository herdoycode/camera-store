import { Link } from "react-router-dom";
import "./Login.scss";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string().min(8).required().label("Password"),
});

interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  return (
    <div className="login">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email address..."
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
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
