import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

const useAuth = (userId: string) =>
  useQuery({
    queryKey: ["auth", userId],
    queryFn: () => apiClient.get(`/users/${userId}`).then((res) => res.data),
  });

export default useAuth;
