import { useQuery } from "@tanstack/react-query";
import Brand from "../entities/brand";
import apiClient from "../services/apiClient";

const useBrands = () =>
  useQuery<Brand[], Error>({
    queryKey: ["brands"],
    queryFn: () => apiClient.get<Brand[]>("/brands").then((res) => res.data),
  });

export default useBrands;
