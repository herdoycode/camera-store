import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Product from "../entities/product";

const useProduct = (id: string) =>
  useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () =>
      apiClient.get<Product>(`/products/${id}`).then((res) => res.data),
  });
export default useProduct;
