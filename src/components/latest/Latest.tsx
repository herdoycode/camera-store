import Product from "../../entities/product";
import Card from "../card/Card";
import "./Latest.scss";

interface Props {
  title: string;
  data?: Product[];
}

const Latest = ({ title, data }: Props) => {
  return (
    <div className="latest-wrapper">
      <h2> {title} </h2>
      <div className="latest">
        {data?.map((item) => (
          <Card key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
