import { useState } from "react";
import "./Products.scss";
import useBrands from "../../hooks/useBrands";
import useProducts from "../../hooks/useProducts";
import Card from "../../components/card/Card";

const Products = () => {
  const [filterPrice, setFilterPrice] = useState<number | undefined>();
  const { data: brands } = useBrands();
  const { data: products } = useProducts();
  return (
    <div className="products">
      <div className="left">
        <div className="fitler-left">
          <h3>Filter by brand</h3>
          <ul>
            {brands?.map((brand) => (
              <li key={brand._id}> {brand.name} </li>
            ))}
          </ul>
        </div>
        <div className="fitler-left">
          <h3>Filter by price</h3>
          <span>$0 {filterPrice ? `- ${filterPrice}` : null} </span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setFilterPrice(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="right">
        <div className="top">
          <h2>All Products</h2>
        </div>
        <div className="products">
          {products?.map((product) => (
            <Card product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
