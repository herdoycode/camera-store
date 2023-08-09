import "./CardSkeleton.scss";

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="card-body">
        <div className="card-img"></div>
        <div className="info">
          <div className="heading"></div>
          <div className="desc"></div>
          <div className="desc"></div>
          <div className="price"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
