import { joiResolver } from "@hookform/resolvers/joi";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Joi from "joi";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authContext from "../../auth/authContext";
import Loading from "../../components/loading/Loading";
import { storage } from "../../firebase";
import apiClient from "../../services/apiClient";
import "./Signup.scss";

const schema = Joi.object({
  name: Joi.string().required().label("Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string().min(8).required().label("Password"),
  avatar: Joi.any(),
});

interface FormData {
  name: string;
  email: string;
  password: string;
  avatar: FileList;
}
const Signup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user } = useContext(authContext);

  useEffect(() => {
    if (user) navigate("/");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const file = data.avatar[0];
    const storageRef = ref(storage, `${Date.now()}`);
    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL: string) => {
        apiClient
          .post("/users", { ...data, avatar: downloadURL })
          .then((res) => {
            localStorage.setItem("token", res.headers["x-auth-token"]);
            setLoading(false);
            toast.success("Registered Success!");
            setTimeout(() => {
              window.location.href = "/";
            }, 3000);
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.message);
          });
      });
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
              required
              placeholder="Password"
            />
            {errors.avatar && (
              <p className="text-danger">{errors.avatar.message}</p>
            )}
          </div>
          <div>
            <input {...register("avatar")} type="file" />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>

          <button type="submit">{loading ? <Loading /> : "Submit"}</button>
        </form>
        <Link className="link" to="/login">
          Already have account? login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
