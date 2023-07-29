import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Product from "../entities/product";

const useProducts = () =>
  useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () =>
      apiClient.get<Product[]>("/products").then((res) => res.data),
  });

export default useProducts;
