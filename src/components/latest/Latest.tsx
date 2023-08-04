import useProducts from "../../hooks/useProducts";
import Card from "../card/Card";
import "./Latest.scss";

const Latest = () => {
  const { data } = useProducts();
  const latestProducts = data?.slice(0, 6);
  return (
    <div className="latest-wrapper">
      <h2> Latest Poroducts </h2>
      <div className="latest">
        {latestProducts?.map((item) => (
          <Card key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
