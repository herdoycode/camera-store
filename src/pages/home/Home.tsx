import Brands from "../../components/brands/Brands";
import Latest from "../../components/latest/Latest";
import Slider from "../../components/slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Brands />
      <Latest />
    </div>
  );
};

export default Home;
