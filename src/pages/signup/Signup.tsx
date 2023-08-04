import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useContext, useEffect } from "react";
import authContext from "../../auth/authContext";
import apiClient from "../../services/apiClient";
import { toast } from "react-toastify";

const schema = Joi.object({
  name: Joi.string().required().label("Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string().min(8).required().label("Password"),
});

interface FormData {
  name: string;
  email: string;
  password: string;
}
const Signup = () => {
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
    apiClient
      .post("/users", data)
      .then((res) => {
        localStorage.setItem("token", res.headers["x-auth-token"]);
        reset();
        toast.success("Signup success");
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          toast.error(err.response.data);
        }
        console.log(err.message);
      });
  };

  return (
    <div className="signup">
      <div className="box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register("name")} type="text" placeholder="Full name" />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
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
