import Card from "../card/Card";
import "./Latest.scss";

const Latest = () => {
  return (
    <div className="latest-wrapper">
      <h2>Latest Products</h2>
      <div className="latest">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Latest;
