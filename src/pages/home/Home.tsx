import Brands from "../../components/brands/Brands";
import Latest from "../../components/latest/Latest";
import Slider from "../../components/slider/Slider";
import useProducts from "../../hooks/useProducts";
import "./Home.scss";

const Home = () => {
  const { data } = useProducts();
  return (
    <div className="home">
      <Slider />
      <Brands />
      <Latest title="Latest Products" data={data} />
    </div>
  );
};

export default Home;
