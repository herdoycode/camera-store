import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authContext from "../../auth/authContext";
import Loading from "../../components/loading/Loading";
import apiClient from "../../services/apiClient";
import "./Login.scss";

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
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user } = useContext(authContext);

  useEffect(() => {
    if (user) navigate("/");
  }, []);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    apiClient
      .post("/auth", data)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("token", res.data);
        reset();
        toast.success("Login success");
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          toast.error(err.response.data);
        }
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">{loading ? <Loading /> : "Login"}</button>
        </form>
        <Link className="link" to="/signup">
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default Login;
