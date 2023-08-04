import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import User from "../entities/User";

const useAuth = (id: string) =>
  useQuery<User, Error>({
    queryKey: ["user"],
    queryFn: () => apiClient.get<User>(`/users/${id}`).then((res) => res.data),
  });

export default useAuth;
