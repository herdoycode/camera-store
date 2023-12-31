import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Confirmed from "./pages/confirmed/Confirmed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "confirmed", element: <Confirmed /> },
    ],
  },
]);

export default router;
