import "./Card.scss";

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img">
          <img
            src="https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="card-body">
          <h3>This is a camera</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
          <span>$350</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
