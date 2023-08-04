import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Product from "../entities/product";
import { useProductQueryStore } from "../store";

const useProducts = () => {
  const productQuery = useProductQueryStore((s) => s.productQuery);

  return useQuery<Product[], Error>({
    queryKey: ["products", productQuery],
    queryFn: () =>
      apiClient
        .get<Product[]>("/products", {
          params: {
            brandId: productQuery.brandId,
            price: productQuery.price,
          },
        })
        .then((res) => res.data),
  });
};

export default useProducts;
