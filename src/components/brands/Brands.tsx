import "./Brands.scss";

const Brands = () => {
  return (
    <div className="brands">
      <h2>Our Brands</h2>
      <div className="brand-list">
        <div className="item">
          <div className="brand-card">
            <span>Sony</span>
          </div>
        </div>
        <div className="item">
          <div className="brand-card">
            <span>Nikon</span>
          </div>
        </div>
        <div className="item">
          <div className="brand-card">
            <span>Samsung</span>
          </div>
        </div>
        <div className="item">
          <div className="brand-card">
            <span>Canon</span>
          </div>
        </div>
        <div className="item">
          <div className="brand-card">
            <span>Kadak</span>
          </div>
        </div>
        <div className="item">
          <div className="brand-card">
            <span>Panasonic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
