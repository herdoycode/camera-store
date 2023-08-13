import { useState } from "react";
import "./Products.scss";
import useBrands from "../../hooks/useBrands";
import useProducts from "../../hooks/useProducts";
import Card from "../../components/card/Card";
import { useProductQueryStore } from "../../store";
import CardSkeleton from "../../components/card-skeleton/CardSkeleton";

const Products = () => {
  const [filterPrice, setFilterPrice] = useState<number>(0);
  const { data: brands } = useBrands();
  const { data: products, isLoading } = useProducts();
  const brandId = useProductQueryStore((e) => e.productQuery.brandId);

  const setBrandId = useProductQueryStore((s) => s.setBrandId);
  const setPrice = useProductQueryStore((s) => s.setPrice);

  return (
    <div className="products">
      <div className="left">
        <div className="fitler-left">
          <h3>Filter by brand</h3>
          <ul>
            <li
              onClick={() => {
                setBrandId("");
                setFilterPrice(0);
              }}
            >
              All Product
            </li>
            {brands?.map((brand) => (
              <li
                className={brand._id === brandId ? "active" : ""}
                onClick={() => {
                  setBrandId(brand._id);
                  setFilterPrice(0);
                }}
                key={brand._id}
              >
                {brand.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="fitler-left">
          <h3>Filter by price</h3>
          <span>$0 {filterPrice ? `- ${filterPrice}` : null} </span>
          <input
            type="range"
            value={filterPrice}
            min={0}
            max={1000}
            onChange={(e) => {
              setFilterPrice(parseInt(e.target.value));
              setPrice(parseInt(e.target.value));
            }}
          />
        </div>
      </div>

      <div className="right">
        <div className="top">
          <h2>All Products</h2>
        </div>
        {isLoading ? (
          <div className="products">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : (
          <div className="products">
            {products?.map((product) => (
              <Card product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
