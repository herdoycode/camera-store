import { createContext } from "react";
import User from "../entities/User";

interface AuthContextType {
  user: User;
}

export default createContext<AuthContextType>({} as AuthContextType);
