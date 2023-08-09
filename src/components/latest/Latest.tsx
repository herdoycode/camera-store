import useProducts from "../../hooks/useProducts";
import CardSkeleton from "../card-skeleton/CardSkeleton";
import Card from "../card/Card";
import "./Latest.scss";

const Latest = () => {
  const { data, isLoading } = useProducts();
  const latestProducts = data?.slice(0, 6);
  return (
    <div className="latest-wrapper">
      <h2> Latest Poroducts </h2>
      {isLoading ? (
        <div className="latest">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="latest">
          {latestProducts?.map((item) => (
            <Card key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Latest;
